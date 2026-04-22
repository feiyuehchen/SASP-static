/* ============================================================
   DSP Quest — core DSP utilities
   Pure JS, no dependencies. All routines return plain arrays
   or typed arrays so they drop into canvas plots directly.
   ============================================================ */

const DSP = (() => {

  /** Cooley–Tukey radix-2 FFT (in-place, iterative). Length must be a power of 2. */
  function fft(re, im) {
    const N = re.length;
    if ((N & (N - 1)) !== 0) throw new Error('FFT length must be power of 2, got ' + N);
    // bit-reversal permutation
    for (let i = 1, j = 0; i < N; i++) {
      let bit = N >> 1;
      for (; j & bit; bit >>= 1) j ^= bit;
      j ^= bit;
      if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; }
    }
    for (let len = 2; len <= N; len <<= 1) {
      const half = len >> 1;
      const ang = -2 * Math.PI / len;
      const wRe0 = Math.cos(ang), wIm0 = Math.sin(ang);
      for (let i = 0; i < N; i += len) {
        let wRe = 1, wIm = 0;
        for (let k = 0; k < half; k++) {
          const tRe = wRe * re[i + k + half] - wIm * im[i + k + half];
          const tIm = wRe * im[i + k + half] + wIm * re[i + k + half];
          re[i + k + half] = re[i + k] - tRe;
          im[i + k + half] = im[i + k] - tIm;
          re[i + k] += tRe;
          im[i + k] += tIm;
          const nRe = wRe * wRe0 - wIm * wIm0;
          wIm = wRe * wIm0 + wIm * wRe0;
          wRe = nRe;
        }
      }
    }
  }

  /** Inverse FFT via conjugate trick. Modifies in place; divides by N. */
  function ifft(re, im) {
    const N = re.length;
    for (let i = 0; i < N; i++) im[i] = -im[i];
    fft(re, im);
    for (let i = 0; i < N; i++) { re[i] /= N; im[i] = -im[i] / N; }
  }

  /** Next power of two >= n. */
  const nextPow2 = n => { let p = 1; while (p < n) p <<= 1; return p; };

  /** Zero-pad a real signal to a target length (or next pow2 if length omitted). */
  function zeroPad(x, len) {
    len = len || nextPow2(x.length);
    const out = new Float32Array(len);
    out.set(x);
    return out;
  }

  /** Compute the magnitude spectrum (linear) of a real signal. Returns length N/2+1. */
  function magSpectrum(x) {
    const N = nextPow2(x.length);
    const re = new Float32Array(N), im = new Float32Array(N);
    re.set(x);
    fft(re, im);
    const out = new Float32Array(N / 2 + 1);
    for (let k = 0; k <= N / 2; k++) out[k] = Math.hypot(re[k], im[k]);
    return out;
  }

  /** Magnitude in dB (clamped to floor). */
  const toDb = (mag, floorDb = -100) => {
    const out = new Float32Array(mag.length);
    const ref = 1e-12;
    for (let i = 0; i < mag.length; i++) {
      const db = 20 * Math.log10(Math.max(mag[i], ref));
      out[i] = Math.max(db, floorDb);
    }
    return out;
  };

  /** Phase spectrum (wrapped to (-π, π]). */
  function phaseSpectrum(x) {
    const N = nextPow2(x.length);
    const re = new Float32Array(N), im = new Float32Array(N);
    re.set(x);
    fft(re, im);
    const out = new Float32Array(N / 2 + 1);
    for (let k = 0; k <= N / 2; k++) out[k] = Math.atan2(im[k], re[k]);
    return out;
  }

  /* ---------------- Window functions ---------------- */

  function rectWindow(N)    { return new Float32Array(N).fill(1); }
  function hannWindow(N)    { const w = new Float32Array(N); for (let n = 0; n < N; n++) w[n] = 0.5 - 0.5 * Math.cos(2 * Math.PI * n / (N - 1)); return w; }
  function hammingWindow(N) { const w = new Float32Array(N); for (let n = 0; n < N; n++) w[n] = 0.54 - 0.46 * Math.cos(2 * Math.PI * n / (N - 1)); return w; }
  function blackmanWindow(N){ const w = new Float32Array(N); for (let n = 0; n < N; n++) w[n] = 0.42 - 0.5 * Math.cos(2 * Math.PI * n / (N - 1)) + 0.08 * Math.cos(4 * Math.PI * n / (N - 1)); return w; }
  function bartlettWindow(N){ const w = new Float32Array(N); const M = N - 1; for (let n = 0; n < N; n++) w[n] = 1 - Math.abs((n - M / 2) / (M / 2)); return w; }
  function gaussianWindow(N, sigma = 0.4) {
    const w = new Float32Array(N); const M = (N - 1) / 2;
    for (let n = 0; n < N; n++) { const t = (n - M) / (sigma * M); w[n] = Math.exp(-0.5 * t * t); }
    return w;
  }
  /** Modified Bessel function of the first kind, order 0, via series. */
  function besselI0(x) {
    let s = 1, t = 1;
    const xh2 = (x / 2) * (x / 2);
    for (let k = 1; k < 50; k++) { t *= xh2 / (k * k); s += t; if (t < 1e-12 * s) break; }
    return s;
  }
  function kaiserWindow(N, beta = 6) {
    const w = new Float32Array(N); const M = N - 1; const denom = besselI0(beta);
    for (let n = 0; n < N; n++) {
      const arg = beta * Math.sqrt(1 - Math.pow((2 * n - M) / M, 2));
      w[n] = besselI0(arg) / denom;
    }
    return w;
  }
  const WINDOWS = {
    rect: rectWindow, hann: hannWindow, hamming: hammingWindow,
    blackman: blackmanWindow, bartlett: bartlettWindow,
    gaussian: gaussianWindow, kaiser: kaiserWindow,
  };

  /** Apply a window to a signal (element-wise). */
  function applyWindow(x, w) {
    const y = new Float32Array(x.length);
    for (let n = 0; n < x.length; n++) y[n] = x[n] * w[n];
    return y;
  }

  /* ---------------- Signal generators ---------------- */

  function sinusoid(N, freqBin, phase = 0, amp = 1) {
    const x = new Float32Array(N);
    for (let n = 0; n < N; n++) x[n] = amp * Math.cos(2 * Math.PI * freqBin * n / N + phase);
    return x;
  }
  function realSine(N, fHz, fs, phase = 0, amp = 1) {
    const x = new Float32Array(N);
    for (let n = 0; n < N; n++) x[n] = amp * Math.cos(2 * Math.PI * fHz * n / fs + phase);
    return x;
  }
  function whiteNoise(N, amp = 1) {
    const x = new Float32Array(N);
    for (let n = 0; n < N; n++) x[n] = amp * (2 * Math.random() - 1);
    return x;
  }
  function impulse(N, idx = 0) { const x = new Float32Array(N); x[idx] = 1; return x; }
  function unitStep(N, idx = 0) { const x = new Float32Array(N); for (let n = idx; n < N; n++) x[n] = 1; return x; }

  /* ---------------- Convolution ---------------- */

  function convolveDirect(x, h) {
    const N = x.length, M = h.length;
    const y = new Float32Array(N + M - 1);
    for (let n = 0; n < y.length; n++) {
      let s = 0;
      const kMin = Math.max(0, n - M + 1), kMax = Math.min(N - 1, n);
      for (let k = kMin; k <= kMax; k++) s += x[k] * h[n - k];
      y[n] = s;
    }
    return y;
  }

  /** Linear convolution via zero-padded FFT. */
  function convolveFft(x, h) {
    const L = x.length + h.length - 1;
    const N = nextPow2(L);
    const xr = new Float32Array(N), xi = new Float32Array(N);
    const hr = new Float32Array(N), hi = new Float32Array(N);
    xr.set(x); hr.set(h);
    fft(xr, xi); fft(hr, hi);
    for (let k = 0; k < N; k++) {
      const re = xr[k] * hr[k] - xi[k] * hi[k];
      const im = xr[k] * hi[k] + xi[k] * hr[k];
      xr[k] = re; xi[k] = im;
    }
    ifft(xr, xi);
    return xr.slice(0, L);
  }

  /* ---------------- DTFT on an arbitrary frequency grid ----------------
     For short signals, evaluate X(ω) = Σ x[n] e^{-jωn} directly so we can
     draw a "continuous" DTFT curve (not just DFT bins). */
  function dtft(x, omegas) {
    const re = new Float32Array(omegas.length);
    const im = new Float32Array(omegas.length);
    for (let i = 0; i < omegas.length; i++) {
      let r = 0, ii = 0;
      const w = omegas[i];
      for (let n = 0; n < x.length; n++) {
        r +=  x[n] * Math.cos(w * n);
        ii += -x[n] * Math.sin(w * n);
      }
      re[i] = r; im[i] = ii;
    }
    return { re, im };
  }

  /** Utility: linspace(a, b, n) inclusive. */
  function linspace(a, b, n) {
    const out = new Float32Array(n);
    const d = (b - a) / (n - 1);
    for (let i = 0; i < n; i++) out[i] = a + i * d;
    return out;
  }

  return {
    fft, ifft, nextPow2, zeroPad, magSpectrum, phaseSpectrum, toDb,
    WINDOWS, applyWindow,
    sinusoid, realSine, whiteNoise, impulse, unitStep,
    convolveDirect, convolveFft, dtft, linspace,
  };
})();
