# DSP Quest — Page Manifest

Full enumeration of every leaf section in
[Spectral Audio Signal Processing (SASP) by Julius O. Smith III](https://ccrma.stanford.edu/~jos/sasp/).
Each line corresponds to **one HTML page** in this site. The rule is:
**no line may be deleted until the page is built.**

- [x] = page built and reviewed
- [~] = page built, needs review
- [ ] = not started

All pages must be bilingual (English first, then Traditional Chinese), use the
8-bit NES theme, include at least one interactive canvas where meaningful, and
wrap Chinese technical terms in `<span class="term" data-en … data-zh-def …
data-en-def …>` for hover tooltips.

---

## World 1 · Preface  (ch01-preface/)

- [~] 1.1  Acknowledgments                                 — `ch01-preface/1.1-acks.html`
- [~] 1.2  Book Series Overview                            — `ch01-preface/1.2-series.html`
- [~] 1.3  Errata                                          — `ch01-preface/1.3-errata.html`

## World 2 · Introduction and Overview  (ch02-introduction/)

- [~] 2.1  Organization                                    — `ch02-introduction/2.1-organization.html`
- [~] 2.2  Overview                                        — `ch02-introduction/2.2-overview.html`
- [~] 2.2.1 Elementary Spectrum Analysis                   — `ch02-introduction/2.2.1-elementary-spec.html`
- [~] 2.2.2 STFT & Time-Frequency Displays                 — `ch02-introduction/2.2.2-stft-tf.html`
- [~] 2.2.3 Short-Time Analysis · Modification · Resynth.  — `ch02-introduction/2.2.3-stam.html`
- [~] 2.2.4 STFT Applications                              — `ch02-introduction/2.2.4-apps.html`
- [~] 2.2.5 Multirate Polyphase & Wavelet Filter Banks     — `ch02-introduction/2.2.5-multirate.html`
- [~] 2.2.6 Appendices                                     — `ch02-introduction/2.2.6-appendices.html`

## World 3 · Fourier Transforms and Theorems  (ch03-fourier-transforms/)

- [~] 3.1   Discrete Time Fourier Transform                — `ch03-fourier-transforms/3.1-dtft.html`
- [~] 3.2   Fourier Transform (FT) and Inverse · Existence — `ch03-fourier-transforms/3.2-ft-and-inverse.html`
- [~] 3.3   Linearity of the DTFT                          — `ch03-fourier-transforms/3.3-linearity.html`
- [~] 3.4   Time Reversal                                  — `ch03-fourier-transforms/3.4-time-reversal.html`
- [~] 3.5   Symmetry of the DTFT for Real Signals          — `ch03-fourier-transforms/3.5-symmetry.html`
- [~] 3.5.1 DTFT of Real Signals                           — `ch03-fourier-transforms/3.5.1-dtft-real.html`
- [~] 3.5.2 Real Even (or Odd) Signals                     — `ch03-fourier-transforms/3.5.2-real-even-odd.html`
- [~] 3.6   Shift Theorem                                  — `ch03-fourier-transforms/3.6-shift.html`
- [~] 3.7   Convolution Theorem                            — `ch03-fourier-transforms/3.7-convolution.html`
- [~] 3.8   Correlation Theorem                            — `ch03-fourier-transforms/3.8-correlation.html`
- [~] 3.9   Autocorrelation                                — `ch03-fourier-transforms/3.9-autocorrelation.html`
- [~] 3.10  Power Theorem (Parseval)                       — `ch03-fourier-transforms/3.10-power.html`
- [~] 3.11  Stretch Operator                               — `ch03-fourier-transforms/3.11-stretch.html`
- [~] 3.12  Repeat (Scaling) Operator                      — `ch03-fourier-transforms/3.12-repeat.html`
- [~] 3.13  Stretch/Repeat (Scaling) Theorem               — `ch03-fourier-transforms/3.13-stretch-repeat.html`
- [~] 3.14  Downsampling and Aliasing                      — `ch03-fourier-transforms/3.14-downsampling-aliasing.html`
- [~] 3.14.1 Proof of Aliasing Theorem                     — `ch03-fourier-transforms/3.14.1-aliasing-proof.html`
- [~] 3.15  Differentiation Theorem Dual                   — `ch03-fourier-transforms/3.15-diff-dual.html`
- [~] 3.16  Continuous-Time Fourier Theorems               — `ch03-fourier-transforms/3.16-ct-theorems.html`
- [~] 3.16.1 Scaling Theorem                               — `ch03-fourier-transforms/3.16.1-scaling.html`
- [~] 3.16.2 Spectral Roll-Off                             — `ch03-fourier-transforms/3.16.2-rolloff.html`
- [~] 3.17  Spectral Interpolation                         — `ch03-fourier-transforms/3.17-spectral-interpolation.html`
- [~] 3.17.1 Ideal Spectral Interpolation                  — `ch03-fourier-transforms/3.17.1-ideal-interp.html`
- [~] 3.17.2 Interpolating a DFT                           — `ch03-fourier-transforms/3.17.2-interp-dft.html`
- [~] 3.17.3 Zero Padding in the Time Domain               — `ch03-fourier-transforms/3.17.3-zero-pad.html`
- [~] 3.17.3.1 Practical Zero Padding                      — `ch03-fourier-transforms/3.17.3.1-practical-zp.html`
- [~] 3.17.3.2 Zero-Padding to Next Power of 2             — `ch03-fourier-transforms/3.17.3.2-zp-pow2.html`
- [~] 3.17.3.3 ZP for Interpolating Spectral Displays      — `ch03-fourier-transforms/3.17.3.3-zp-display.html`
- [~] 3.17.3.4 ZP for Interpolating Spectral Peaks         — `ch03-fourier-transforms/3.17.3.4-zp-peaks.html`
- [~] 3.17.4 Zero-Phase Zero Padding                       — `ch03-fourier-transforms/3.17.4-zero-phase-zp.html`
- [~] 3.17.4.1 Matlab/Octave fftshift utility              — `ch03-fourier-transforms/3.17.4.1-fftshift.html`
- [~] 3.17.4.2 Index Ranges for Zero-Phase ZP              — `ch03-fourier-transforms/3.17.4.2-zphase-idx.html`
- [~] 3.18  Summary                                        — `ch03-fourier-transforms/3.18-summary.html`

## World 4 · Spectrum Analysis Windows  (ch04-windows/)

- [ ] 4.1   The Rectangular Window                         — `ch04-windows/4.1-rectangular.html`
- [ ] 4.1.1 Side Lobes                                     — `ch04-windows/4.1.1-sidelobes.html`
- [ ] 4.1.2 Summary (Rect)                                 — `ch04-windows/4.1.2-rect-summary.html`
- [ ] 4.2   Generalized Hamming Window Family              — `ch04-windows/4.2-generalized-hamming.html`
- [ ] 4.2.1 Hann (Hanning · Raised Cosine)                 — `ch04-windows/4.2.1-hann.html`
- [ ] 4.2.2 Matlab for the Hann Window                     — `ch04-windows/4.2.2-matlab-hann.html`
- [ ] 4.2.3 Hamming Window                                 — `ch04-windows/4.2.3-hamming.html`
- [ ] 4.2.4 Matlab for the Hamming Window                  — `ch04-windows/4.2.4-matlab-hamming.html`
- [ ] 4.2.5 Summary of Generalized Hamming Windows         — `ch04-windows/4.2.5-ghamming-summary.html`
- [ ] 4.2.6 MLT Sine Window                                — `ch04-windows/4.2.6-mlt-sine.html`
- [ ] 4.3   Blackman-Harris Window Family                  — `ch04-windows/4.3-blackman-harris.html`
- [ ] 4.3.1 Blackman Window Family                         — `ch04-windows/4.3.1-blackman-family.html`
- [ ] 4.3.2 Classic Blackman                               — `ch04-windows/4.3.2-classic-blackman.html`
- [ ] 4.3.3 Matlab for Classic Blackman                    — `ch04-windows/4.3.3-matlab-blackman.html`
- [ ] 4.3.4 Three-Term Blackman-Harris                     — `ch04-windows/4.3.4-3term-bh.html`
- [ ] 4.3.5 Frequency-Domain Blackman-Harris               — `ch04-windows/4.3.5-fd-bh.html`
- [ ] 4.3.6 Power-of-Cosine Window Family                  — `ch04-windows/4.3.6-pow-cos.html`
- [ ] 4.4   Spectrum Analysis of an Oboe Tone              — `ch04-windows/4.4-oboe.html`
- [ ] 4.4.1 Rect-Windowed Oboe                             — `ch04-windows/4.4.1-oboe-rect.html`
- [ ] 4.4.2 Hamming-Windowed Oboe                          — `ch04-windows/4.4.2-oboe-hamming.html`
- [ ] 4.4.3 Blackman-Windowed Oboe                         — `ch04-windows/4.4.3-oboe-blackman.html`
- [ ] 4.4.4 Conclusions (Oboe)                             — `ch04-windows/4.4.4-oboe-conclusion.html`
- [ ] 4.5   Bartlett (Triangular) Window                   — `ch04-windows/4.5-bartlett.html`
- [ ] 4.5.1 Matlab for the Bartlett Window                 — `ch04-windows/4.5.1-matlab-bartlett.html`
- [ ] 4.6   Poisson Window                                 — `ch04-windows/4.6-poisson.html`
- [ ] 4.7   Hann-Poisson Window                            — `ch04-windows/4.7-hann-poisson.html`
- [ ] 4.7.1 Matlab for the Hann-Poisson Window             — `ch04-windows/4.7.1-matlab-hann-poisson.html`
- [ ] 4.8   Slepian / DPSS Window                          — `ch04-windows/4.8-dpss.html`
- [ ] 4.8.1 Matlab for the DPSS Window                     — `ch04-windows/4.8.1-matlab-dpss.html`
- [ ] 4.9   Kaiser Window                                  — `ch04-windows/4.9-kaiser.html`
- [ ] 4.9.1 Kaiser Window Beta Parameter                   — `ch04-windows/4.9.1-kaiser-beta.html`
- [ ] 4.9.2 Kaiser Windows and Transforms                  — `ch04-windows/4.9.2-kaiser-xforms.html`
- [ ] 4.9.3 Minimum Frequency Separation vs. Length        — `ch04-windows/4.9.3-kaiser-sep.html`
- [ ] 4.9.4 Kaiser and DPSS Compared                       — `ch04-windows/4.9.4-kaiser-vs-dpss.html`
- [ ] 4.10  Dolph-Chebyshev Window                         — `ch04-windows/4.10-dolph-chebyshev.html`
- [ ] 4.10.1 Matlab for Dolph-Chebyshev                    — `ch04-windows/4.10.1-matlab-cheby.html`
- [ ] 4.10.2 Example Chebyshev Windows                     — `ch04-windows/4.10.2-cheby-examples.html`
- [ ] 4.10.3 Chebyshev vs Hamming                          — `ch04-windows/4.10.3-cheby-vs-hamming.html`
- [ ] 4.10.4 Dolph-Chebyshev Window Theory                 — `ch04-windows/4.10.4-cheby-theory.html`
- [ ] 4.10.4.1 Chebyshev Polynomials                       — `ch04-windows/4.10.4.1-cheby-poly.html`
- [ ] 4.10.4.2 Dolph-Chebyshev Window Definition           — `ch04-windows/4.10.4.2-cheby-def.html`
- [ ] 4.10.4.3 Main-Lobe Width                             — `ch04-windows/4.10.4.3-cheby-mainlobe.html`
- [ ] 4.10.4.4 Length Computation                          — `ch04-windows/4.10.4.4-cheby-length.html`
- [ ] 4.11  Gaussian Window and Transform                  — `ch04-windows/4.11-gaussian.html`
- [ ] 4.11.1 Matlab for the Gaussian Window                — `ch04-windows/4.11.1-matlab-gaussian.html`
- [ ] 4.11.2 Gaussian Window and Transform (detail)        — `ch04-windows/4.11.2-gauss-xform.html`
- [ ] 4.11.3 Exact Discrete Gaussian Window                — `ch04-windows/4.11.3-exact-discrete-gauss.html`
- [ ] 4.12  Optimized Windows                              — `ch04-windows/4.12-optimized.html`
- [ ] 4.12.1 Optimal Windows for Audio Coding              — `ch04-windows/4.12.1-audio-coding.html`
- [ ] 4.12.2 General Rule                                  — `ch04-windows/4.12.2-general-rule.html`
- [ ] 4.13  Optimal Window Design by linprog               — `ch04-windows/4.13-linprog.html`
- [ ] 4.13.1 Linear Programming                            — `ch04-windows/4.13.1-lp.html`
- [ ] 4.13.2 LP Formulation of Chebyshev Window Design     — `ch04-windows/4.13.2-lp-cheby.html`
- [ ] 4.13.3 Symmetric Window Constraint                   — `ch04-windows/4.13.3-sym-constraint.html`
- [ ] 4.13.4 Positive Window-Sample Constraint             — `ch04-windows/4.13.4-pos-constraint.html`
- [ ] 4.13.5 DC Constraint                                 — `ch04-windows/4.13.5-dc-constraint.html`
- [ ] 4.13.6 Sidelobe Specification                        — `ch04-windows/4.13.6-sidelobe-spec.html`
- [ ] 4.13.7 LP Standard Form                              — `ch04-windows/4.13.7-lp-std.html`
- [ ] 4.13.8 Remez Exchange Algorithm                      — `ch04-windows/4.13.8-remez.html`
- [ ] 4.13.8.1 Convergence of Remez                        — `ch04-windows/4.13.8.1-remez-conv.html`
- [ ] 4.13.9 Monotonicity Constraint                       — `ch04-windows/4.13.9-monotonic.html`
- [ ] 4.13.10 L-Infinity Norm of Derivative Objective      — `ch04-windows/4.13.10-linf-deriv.html`
- [ ] 4.13.11 L-One Norm of Derivative Objective           — `ch04-windows/4.13.11-l1-deriv.html`
- [ ] 4.13.12 Summary (Windows)                            — `ch04-windows/4.13.12-windows-summary.html`

## World 5 · FIR Digital Filter Design  (ch05-fir-design/)

- [ ] 5.1   Ideal Lowpass Filter                           — `ch05-fir-design/5.1-ideal-lp.html`
- [ ] 5.2   Lowpass Filter Design Specifications           — `ch05-fir-design/5.2-lp-specs.html`
- [ ] 5.2.1 Ideal Lowpass Filter Revisited                 — `ch05-fir-design/5.2.1-ideal-lp2.html`
- [ ] 5.3   Least-Squares FIR Design                       — `ch05-fir-design/5.3-ls.html`
- [ ] 5.3.1 Examples (LS)                                  — `ch05-fir-design/5.3.1-ls-examples.html`
- [ ] 5.4   Frequency-Sampling FIR Design                  — `ch05-fir-design/5.4-freq-samp.html`
- [ ] 5.5   Window Method for FIR Design                   — `ch05-fir-design/5.5-window-method.html`
- [ ] 5.5.1 Matlab Support for the Window Method           — `ch05-fir-design/5.5.1-matlab-window.html`
- [ ] 5.5.2 Bandpass Filter Design Example                 — `ch05-fir-design/5.5.2-bp-example.html`
- [ ] 5.5.2.1 Under the Hood of kaiserord                  — `ch05-fir-design/5.5.2.1-kaiserord.html`
- [ ] 5.5.2.2 Comparison to Optimal Chebyshev FIR BP       — `ch05-fir-design/5.5.2.2-vs-cheby.html`
- [ ] 5.6   Hilbert Transform Design Example               — `ch05-fir-design/5.6-hilbert.html`
- [ ] 5.6.1 Hilbert Transform Theory                       — `ch05-fir-design/5.6.1-hilbert-theory.html`
- [ ] 5.6.1.1 Hilbert Transform (definition)               — `ch05-fir-design/5.6.1.1-hilbert-def.html`
- [ ] 5.6.2 Preparing the Desired Impulse Response         — `ch05-fir-design/5.6.2-desired-ir.html`
- [ ] 5.6.2.1 Matlab, Continued                            — `ch05-fir-design/5.6.2.1-matlab-cont.html`
- [ ] 5.6.2.2 Kaiser Window (in Hilbert design)            — `ch05-fir-design/5.6.2.2-kaiser-in-hilbert.html`
- [ ] 5.6.2.3 Hilbert Transformer by Window Method         — `ch05-fir-design/5.6.2.3-hilbert-window.html`
- [ ] 5.6.3 More General FIR Filter Design                 — `ch05-fir-design/5.6.3-general-fir.html`
- [ ] 5.6.4 Comparison to Optimal Chebyshev FIR            — `ch05-fir-design/5.6.4-vs-optimal.html`
- [ ] 5.6.5 Conclusions (Hilbert)                          — `ch05-fir-design/5.6.5-hilbert-conclusion.html`
- [ ] 5.7   Generalized Window Method                      — `ch05-fir-design/5.7-generalized-window.html`
- [ ] 5.8   Minimum-Phase Filter Design                    — `ch05-fir-design/5.8-min-phase.html`
- [ ] 5.9   Minimum-Phase and Causal Cepstra               — `ch05-fir-design/5.9-min-phase-cepstra.html`
- [ ] 5.10  Optimal FIR Digital Filter Design              — `ch05-fir-design/5.10-optimal-fir.html`
- [ ] 5.10.1 Lp Norms                                      — `ch05-fir-design/5.10.1-lp-norms.html`
- [ ] 5.10.1.1 Special Cases (Lp)                          — `ch05-fir-design/5.10.1.1-lp-special.html`
- [ ] 5.10.1.2 Filter Design using Lp Norms                — `ch05-fir-design/5.10.1.2-lp-design.html`
- [ ] 5.10.2 Optimal Chebyshev FIR Filters                 — `ch05-fir-design/5.10.2-optimal-cheby.html`
- [ ] 5.10.3 Least-Squares Linear-Phase FIR Design         — `ch05-fir-design/5.10.3-ls-linphase.html`
- [ ] 5.10.3.1 Geometric Interp. of Least Squares          — `ch05-fir-design/5.10.3.1-ls-geom.html`
- [ ] 5.10.3.2 Matlab Support for LS FIR                   — `ch05-fir-design/5.10.3.2-ls-matlab.html`
- [ ] 5.10.4 Chebyshev FIR Design via LP                   — `ch05-fir-design/5.10.4-cheby-lp.html`
- [ ] 5.10.5 More General Real FIR Filters                 — `ch05-fir-design/5.10.5-general-real.html`
- [ ] 5.10.6 Nonlinear-Phase FIR Filter Design             — `ch05-fir-design/5.10.6-nonlin-phase.html`
- [ ] 5.10.6.1 Problem Formulation                         — `ch05-fir-design/5.10.6.1-nlp-problem.html`
- [ ] 5.10.7 Matlab for General FIR Filter Design          — `ch05-fir-design/5.10.7-matlab-general.html`
- [ ] 5.10.8 Second-Order Cone Problems                    — `ch05-fir-design/5.10.8-socp.html`
- [ ] 5.10.8.1 Resources                                   — `ch05-fir-design/5.10.8.1-socp-resources.html`
- [ ] 5.10.9 Nonlinear Optimization in Matlab              — `ch05-fir-design/5.10.9-nonlin-opt.html`

## World 6 · Spectrum Analysis of Sinusoids  (ch06-sinusoids/)

- [ ] 6.1   Spectrum of a Sinusoid                         — `ch06-sinusoids/6.1-spec-sinusoid.html`
- [ ] 6.2   Spectrum of Sampled Complex Sinusoid           — `ch06-sinusoids/6.2-spec-sampled-complex.html`
- [ ] 6.3   Spectrum of a Windowed Sinusoid                — `ch06-sinusoids/6.3-windowed-sinusoid.html`
- [ ] 6.4   Effect of Windowing                            — `ch06-sinusoids/6.4-effect-of-windowing.html`
- [ ] 6.4.1 Frequency Resolution                           — `ch06-sinusoids/6.4.1-freq-resolution.html`
- [ ] 6.4.1.1 Two Cosines ("In-Phase")                     — `ch06-sinusoids/6.4.1.1-two-cosines.html`
- [ ] 6.4.1.2 Sine + Cosine (Phase Quadrature)             — `ch06-sinusoids/6.4.1.2-sine-cos-quad.html`
- [ ] 6.5   Resolving Sinusoids                            — `ch06-sinusoids/6.5-resolving.html`
- [ ] 6.5.1 Other Definitions of Main-Lobe Width           — `ch06-sinusoids/6.5.1-mainlobe-defs.html`
- [ ] 6.5.2 Simple Sufficient Condition for Peak Res.      — `ch06-sinusoids/6.5.2-peak-resolution.html`
- [ ] 6.5.3 Periodic Signals                               — `ch06-sinusoids/6.5.3-periodic.html`
- [ ] 6.5.4 Tighter Bounds for Min Window Length           — `ch06-sinusoids/6.5.4-tighter-bounds.html`
- [ ] 6.5.5 Summary                                        — `ch06-sinusoids/6.5.5-resolve-summary.html`
- [ ] 6.6   Sinusoidal Peak Interpolation                  — `ch06-sinusoids/6.6-peak-interp.html`
- [ ] 6.6.1 Quadratic Interpolation of Spectral Peaks      — `ch06-sinusoids/6.6.1-quadratic-interp.html`
- [ ] 6.6.1.1 Phase Interpolation at a Peak                — `ch06-sinusoids/6.6.1.1-phase-interp.html`
- [ ] 6.6.1.2 Matlab for Parabolic Peak Interp.            — `ch06-sinusoids/6.6.1.2-matlab-qint.html`
- [ ] 6.6.2 Bias of Parabolic Peak Interpolation           — `ch06-sinusoids/6.6.2-parabolic-bias.html`
- [ ] 6.7   Optimal Peak-Finding in the Spectrum           — `ch06-sinusoids/6.7-optimal-peak.html`
- [ ] 6.7.1 Min Zero-Padding for High-Freq Peaks           — `ch06-sinusoids/6.7.1-min-zp-high.html`
- [ ] 6.7.2 Min Zero-Padding for Low-Freq Peaks            — `ch06-sinusoids/6.7.2-min-zp-low.html`
- [ ] 6.7.3 Matlab for Min ZP Factors                      — `ch06-sinusoids/6.7.3-matlab-zp.html`
- [ ] 6.7.4 Least-Squares Sinusoidal Param Estimation      — `ch06-sinusoids/6.7.4-ls-param.html`
- [ ] 6.7.4.1 Sinusoidal Amplitude Estimation              — `ch06-sinusoids/6.7.4.1-amp-est.html`
- [ ] 6.7.4.2 Sinusoidal Amplitude & Phase Estimation      — `ch06-sinusoids/6.7.4.2-amp-phase-est.html`
- [ ] 6.7.4.3 Sinusoidal Frequency Estimation              — `ch06-sinusoids/6.7.4.3-freq-est.html`
- [ ] 6.7.5 Maximum Likelihood Sinusoid Estimation         — `ch06-sinusoids/6.7.5-mle.html`
- [ ] 6.7.6 Likelihood Function                            — `ch06-sinusoids/6.7.6-likelihood.html`
- [ ] 6.7.6.1 Multiple Sinusoids in AWGN                   — `ch06-sinusoids/6.7.6.1-mult-sin-awgn.html`
- [ ] 6.7.6.2 Non-White Noise                              — `ch06-sinusoids/6.7.6.2-nonwhite-noise.html`
- [ ] 6.7.7 Generality of ML Least Squares                 — `ch06-sinusoids/6.7.7-general-mle-ls.html`

## World 7 · Spectrum Analysis of Noise  (ch07-noise/)

- [ ] 7.1   Introduction to Noise                          — `ch07-noise/7.1-intro.html`
- [ ] 7.1.1 Why Analyze Noise?                             — `ch07-noise/7.1.1-why.html`
- [ ] 7.1.2 What is Noise?                                 — `ch07-noise/7.1.2-what.html`
- [ ] 7.2   Spectral Characteristics of Noise              — `ch07-noise/7.2-spec-chars.html`
- [ ] 7.3   White Noise                                    — `ch07-noise/7.3-white.html`
- [ ] 7.3.1 Testing for White Noise                        — `ch07-noise/7.3.1-testing-white.html`
- [ ] 7.4   Sample Autocorrelation                         — `ch07-noise/7.4-sample-autocorr.html`
- [ ] 7.5   Sample Power Spectral Density                  — `ch07-noise/7.5-sample-psd.html`
- [ ] 7.6   Biased Sample Autocorrelation                  — `ch07-noise/7.6-biased-autocorr.html`
- [ ] 7.7   Smoothed Power Spectral Density                — `ch07-noise/7.7-smoothed-psd.html`
- [ ] 7.8   Cyclic Autocorrelation                         — `ch07-noise/7.8-cyclic-autocorr.html`
- [ ] 7.9   Practical Bottom Line                          — `ch07-noise/7.9-bottom-line.html`
- [ ] 7.10  Why an Impulse is Not White Noise              — `ch07-noise/7.10-impulse-vs-white.html`
- [ ] 7.11  The Periodogram                                — `ch07-noise/7.11-periodogram.html`
- [ ] 7.11.1 Matlab for the Periodogram                    — `ch07-noise/7.11.1-matlab-periodogram.html`
- [ ] 7.12  Welch's Method                                 — `ch07-noise/7.12-welch.html`
- [ ] 7.12.1 Welch Autocorrelation Estimate                — `ch07-noise/7.12.1-welch-autocorr.html`
- [ ] 7.12.2 Resolution versus Stability                   — `ch07-noise/7.12.2-res-vs-stab.html`
- [ ] 7.13  Welch's Method with Windows                    — `ch07-noise/7.13-welch-windows.html`
- [ ] 7.13.1 Matlab for Welch's Method                     — `ch07-noise/7.13.1-matlab-welch.html`
- [ ] 7.14  Filtered White Noise                           — `ch07-noise/7.14-filtered-white.html`
- [ ] 7.14.1 Example: FIR-Filtered White Noise             — `ch07-noise/7.14.1-fir-white.html`
- [ ] 7.14.2 Example: Synthesis of 1/F (Pink) Noise        — `ch07-noise/7.14.2-pink.html`
- [ ] 7.14.3 Example: Pink Noise Analysis                  — `ch07-noise/7.14.3-pink-analysis.html`
- [ ] 7.15  Processing Gain                                — `ch07-noise/7.15-processing-gain.html`
- [ ] 7.16  The Panning Problem                            — `ch07-noise/7.16-panning.html`

## World 8 · Time-Frequency Displays  (ch08-time-frequency/)

- [ ] 8.1   Short-Time Fourier Transform                   — `ch08-time-frequency/8.1-stft.html`
- [ ] 8.1.1 Mathematical Definition of the STFT            — `ch08-time-frequency/8.1.1-stft-math.html`
- [ ] 8.1.2 Practical Computation of the STFT              — `ch08-time-frequency/8.1.2-stft-practical.html`
- [ ] 8.1.3 Summary of STFT Computation Using FFTs         — `ch08-time-frequency/8.1.3-stft-fft-summary.html`
- [ ] 8.1.4 Two Dual Interpretations of the STFT           — `ch08-time-frequency/8.1.4-stft-duals.html`
- [ ] 8.1.5 STFT as a Time-Frequency Distribution          — `ch08-time-frequency/8.1.5-stft-tfd.html`
- [ ] 8.1.6 STFT in Matlab                                 — `ch08-time-frequency/8.1.6-stft-matlab.html`
- [ ] 8.1.6.1 Notes                                        — `ch08-time-frequency/8.1.6.1-notes.html`
- [ ] 8.2   Classic Spectrograms                           — `ch08-time-frequency/8.2-spectrograms.html`
- [ ] 8.2.1 Spectrogram of Speech                          — `ch08-time-frequency/8.2.1-speech-spec.html`
- [ ] 8.3   Audio Spectrograms                             — `ch08-time-frequency/8.3-audio-spec.html`
- [ ] 8.3.1 Auditory Filter Banks                          — `ch08-time-frequency/8.3.1-aud-fb.html`
- [ ] 8.3.2 Loudness Spectrogram                           — `ch08-time-frequency/8.3.2-loudness.html`
- [ ] 8.3.2.1 A Note on Hop Size                           — `ch08-time-frequency/8.3.2.1-hop.html`
- [ ] 8.3.3 Examples                                       — `ch08-time-frequency/8.3.3-examples.html`
- [ ] 8.3.3.1 Multiresolution STFT                         — `ch08-time-frequency/8.3.3.1-mrstft.html`
- [ ] 8.3.3.2 Excitation Pattern                           — `ch08-time-frequency/8.3.3.2-excitation.html`
- [ ] 8.3.3.3 Nonuniform Spectral Resampling               — `ch08-time-frequency/8.3.3.3-nonuniform.html`
- [ ] 8.3.3.4 Auditory Filter Shapes                       — `ch08-time-frequency/8.3.3.4-aud-shapes.html`
- [ ] 8.3.3.5 Specific Loudness                            — `ch08-time-frequency/8.3.3.5-specific-loud.html`
- [ ] 8.3.3.6 Spectrograms Compared                        — `ch08-time-frequency/8.3.3.6-spec-compared.html`
- [ ] 8.3.3.7 Instant / Short-Term / Long-Term Loudness    — `ch08-time-frequency/8.3.3.7-loud-timescales.html`
- [ ] 8.4   Summary (Ch 8)                                 — `ch08-time-frequency/8.4-summary.html`

## World 9 · Overlap-Add STFT Processing  (ch09-ola-stft/)

- [ ] 9.1   Convolution of Short Signals                   — `ch09-ola-stft/9.1-conv-short.html`
- [ ] 9.1.1 Cyclic FFT Convolution                         — `ch09-ola-stft/9.1.1-cyclic.html`
- [ ] 9.1.2 Acyclic FFT Convolution                        — `ch09-ola-stft/9.1.2-acyclic.html`
- [ ] 9.1.2.1 Acyclic Convolution in Matlab                — `ch09-ola-stft/9.1.2.1-matlab-acyclic.html`
- [ ] 9.1.2.2 Pictorial View of Acyclic Convolution        — `ch09-ola-stft/9.1.2.2-pictorial.html`
- [ ] 9.1.3 Acyclic FFT Convolution in Matlab              — `ch09-ola-stft/9.1.3-acyclic-matlab.html`
- [ ] 9.1.4 FFT versus Direct Convolution                  — `ch09-ola-stft/9.1.4-fft-vs-direct.html`
- [ ] 9.1.4.1 Audio FIR Filters                            — `ch09-ola-stft/9.1.4.1-audio-fir.html`
- [ ] 9.1.4.2 Example 1: LP Filtering by FFT Conv          — `ch09-ola-stft/9.1.4.2-fft-lp.html`
- [ ] 9.1.4.3 Example 2: Time Domain Aliasing              — `ch09-ola-stft/9.1.4.3-td-aliasing.html`
- [ ] 9.2   Convolving with Long Signals                   — `ch09-ola-stft/9.2-conv-long.html`
- [ ] 9.2.1 Overlap-Add Decomposition                      — `ch09-ola-stft/9.2.1-ola-decomp.html`
- [ ] 9.2.2 COLA Examples                                  — `ch09-ola-stft/9.2.2-cola-examples.html`
- [ ] 9.2.3 STFT of COLA Decomposition                     — `ch09-ola-stft/9.2.3-stft-cola.html`
- [ ] 9.2.4 Acyclic Convolution                            — `ch09-ola-stft/9.2.4-acyclic2.html`
- [ ] 9.2.5 Example of Overlap-Add Convolution             — `ch09-ola-stft/9.2.5-ola-example.html`
- [ ] 9.2.6 Summary of OLA FFT Processing                  — `ch09-ola-stft/9.2.6-ola-summary.html`
- [ ] 9.3   Dual of Constant Overlap-Add                   — `ch09-ola-stft/9.3-cola-dual.html`
- [ ] 9.3.1 Poisson Summation Formula                      — `ch09-ola-stft/9.3.1-psf.html`
- [ ] 9.3.2 Frequency-Domain COLA Constraints              — `ch09-ola-stft/9.3.2-fd-cola.html`
- [ ] 9.3.2.1 Strong COLA                                  — `ch09-ola-stft/9.3.2.1-strong-cola.html`
- [ ] 9.3.3 PSF Dual and Graphical Equalizers              — `ch09-ola-stft/9.3.3-psf-dual-eq.html`
- [ ] 9.3.4 PSF and Weighted Overlap Add                   — `ch09-ola-stft/9.3.4-psf-wola.html`
- [ ] 9.3.5 Example COLA Windows for WOLA                  — `ch09-ola-stft/9.3.5-cola-wola-examples.html`
- [ ] 9.4   Overlap-Save Method                            — `ch09-ola-stft/9.4-overlap-save.html`
- [ ] 9.5   Time-Varying OLA Modifications                 — `ch09-ola-stft/9.5-tv-ola.html`
- [ ] 9.5.1 Time-Varying STFT Modifications                — `ch09-ola-stft/9.5.1-tv-stft.html`
- [ ] 9.5.2 Length L FIR Frame Filters                     — `ch09-ola-stft/9.5.2-frame-filters.html`
- [ ] 9.6   Weighted Overlap Add                           — `ch09-ola-stft/9.6-wola.html`
- [ ] 9.6.1 WOLA Processing Steps                          — `ch09-ola-stft/9.6.1-wola-steps.html`
- [ ] 9.6.1.1 Choice of WOLA Window                        — `ch09-ola-stft/9.6.1.1-wola-window.html`
- [ ] 9.7   Review of Zero Padding                         — `ch09-ola-stft/9.7-review-zp.html`

## World 10 · Filter Bank View of the STFT  (ch10-filter-bank-stft/)

- [ ] 10.1  Dual Views of the STFT                         — `ch10-filter-bank-stft/10.1-dual-views.html`
- [ ] 10.1.1 Overlap-Add View of the STFT                  — `ch10-filter-bank-stft/10.1.1-ola-view.html`
- [ ] 10.1.2 Filter Bank View of the STFT                  — `ch10-filter-bank-stft/10.1.2-fb-view.html`
- [ ] 10.1.3 FBS and Perfect Reconstruction                — `ch10-filter-bank-stft/10.1.3-fbs-pr.html`
- [ ] 10.2  STFT Filter Bank                               — `ch10-filter-bank-stft/10.2-stft-fb.html`
- [ ] 10.2.1 Computational Examples in Matlab             — `ch10-filter-bank-stft/10.2.1-matlab-examples.html`
- [ ] 10.3  The DFT Filter Bank                            — `ch10-filter-bank-stft/10.3-dft-fb.html`
- [ ] 10.3.1 The Running-Sum Lowpass Filter                — `ch10-filter-bank-stft/10.3.1-running-sum.html`
- [ ] 10.3.2 Modulation by a Complex Sinusoid              — `ch10-filter-bank-stft/10.3.2-mod-complex.html`
- [ ] 10.3.3 Making a BP from a LP                         — `ch10-filter-bank-stft/10.3.3-lp-to-bp.html`
- [ ] 10.3.4 Uniform Running-Sum Filter Banks              — `ch10-filter-bank-stft/10.3.4-uniform-rs.html`
- [ ] 10.3.4.1 System Diagram of the Running-Sum FB        — `ch10-filter-bank-stft/10.3.4.1-rs-diagram.html`
- [ ] 10.3.4.2 DFT Filter Bank                             — `ch10-filter-bank-stft/10.3.4.2-dft-fb-detail.html`
- [ ] 10.3.4.3 Inverse DFT and the DFT-FB Sum              — `ch10-filter-bank-stft/10.3.4.3-idft-fb.html`
- [ ] 10.4  FBS Window Constraints for R=1                 — `ch10-filter-bank-stft/10.4-fbs-r1.html`
- [ ] 10.5  Nyquist(N) Windows                             — `ch10-filter-bank-stft/10.5-nyquist-n.html`
- [ ] 10.6  Duality of COLA and Nyquist Conditions         — `ch10-filter-bank-stft/10.6-cola-nyquist-duality.html`
- [ ] 10.6.1 Specific Windows                              — `ch10-filter-bank-stft/10.6.1-specific-windows.html`
- [ ] 10.6.2 Nyquist Property on the Unit Circle          — `ch10-filter-bank-stft/10.6.2-nyquist-unit.html`
- [ ] 10.7  Portnoff Windows                               — `ch10-filter-bank-stft/10.7-portnoff.html`
- [ ] 10.8  Downsampled STFT Filter Banks                  — `ch10-filter-bank-stft/10.8-downsampled.html`
- [ ] 10.8.1 Downsampled STFT Filter Bank                  — `ch10-filter-bank-stft/10.8.1-ds-stft-fb.html`
- [ ] 10.8.1.1 Filter Bank Reconstruction                  — `ch10-filter-bank-stft/10.8.1.1-fb-recon.html`
- [ ] 10.8.2 Downsampling with Anti-Aliasing               — `ch10-filter-bank-stft/10.8.2-ds-anti-aliasing.html`
- [ ] 10.8.2.1 Properly Anti-Aliasing Window Transforms    — `ch10-filter-bank-stft/10.8.2.1-window-anti-aliasing.html`
- [ ] 10.8.2.2 Hop Sizes for WOLA                          — `ch10-filter-bank-stft/10.8.2.2-wola-hop.html`
- [ ] 10.8.3 Constant-Overlap-Add (COLA) Cases             — `ch10-filter-bank-stft/10.8.3-cola-cases.html`
- [ ] 10.8.3.1 Hamming Overlap-Add Example                 — `ch10-filter-bank-stft/10.8.3.1-hamming-ola.html`
- [ ] 10.8.3.2 Periodic-Hamming OLA from PSF               — `ch10-filter-bank-stft/10.8.3.2-periodic-hamming.html`
- [ ] 10.8.3.3 Kaiser Overlap-Add Example                  — `ch10-filter-bank-stft/10.8.3.3-kaiser-ola.html`
- [ ] 10.9  STFT with Modifications                        — `ch10-filter-bank-stft/10.9-stft-mods.html`
- [ ] 10.9.1 FBS Fixed Modifications                       — `ch10-filter-bank-stft/10.9.1-fbs-fixed.html`
- [ ] 10.9.2 Time-Varying Modifications in FBS             — `ch10-filter-bank-stft/10.9.2-fbs-tv.html`
- [ ] 10.9.2.1 Points to Note                              — `ch10-filter-bank-stft/10.9.2.1-notes.html`
- [ ] 10.10 STFT Summary and Conclusions                   — `ch10-filter-bank-stft/10.10-summary.html`

## World 11 · Applications of the STFT  (ch11-stft-apps/)

- [ ] 11.1  F0 Estimation from Spectral Peaks              — `ch11-stft-apps/11.1-f0-est.html`
- [ ] 11.1.1 Useful Preprocessing                          — `ch11-stft-apps/11.1.1-preprocessing.html`
- [ ] 11.1.2 Getting Closer to Maximum Likelihood          — `ch11-stft-apps/11.1.2-closer-ml.html`
- [ ] 11.1.3 References on F0 Estimation                   — `ch11-stft-apps/11.1.3-f0-refs.html`
- [ ] 11.2  Cross-Synthesis                                — `ch11-stft-apps/11.2-cross-synth.html`
- [ ] 11.3  Spectral Envelope Extraction                   — `ch11-stft-apps/11.3-spec-envelope.html`
- [ ] 11.3.1 Cepstral Windowing                            — `ch11-stft-apps/11.3.1-cepstral.html`
- [ ] 11.3.2 Linear Prediction Spectral Envelope           — `ch11-stft-apps/11.3.2-lp-envelope.html`
- [ ] 11.3.2.1 LP Is Peak Sensitive                        — `ch11-stft-apps/11.3.2.1-lp-peak.html`
- [ ] 11.3.2.2 Linear Prediction Methods                   — `ch11-stft-apps/11.3.2.2-lp-methods.html`
- [ ] 11.3.2.3 Computation of LP Coefficients              — `ch11-stft-apps/11.3.2.3-lp-comp.html`
- [ ] 11.3.2.4 LP Order Selection                          — `ch11-stft-apps/11.3.2.4-lp-order.html`
- [ ] 11.3.2.5 Summary of LP Spectral Envelopes            — `ch11-stft-apps/11.3.2.5-lp-summary.html`
- [ ] 11.3.3 Spectral Envelope Examples                    — `ch11-stft-apps/11.3.3-env-examples.html`
- [ ] 11.3.3.1 Signal Synthesis                            — `ch11-stft-apps/11.3.3.1-sig-synth.html`
- [ ] 11.3.3.2 Envelope by Cepstral Windowing              — `ch11-stft-apps/11.3.3.2-env-cepstral.html`
- [ ] 11.3.3.3 Envelope by Linear Prediction               — `ch11-stft-apps/11.3.3.3-env-lp.html`
- [ ] 11.3.3.4 LP in Matlab and Octave                     — `ch11-stft-apps/11.3.3.4-lp-matlab.html`
- [ ] 11.4  Spectral Modeling Synthesis                    — `ch11-stft-apps/11.4-sms.html`
- [ ] 11.4.1 Additive Synthesis (Early)                    — `ch11-stft-apps/11.4.1-additive.html`
- [ ] 11.4.2 Additive Synthesis Analysis                   — `ch11-stft-apps/11.4.2-additive-anal.html`
- [ ] 11.4.2.1 Following Spectral Peaks                    — `ch11-stft-apps/11.4.2.1-peaks-follow.html`
- [ ] 11.4.2.2 Sinusoidal Peak Finding                     — `ch11-stft-apps/11.4.2.2-peak-find.html`
- [ ] 11.4.2.3 Tracking Peaks Across FFTs                  — `ch11-stft-apps/11.4.2.3-peak-tracking.html`
- [ ] 11.4.3 Sines + Noise Modeling                        — `ch11-stft-apps/11.4.3-s-plus-n.html`
- [ ] 11.4.3.1 Sines+Noise Analysis                        — `ch11-stft-apps/11.4.3.1-sn-anal.html`
- [ ] 11.4.3.2 S+N Synthesis                               — `ch11-stft-apps/11.4.3.2-sn-synth.html`
- [ ] 11.4.3.3 Sines+Noise Summary                         — `ch11-stft-apps/11.4.3.3-sn-summary.html`
- [ ] 11.4.4 Sines + Noise + Transients                    — `ch11-stft-apps/11.4.4-snt.html`
- [ ] 11.4.4.1 S+N+T Time-Frequency Maps                   — `ch11-stft-apps/11.4.4.1-snt-tf.html`
- [ ] 11.4.4.2 S+N+T Noise Model                           — `ch11-stft-apps/11.4.4.2-snt-noise.html`
- [ ] 11.4.5 S+N+T Sound Examples                          — `ch11-stft-apps/11.4.5-snt-sounds.html`
- [ ] 11.5  Time Scale Modification                        — `ch11-stft-apps/11.5-tsm.html`
- [ ] 11.5.1 TSM and S+N+T                                 — `ch11-stft-apps/11.5.1-tsm-snt.html`
- [ ] 11.5.2 TSM by Resampling STFTs Across Time           — `ch11-stft-apps/11.5.2-tsm-resample.html`
- [ ] 11.5.3 Phase Continuation                            — `ch11-stft-apps/11.5.3-phase-cont.html`
- [ ] 11.5.4 TSM Examples                                  — `ch11-stft-apps/11.5.4-tsm-examples.html`
- [ ] 11.5.4.1 Phase-Continued STFT TSM                    — `ch11-stft-apps/11.5.4.1-pc-stft.html`
- [ ] 11.5.4.2 Relative-Phase-Preserving STFT TSM          — `ch11-stft-apps/11.5.4.2-rpp-stft.html`
- [ ] 11.5.4.3 SOLA-FS TSM                                 — `ch11-stft-apps/11.5.4.3-sola-fs.html`
- [ ] 11.5.5 Further Reading                               — `ch11-stft-apps/11.5.5-reading.html`
- [ ] 11.6  Gaussian Windowed Chirps (Chirplets)           — `ch11-stft-apps/11.6-chirplets.html`
- [ ] 11.6.1 Chirplet Fourier Transform                    — `ch11-stft-apps/11.6.1-chirplet-ft.html`
- [ ] 11.6.2 Modulated Gaussian-Windowed Chirp             — `ch11-stft-apps/11.6.2-mod-gauss-chirp.html`
- [ ] 11.6.3 Identifying Chirp Rate                        — `ch11-stft-apps/11.6.3-chirp-rate.html`
- [ ] 11.6.3.1 Chirplet Frequency-Rate Estimation          — `ch11-stft-apps/11.6.3.1-fr-est.html`
- [ ] 11.6.3.2 Simulation Results                          — `ch11-stft-apps/11.6.3.2-sim-results.html`
- [ ] 11.7  FFT Filter Banks                               — `ch11-stft-apps/11.7-fft-fb.html`
- [ ] 11.7.1 Audio Filter Banks                            — `ch11-stft-apps/11.7.1-audio-fb.html`
- [ ] 11.7.2 Basic Idea                                    — `ch11-stft-apps/11.7.2-basic.html`
- [ ] 11.7.3 Summing STFT Bins                             — `ch11-stft-apps/11.7.3-summing.html`
- [ ] 11.7.4 Inverse Transforming STFT Bin Groups          — `ch11-stft-apps/11.7.4-ift-groups.html`
- [ ] 11.7.5 Improving the Channel Filters                 — `ch11-stft-apps/11.7.5-improve.html`
- [ ] 11.7.6 Fast Octave Filter Banks                      — `ch11-stft-apps/11.7.6-fast-octave.html`
- [ ] 11.7.7 Spectral Rotation of Real Signals             — `ch11-stft-apps/11.7.7-spec-rot.html`
- [ ] 11.7.8 Improving the Octave Band Filters             — `ch11-stft-apps/11.7.8-improve-octave.html`
- [ ] 11.7.9 Aliasing on Downsampling                      — `ch11-stft-apps/11.7.9-alias-ds.html`
- [ ] 11.7.10 Restricting Aliasing to Stop-Bands           — `ch11-stft-apps/11.7.10-alias-stop.html`
- [ ] 11.7.10.1 Tightening the IFFTs                       — `ch11-stft-apps/11.7.10.1-tighten-ifft.html`
- [ ] 11.7.11 Real Filter Bank Example                     — `ch11-stft-apps/11.7.11-real-fb-ex.html`
- [ ] 11.7.12 Optimal Band Filters                         — `ch11-stft-apps/11.7.12-opt-band.html`
- [ ] 11.8  FFT Filter-Bank Summary & OLA Duality          — `ch11-stft-apps/11.8-fb-summary.html`
- [ ] 11.9  Pointers to Sound Examples                     — `ch11-stft-apps/11.9-sound-examples.html`

## World 12 · Multirate Filter Banks  (ch12-multirate/)

- [ ] 12.1  Upsampling and Downsampling                    — `ch12-multirate/12.1-up-down.html`
- [ ] 12.1.1 Upsampling (Stretch) Operator                 — `ch12-multirate/12.1.1-upsample.html`
- [ ] 12.1.2 Downsampling (Decimation) Operator            — `ch12-multirate/12.1.2-downsample.html`
- [ ] 12.1.2.1 Example: Downsampling by 2                  — `ch12-multirate/12.1.2.1-ds-by-2.html`
- [ ] 12.1.2.2 Example: Upsampling by 2                    — `ch12-multirate/12.1.2.2-us-by-2.html`
- [ ] 12.1.3 Filtering and Downsampling                    — `ch12-multirate/12.1.3-filter-ds.html`
- [ ] 12.2  Polyphase Decomposition                        — `ch12-multirate/12.2-polyphase.html`
- [ ] 12.2.1 Two-Channel Case                              — `ch12-multirate/12.2.1-two-channel.html`
- [ ] 12.2.2 N-Channel Polyphase Decomposition             — `ch12-multirate/12.2.2-n-channel.html`
- [ ] 12.2.3 Type II Polyphase Decomposition               — `ch12-multirate/12.2.3-type2.html`
- [ ] 12.2.4 Filtering and Downsampling, Revisited         — `ch12-multirate/12.2.4-filter-ds2.html`
- [ ] 12.2.5 Multirate Noble Identities                    — `ch12-multirate/12.2.5-noble.html`
- [ ] 12.3  Critically Sampled PR Filter Banks             — `ch12-multirate/12.3-cs-pr.html`
- [ ] 12.3.1 Two-Channel Critically Sampled FB             — `ch12-multirate/12.3.1-2ch-cs.html`
- [ ] 12.3.2 Amplitude-Complementary 2-Channel FB          — `ch12-multirate/12.3.2-amp-comp.html`
- [ ] 12.3.3 Haar Example                                  — `ch12-multirate/12.3.3-haar.html`
- [ ] 12.3.4 Polyphase Decomp of Haar Example              — `ch12-multirate/12.3.4-haar-polyphase.html`
- [ ] 12.3.5 Quadrature Mirror Filters (QMF)               — `ch12-multirate/12.3.5-qmf.html`
- [ ] 12.3.6 Linear Phase QMF Banks                        — `ch12-multirate/12.3.6-linphase-qmf.html`
- [ ] 12.3.7 Conjugate Quadrature Filters (CQF)            — `ch12-multirate/12.3.7-cqf.html`
- [ ] 12.3.8 Orthogonal Two-Channel Filter Banks           — `ch12-multirate/12.3.8-ortho-2ch.html`
- [ ] 12.4  Perfect Reconstruction Filter Banks            — `ch12-multirate/12.4-pr-fb.html`
- [ ] 12.4.1 Simple Examples of PR                         — `ch12-multirate/12.4.1-simple-pr.html`
- [ ] 12.4.2 Sliding Polyphase Filter Bank                 — `ch12-multirate/12.4.2-sliding-pp.html`
- [ ] 12.4.3 Hopping Polyphase Filter Bank                 — `ch12-multirate/12.4.3-hopping-pp.html`
- [ ] 12.4.4 Sufficient Condition for PR                   — `ch12-multirate/12.4.4-suff-pr.html`
- [ ] 12.4.5 Necessary & Sufficient Conditions for PR      — `ch12-multirate/12.4.5-ns-pr.html`
- [ ] 12.4.6 Polyphase View of the STFT                    — `ch12-multirate/12.4.6-pp-stft.html`
- [ ] 12.4.7 Polyphase View of OLA-STFT                    — `ch12-multirate/12.4.7-pp-ola.html`
- [ ] 12.4.8 Polyphase View of WOLA-STFT                   — `ch12-multirate/12.4.8-pp-wola.html`
- [ ] 12.5  Paraunitary Filter Banks                       — `ch12-multirate/12.5-paraunitary.html`
- [ ] 12.5.1 Lossless Filters                              — `ch12-multirate/12.5.1-lossless.html`
- [ ] 12.5.2 Lossless Filter Examples                      — `ch12-multirate/12.5.2-lossless-ex.html`
- [ ] 12.5.3 Properties of Paraunitary FBs                 — `ch12-multirate/12.5.3-para-props.html`
- [ ] 12.5.4 Examples (Paraunitary)                        — `ch12-multirate/12.5.4-para-ex.html`
- [ ] 12.6  Filter Banks Equivalent to STFTs               — `ch12-multirate/12.6-fb-eq-stft.html`
- [ ] 12.6.1 Polyphase Analysis of Portnoff STFT           — `ch12-multirate/12.6.1-portnoff-pp.html`
- [ ] 12.7  MPEG Filter Banks                              — `ch12-multirate/12.7-mpeg.html`
- [ ] 12.7.1 Pseudo-QMF Cosine Mod Filter Bank             — `ch12-multirate/12.7.1-pseudo-qmf.html`
- [ ] 12.7.2 PR Cosine Modulated Filter Banks              — `ch12-multirate/12.7.2-pr-cos.html`
- [ ] 12.7.3 MPEG Layer III Filter Bank                    — `ch12-multirate/12.7.3-mp3-fb.html`
- [ ] 12.8  Review of STFT Filterbanks                     — `ch12-multirate/12.8-review-stft-fb.html`
- [ ] 12.8.1 STFT, Rect, No Overlap                        — `ch12-multirate/12.8.1-rect-no-ol.html`
- [ ] 12.8.2 STFT, Rect, 50% Overlap                       — `ch12-multirate/12.8.2-rect-50.html`
- [ ] 12.8.3 STFT, Triangular, 50% Overlap                 — `ch12-multirate/12.8.3-tri-50.html`
- [ ] 12.8.4 STFT, Hamming, 75% Overlap                    — `ch12-multirate/12.8.4-hamming-75.html`
- [ ] 12.8.5 STFT, Kaiser β=10, 90% Overlap                — `ch12-multirate/12.8.5-kaiser-90.html`
- [ ] 12.8.6 Sliding FFT, Zero-Padded                      — `ch12-multirate/12.8.6-sliding-zp.html`
- [ ] 12.9  Wavelet Filter Banks                           — `ch12-multirate/12.9-wavelet-fb.html`
- [ ] 12.9.1 Geometric Signal Theory                       — `ch12-multirate/12.9.1-geom-sig.html`
- [ ] 12.9.1.1 Natural Basis                               — `ch12-multirate/12.9.1.1-nat-basis.html`
- [ ] 12.9.1.2 Normalized DFT Basis for C^N                — `ch12-multirate/12.9.1.2-dft-basis.html`
- [ ] 12.9.1.3 Normalized Fourier Basis                    — `ch12-multirate/12.9.1.3-ft-basis.html`
- [ ] 12.9.1.4 Normalized DTFT Basis                       — `ch12-multirate/12.9.1.4-dtft-basis.html`
- [ ] 12.9.1.5 Normalized STFT Basis                       — `ch12-multirate/12.9.1.5-stft-basis.html`
- [ ] 12.9.1.6 Continuous Wavelet Transform                — `ch12-multirate/12.9.1.6-cwt.html`
- [ ] 12.9.1.7 Discrete Wavelet Transform                  — `ch12-multirate/12.9.1.7-dwt.html`
- [ ] 12.9.1.8 Discrete Wavelet Filterbank                 — `ch12-multirate/12.9.1.8-dwt-fb.html`
- [ ] 12.9.1.9 Dyadic Filter Banks                         — `ch12-multirate/12.9.1.9-dyadic.html`
- [ ] 12.9.1.10 Dyadic Filter Bank Design                  — `ch12-multirate/12.9.1.10-dyadic-design.html`
- [ ] 12.9.1.11 Generalized STFT                           — `ch12-multirate/12.9.1.11-gen-stft.html`
- [ ] 12.10 Further Reading                                — `ch12-multirate/12.10-further.html`
- [ ] 12.11 Conclusions                                    — `ch12-multirate/12.11-conclusions.html`

## World 13 · Summary and Conclusions

- [ ] 13.1  Summary and Conclusions                        — `ch13-summary/13.1-summary.html`

## Appendix World A · Notation  (appendix/notation/)

- [ ] A.1   Frequency and Time                             — `appendix/notation/A.1-freq-time.html`
- [ ] A.2   Signal Notation                                — `appendix/notation/A.2-sig-notation.html`
- [ ] A.3   Fourier Transform Notation                     — `appendix/notation/A.3-ft-notation.html`

## Appendix World B · Continuous Fourier Theorems  (appendix/ct-fourier/)

- [ ] B.1   Radians versus Cycles                          — `appendix/ct-fourier/B.1-radians-cycles.html`
- [ ] B.2   Differentiation Theorem                        — `appendix/ct-fourier/B.2-diff.html`
- [ ] B.3   Differentiation Theorem Dual                   — `appendix/ct-fourier/B.3-diff-dual.html`
- [ ] B.4   Scaling Theorem                                — `appendix/ct-fourier/B.4-scaling.html`
- [ ] B.5   Shift Theorem                                  — `appendix/ct-fourier/B.5-shift.html`
- [ ] B.6   Modulation Theorem (Shift Dual)                — `appendix/ct-fourier/B.6-modulation.html`
- [ ] B.7   Convolution Theorem                            — `appendix/ct-fourier/B.7-conv.html`
- [ ] B.8   Flip Theorems                                  — `appendix/ct-fourier/B.8-flip.html`
- [ ] B.9   Power Theorem                                  — `appendix/ct-fourier/B.9-power.html`
- [ ] B.10  The Continuous-Time Impulse                    — `appendix/ct-fourier/B.10-ct-impulse.html`
- [ ] B.11  Gaussian Pulse                                 — `appendix/ct-fourier/B.11-gauss.html`
- [ ] B.12  Rectangular Pulse                              — `appendix/ct-fourier/B.12-rect.html`
- [ ] B.13  Sinc Impulse                                   — `appendix/ct-fourier/B.13-sinc.html`
- [ ] B.14  Impulse Trains                                 — `appendix/ct-fourier/B.14-impulse-train.html`
- [ ] B.15  Poisson Summation Formula                      — `appendix/ct-fourier/B.15-psf.html`
- [ ] B.16  Sampling Theory                                — `appendix/ct-fourier/B.16-sampling.html`
- [ ] B.17  The Uncertainty Principle                      — `appendix/ct-fourier/B.17-uncertainty.html`
- [ ] B.17.1 Second Moments                                — `appendix/ct-fourier/B.17.1-2nd-moments.html`
- [ ] B.17.2 Time-Limited Signals                          — `appendix/ct-fourier/B.17.2-time-limited.html`
- [ ] B.17.3 Time-Bandwidth Products Unbounded Above       — `appendix/ct-fourier/B.17.3-tb-unbounded.html`
- [ ] B.18  Relation of Smoothness to Roll-Off Rate        — `appendix/ct-fourier/B.18-smooth-rolloff.html`

## Appendix World C · Statistical Signal Processing  (appendix/stats/)

- [ ] C.1   Stochastic Processes                           — `appendix/stats/C.1-stoch.html`
- [ ] C.1.1 Probability Distribution                       — `appendix/stats/C.1.1-prob-dist.html`
- [ ] C.1.2 Independent Events                             — `appendix/stats/C.1.2-independent.html`
- [ ] C.1.3 Random Variable                                — `appendix/stats/C.1.3-rv.html`
- [ ] C.1.4 Stochastic Process                             — `appendix/stats/C.1.4-stoch-proc.html`
- [ ] C.1.5 Stationary Stochastic Process                  — `appendix/stats/C.1.5-stationary.html`
- [ ] C.1.6 Expected Value                                 — `appendix/stats/C.1.6-expected.html`
- [ ] C.1.7 Mean                                           — `appendix/stats/C.1.7-mean.html`
- [ ] C.1.8 Sample Mean                                    — `appendix/stats/C.1.8-sample-mean.html`
- [ ] C.1.9 Variance                                       — `appendix/stats/C.1.9-variance.html`
- [ ] C.1.10 Sample Variance                               — `appendix/stats/C.1.10-sample-var.html`
- [ ] C.2   Correlation Analysis                           — `appendix/stats/C.2-corr-analysis.html`
- [ ] C.2.1 Cross-Correlation                              — `appendix/stats/C.2.1-cross-corr.html`
- [ ] C.2.2 Cross-Power Spectral Density                   — `appendix/stats/C.2.2-cpsd.html`
- [ ] C.2.3 Autocorrelation                                — `appendix/stats/C.2.3-autocorr.html`
- [ ] C.2.4 Sample Autocorrelation                         — `appendix/stats/C.2.4-sample-autocorr.html`
- [ ] C.2.5 Power Spectral Density                         — `appendix/stats/C.2.5-psd.html`
- [ ] C.2.6 Sample Power Spectral Density                  — `appendix/stats/C.2.6-sample-psd.html`
- [ ] C.3   White Noise                                    — `appendix/stats/C.3-white.html`
- [ ] C.3.1 Making White Noise with Dice                   — `appendix/stats/C.3.1-dice.html`
- [ ] C.3.2 Independent Implies Uncorrelated               — `appendix/stats/C.3.2-ind-uncorr.html`
- [ ] C.3.3 Estimator Variance                             — `appendix/stats/C.3.3-est-var.html`
- [ ] C.3.3.1 Sample-Mean Variance                         — `appendix/stats/C.3.3.1-sample-mean-var.html`
- [ ] C.3.3.2 Sample-Variance Variance                     — `appendix/stats/C.3.3.2-sample-var-var.html`

## Appendix World D · Gaussian Function Properties  (appendix/gaussian/)

- [ ] D.1   Gaussian Window and Transform                  — `appendix/gaussian/D.1-gauss-xform.html`
- [ ] D.2   Gaussians Closed under Multiplication          — `appendix/gaussian/D.2-mult-closed.html`
- [ ] D.2.1 Product of Two Gaussian PDFs                   — `appendix/gaussian/D.2.1-product-pdfs.html`
- [ ] D.3   Gaussians Closed under Convolution             — `appendix/gaussian/D.3-conv-closed.html`
- [ ] D.4   Fitting a Gaussian to Data                     — `appendix/gaussian/D.4-fit.html`
- [ ] D.5   Infinite Flatness at Infinity                  — `appendix/gaussian/D.5-inf-flat.html`
- [ ] D.6   Integral of a Complex Gaussian                 — `appendix/gaussian/D.6-int-complex.html`
- [ ] D.6.1 Area Under a Real Gaussian                     — `appendix/gaussian/D.6.1-area-real.html`
- [ ] D.7   Gaussian Integral with Complex Offset          — `appendix/gaussian/D.7-complex-offset.html`
- [ ] D.8   Fourier Transform of Complex Gaussian          — `appendix/gaussian/D.8-ft-complex.html`
- [ ] D.8.1 Alternate Proof                                — `appendix/gaussian/D.8.1-alt-proof.html`
- [ ] D.9   Why Gaussian?                                  — `appendix/gaussian/D.9-why.html`
- [ ] D.9.1 Central Limit Theorem                          — `appendix/gaussian/D.9.1-clt.html`
- [ ] D.9.2 Iterated Convolutions                          — `appendix/gaussian/D.9.2-iterated-conv.html`
- [ ] D.9.3 Binomial Distribution                          — `appendix/gaussian/D.9.3-binomial.html`
- [ ] D.10  Gaussian Probability Density Function          — `appendix/gaussian/D.10-gauss-pdf.html`
- [ ] D.11  Maximum Entropy Property                       — `appendix/gaussian/D.11-max-entropy.html`
- [ ] D.11.1 Entropy of a Probability Distribution         — `appendix/gaussian/D.11.1-entropy-def.html`
- [ ] D.11.2 Example: Random Bit String                    — `appendix/gaussian/D.11.2-bit-example.html`
- [ ] D.11.3 Maximum Entropy Distributions                 — `appendix/gaussian/D.11.3-max-ent-dist.html`
- [ ] D.11.3.1 Uniform Distribution                        — `appendix/gaussian/D.11.3.1-uniform.html`
- [ ] D.11.3.2 Exponential Distribution                    — `appendix/gaussian/D.11.3.2-exp.html`
- [ ] D.11.3.3 Gaussian Distribution                       — `appendix/gaussian/D.11.3.3-gauss-me.html`
- [ ] D.12  Gaussian Moments                               — `appendix/gaussian/D.12-moments.html`
- [ ] D.12.1 Gaussian Mean                                 — `appendix/gaussian/D.12.1-gauss-mean.html`
- [ ] D.12.2 Gaussian Variance                             — `appendix/gaussian/D.12.2-gauss-var.html`
- [ ] D.12.3 Higher-Order Moments Revisited                — `appendix/gaussian/D.12.3-higher-moments.html`
- [ ] D.12.4 Moment Theorem                                — `appendix/gaussian/D.12.4-moment-thm.html`
- [ ] D.12.5 Gaussian Characteristic Function              — `appendix/gaussian/D.12.5-char-fn.html`
- [ ] D.12.6 Gaussian Central Moments                      — `appendix/gaussian/D.12.6-central-moments.html`
- [ ] D.13  Sums of Gaussian Random Variables              — `appendix/gaussian/D.13-sums.html`

## Appendix World E · Bilinear Audio Frequency Warping  (appendix/warping/)

- [ ] E.1   The Bark Frequency Scale                       — `appendix/warping/E.1-bark.html`
- [ ] E.2   The Bilinear Transform                         — `appendix/warping/E.2-bilinear.html`
- [ ] E.3   Optimal Bilinear Bark Warping                  — `appendix/warping/E.3-optimal-bark.html`
- [ ] E.3.1 Computing ρ                                    — `appendix/warping/E.3.1-rho.html`
- [ ] E.3.2 Optimal Frequency Warpings                     — `appendix/warping/E.3.2-optimal-warp.html`
- [ ] E.3.3 Bark Relative Bandwidth Mapping Error          — `appendix/warping/E.3.3-bark-err.html`
- [ ] E.3.4 Error Significance                             — `appendix/warping/E.3.4-err-sig.html`
- [ ] E.3.5 Arctangent Approximations for ρ*(fs)           — `appendix/warping/E.3.5-arctan.html`
- [ ] E.4   Application to Audio Filter Design             — `appendix/warping/E.4-filter-design.html`
- [ ] E.4.1 Filter Design Example                          — `appendix/warping/E.4.1-design-ex.html`
- [ ] E.5   Equivalent Rectangular Bandwidth               — `appendix/warping/E.5-erb.html`
- [ ] E.5.1 ERB Relative Bandwidth Mapping Error           — `appendix/warping/E.5.1-erb-err.html`
- [ ] E.5.2 Arctangent Approximations for ρ*(fs), ERB      — `appendix/warping/E.5.2-erb-arctan.html`
- [ ] E.6   Directions for Improvements                    — `appendix/warping/E.6-improvements.html`
- [ ] E.7   Summary                                        — `appendix/warping/E.7-summary.html`

## Appendix World F · Examples in Matlab and Octave  (appendix/matlab/)

- [ ] F.1   Matlab for Spectrum Analysis Windows           — `appendix/matlab/F.1-windows.html`
- [ ] F.1.1 Blackman Window Example                        — `appendix/matlab/F.1.1-blackman-ex.html`
- [ ] F.1.2 Matlab listing: dpssw.m                        — `appendix/matlab/F.1.2-dpssw.html`
- [ ] F.2   Interpolating Spectral Peaks                   — `appendix/matlab/F.2-interp.html`
- [ ] F.2.1 Matlab listing: findpeaks.m                    — `appendix/matlab/F.2.1-findpeaks.html`
- [ ] F.2.2 Matlab listing: maxr.m                         — `appendix/matlab/F.2.2-maxr.html`
- [ ] F.2.3 Matlab listing: qint.m                         — `appendix/matlab/F.2.3-qint.html`
- [ ] F.2.4 Matlab listing: zpfmin.m                       — `appendix/matlab/F.2.4-zpfmin.html`
- [ ] F.2.5 Matlab listing: oboeanal.m                     — `appendix/matlab/F.2.5-oboeanal.html`
- [ ] F.3   Matlab for Computing Spectrograms              — `appendix/matlab/F.3-spectrograms.html`
- [ ] F.3.1 Matlab listing: myspectrogram.m                — `appendix/matlab/F.3.1-myspectrogram.html`
- [ ] F.3.2 Matlab listing: invmyspectrogram.m             — `appendix/matlab/F.3.2-invmyspectrogram.html`
- [ ] F.3.3 Matlab listing: testmyspectrogram.m            — `appendix/matlab/F.3.3-testmyspectrogram.html`
- [ ] F.4   Matlab for Unwrapping Spectral Phase           — `appendix/matlab/F.4-unwrap.html`
- [ ] F.4.1 Matlab listing: unwrap.m                       — `appendix/matlab/F.4.1-unwrap-m.html`
- [ ] F.5   Non-Parametric Frequency Warping               — `appendix/matlab/F.5-nonpar-warp.html`
- [ ] F.6   Fundamental Frequency Estimation               — `appendix/matlab/F.6-f0-est.html`
- [ ] F.6.1 Test Program for F0 Estimation                 — `appendix/matlab/F.6.1-f0-test.html`

## Appendix World G · Spectral Audio Modeling History  (appendix/history/)

- [ ] G.1   Daniel Bernoulli's Modal Decomposition         — `appendix/history/G.1-bernoulli.html`
- [ ] G.2   The Telharmonium                               — `appendix/history/G.2-telharmonium.html`
- [ ] G.3   Early Additive Synthesis in Film Making        — `appendix/history/G.3-early-additive.html`
- [ ] G.4   The Hammond Organ                              — `appendix/history/G.4-hammond.html`
- [ ] G.5   Dudley's Channel Vocoder                       — `appendix/history/G.5-dudley.html`
- [ ] G.5.1 Speech Synthesis Examples                      — `appendix/history/G.5.1-speech-ex.html`
- [ ] G.6   Voder                                          — `appendix/history/G.6-voder.html`
- [ ] G.7   Phase Vocoder                                  — `appendix/history/G.7-phase-voc.html`
- [ ] G.7.1 FFT Implementation of the Phase Vocoder        — `appendix/history/G.7.1-pv-fft.html`
- [ ] G.8   Additive Synthesis                             — `appendix/history/G.8-additive.html`
- [ ] G.8.1 Inverse FFT Synthesis                          — `appendix/history/G.8.1-ifft-synth.html`
- [ ] G.8.2 Chirplet Synthesis                             — `appendix/history/G.8.2-chirplet-synth.html`
- [ ] G.8.3 Nonparametric Spectral Peak Modeling           — `appendix/history/G.8.3-nonpar-peak.html`
- [ ] G.8.4 Efficient Specialized Methods                  — `appendix/history/G.8.4-efficient.html`
- [ ] G.8.4.1 Wavetable Synthesis                          — `appendix/history/G.8.4.1-wavetable.html`
- [ ] G.8.4.2 Group-Additive Synthesis                     — `appendix/history/G.8.4.2-group-add.html`
- [ ] G.8.5 Further Reading, Additive Synthesis            — `appendix/history/G.8.5-add-reading.html`
- [ ] G.9   Frequency Modulation (FM) Synthesis            — `appendix/history/G.9-fm.html`
- [ ] G.9.1 FM Harmonic Amplitudes                         — `appendix/history/G.9.1-fm-harmonics.html`
- [ ] G.9.2 FM Brass                                       — `appendix/history/G.9.2-fm-brass.html`
- [ ] G.9.3 FM Voice                                       — `appendix/history/G.9.3-fm-voice.html`
- [ ] G.9.3.1 Further Reading about FM Synthesis           — `appendix/history/G.9.3.1-fm-reading.html`
- [ ] G.10  Phase Vocoder Sinusoidal Modeling              — `appendix/history/G.10-pv-sin.html`
- [ ] G.10.1 Computing Vocoder Parameters                  — `appendix/history/G.10.1-vp.html`
- [ ] G.10.1.1 Frequency Envelopes                         — `appendix/history/G.10.1.1-freq-env.html`
- [ ] G.10.1.2 Envelope Compression                        — `appendix/history/G.10.1.2-env-comp.html`
- [ ] G.10.1.3 Vocoder-Based AS Limitations                — `appendix/history/G.10.1.3-limits.html`
- [ ] G.10.2 Further Reading on Vocoders                   — `appendix/history/G.10.2-voc-reading.html`
- [ ] G.11  Spectral Modeling Synthesis (History)          — `appendix/history/G.11-sms.html`
- [ ] G.11.1 STFT Analysis/Mod/Resynth                     — `appendix/history/G.11.1-stft-amrs.html`
- [ ] G.11.2 Sinusoidal Modeling Systems                   — `appendix/history/G.11.2-sms-systems.html`
- [ ] G.11.3 Inverse FFT Synthesis (History)               — `appendix/history/G.11.3-ifft-hist.html`
- [ ] G.11.4 Sines+Noise Synthesis (History)               — `appendix/history/G.11.4-sn-hist.html`
- [ ] G.11.5 Multiresolution Sinusoidal Modeling           — `appendix/history/G.11.5-mrsm.html`
- [ ] G.11.6 Transient Models                              — `appendix/history/G.11.6-transient.html`
- [ ] G.11.7 Time-Frequency Reassignment                   — `appendix/history/G.11.7-reassign.html`
- [ ] G.11.8 Perceptual Audio Compression                  — `appendix/history/G.11.8-perceptual.html`
- [ ] G.11.9 Further Reading                               — `appendix/history/G.11.9-sms-reading.html`
- [ ] G.12  Perceptual Audio Coding                        — `appendix/history/G.12-perc-coding.html`
- [ ] G.13  Future Prospects                               — `appendix/history/G.13-future.html`
- [ ] G.14  Summary                                        — `appendix/history/G.14-summary.html`

## Appendix World H · The PARSHL Program  (appendix/parshl/)

- [ ] H.1   Choice of Hop Size                             — `appendix/parshl/H.1-hop.html`
- [ ] H.2   Filling the FFT Input Buffer (Step 2)          — `appendix/parshl/H.2-fill.html`
- [ ] H.3   Peak Detection (Steps 3 and 4)                 — `appendix/parshl/H.3-peak-det.html`
- [ ] H.4   Peak Matching (Step 5)                         — `appendix/parshl/H.4-peak-match.html`
- [ ] H.5   Parameter Modifications (Step 6)               — `appendix/parshl/H.5-param-mod.html`
- [ ] H.6   Synthesis (Step 7)                             — `appendix/parshl/H.6-synth.html`
- [ ] H.7   Magnitude-only Analysis/Synthesis              — `appendix/parshl/H.7-mag-only.html`
- [ ] H.8   Preprocessing                                  — `appendix/parshl/H.8-pre.html`
- [ ] H.9   Applications                                   — `appendix/parshl/H.9-apps.html`
- [ ] H.10  Conclusions                                    — `appendix/parshl/H.10-conclusions.html`
- [ ] H.11  Acknowledgments                                — `appendix/parshl/H.11-acks.html`
- [ ] H.12  Software Listing                               — `appendix/parshl/H.12-software.html`

---

## Conventions reminder

1. English first, then 繁體中文 (both present via `<span lang="en">…</span><span lang="zh">…</span>` and the EN/繁中 toggle).
2. Chinese technical terms: wrap in `<span class="term" data-en="…" data-en-def="…" data-zh-def="…">…</span>`.
3. Each page must include one SASP back-link in the title area.
4. Every page gets a prev / next pager linking to its neighbors in the above order.
5. No copyrighted prose from Smith's book. All explanations must be original.

Current completed count: **44** / ≈ 530. Latest batch: full World 1 preface (3 stubs).
