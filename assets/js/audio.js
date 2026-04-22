/* ============================================================
   DSP Quest — Web Audio helpers
   ============================================================ */

const AudioKit = (() => {
  let _ctx = null;
  function ctx() {
    if (!_ctx) {
      _ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  }

  /** Play a Float32Array as a mono buffer. durationSec is optional override (defaults to samples/sr). */
  function playBuffer(samples, sampleRate = 44100, gain = 0.5) {
    const ac = ctx();
    const buf = ac.createBuffer(1, samples.length, sampleRate);
    buf.copyToChannel(new Float32Array(samples), 0);
    const src = ac.createBufferSource();
    const g = ac.createGain();
    g.gain.value = gain;
    src.buffer = buf;
    src.connect(g).connect(ac.destination);
    src.start();
    return src;
  }

  /** Quick beep of a sinusoid with envelope to avoid clicks. */
  function beep(freq = 440, durSec = 0.4, gain = 0.3) {
    const sr = 44100, N = Math.floor(durSec * sr);
    const x = new Float32Array(N);
    const ramp = Math.floor(0.01 * sr);
    for (let n = 0; n < N; n++) {
      let env = 1;
      if (n < ramp) env = n / ramp;
      else if (n > N - ramp) env = (N - n) / ramp;
      x[n] = env * gain * Math.sin(2 * Math.PI * freq * n / sr);
    }
    return playBuffer(x, sr, 1);
  }

  /** Tiny SFX: coin pickup (~Mario). */
  function coin() {
    const sr = 44100, dur = 0.18, N = Math.floor(dur * sr);
    const x = new Float32Array(N);
    const f1 = 988, f2 = 1319;
    const split = Math.floor(0.05 * sr);
    for (let n = 0; n < N; n++) {
      const t = n / sr;
      const f = (n < split) ? f1 : f2;
      const env = Math.exp(-3 * t);
      x[n] = 0.25 * env * Math.sign(Math.sin(2 * Math.PI * f * t));
    }
    return playBuffer(x, sr, 1);
  }

  return { ctx, playBuffer, beep, coin };
})();
