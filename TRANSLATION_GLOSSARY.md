# SASP Translation Glossary (English → 台灣正體)

Authoritative Traditional Chinese (Taiwan) translations for Digital Signal
Processing / Spectral Audio Signal Processing terminology used throughout the
SASP-static site.

Source priority: 國家教育研究院樂詞網 (terms.naer.edu.tw) > 繁體中文維基百科
(zh-tw) > 台灣學術課程教材 (NTU/NTHU/NYCU/NTNU). Entries prefixed with `*` have
no single authoritative Taiwan source and should be reviewed manually.

---

## Basics

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| signal | 訊號 | 信號 | 國教院 (通訊工程) |
| sample (n.) | 樣本 | 取樣點、抽樣值 | 國教院 (數學、統計) |
| sample (v.) / sampling | 取樣 | 抽樣、採樣 | 國教院 (電機、通訊：取樣；統計偏「抽樣」) |
| sample rate / sampling rate | 取樣率 | 抽樣率、採樣率 | 國教院 (通訊：「取樣率，抽樣率」) |
| sampling period | 取樣週期 | 抽樣週期、採樣週期 | 國教院 (電機、通訊) |
| sampling frequency | 取樣頻率 | 抽樣頻率、採樣頻率 | 國教院 (通訊：「取樣頻率，抽樣頻率」) |
| amplitude | 振幅 | 波幅 | 國教院 (物理-聲學、電機) |
| phase | 相位 | 位相 | 國教院 (電力、物理) |
| instantaneous frequency | 瞬時頻率 | 瞬間頻率 | 國教院 (物理、電機、電子) |
| instantaneous phase | 瞬時相位 | 瞬時位相 | 國教院 (類比 instantaneous frequency) |
| complex exponential | 複指數 | 複指數函數、複數指數序列 | 國教院 (數學) |
| complex sinusoid | 複弦波 | 複正弦波、複數正弦 | *無單一權威來源，依「複指數」+「正弦波」組合 |
| linear | 線性 | — | 國教院 (通用) |
| time-invariant | 非時變 | 時不變、時恆 | 國教院 (電機、通訊) |
| LTI system / linear time-invariant system | 線性非時變系統 | 線性時間不變系統 | 國教院 (電機、通訊) |
| causality | 因果性 | 因果律、因果關係 | 國教院 (物理、工程) |
| stability | 穩定性 | — | 國教院 (電機工程名詞) |
| region of convergence (ROC) | 收斂區域 | 收斂區間、收斂域 | 國教院 (數學：收斂區域；通訊：收斂區間) |

---

## Fourier 族

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| Fourier series | 傅立葉級數 | 傅氏級數 | 國教院 (數學、電機) |
| Fourier transform | 傅立葉轉換 | 傅氏轉換、傅立葉變換 | 國教院 (電機工程名詞) |
| continuous Fourier transform | 連續傅立葉轉換 | 連續時間傅立葉轉換 (CTFT) | 國教院 (通訊) |
| discrete-time Fourier transform (DTFT) | 離散時間傅立葉轉換 | 離散時間傅氏轉換 | 國教院 (電機) |
| discrete Fourier transform (DFT) | 離散傅立葉轉換 | 離散傅氏轉換、離散傅立葉變換 | 國教院 (通訊、電機) |
| inverse DFT (IDFT) | 反離散傅立葉轉換 | 逆離散傅立葉轉換 | 國教院 (類比 inverse + DFT) |
| fast Fourier transform (FFT) | 快速傅立葉轉換 | 快速傅氏轉換 | 國教院 (電機、通訊)；zh-wiki |
| magnitude spectrum | 振幅頻譜 | 強度頻譜、幅度頻譜 | NTU DSP 課程、zh-wiki |
| phase spectrum | 相位頻譜 | — | NTU DSP 課程 |
| power spectrum | 功率頻譜 | 功率譜、能譜 | 國教院 (聲學、物理) |
| spectral leakage | 頻譜洩漏 | 頻譜泄漏 | NTU DSP 教材、zh-wiki |
| spectral resolution | 頻譜解析度 | 譜域解析度、光譜解析度 | 國教院 (通訊：譜域解析度；通用：光譜解析度) |
| zero-padding | 補零 | 填零 | NTU CSIE 課程教材 (csie.ntu.edu.tw) |
| frequency bin | 頻率區間 | 頻率格、頻格 | *無單一權威來源，NTU 音訊課常用「頻率區間」 |

---

## 視窗 (Windows)

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| window function | 窗函數 | 視窗函數 | 國教院 (電機、數學：窗函數；電算：視窗函數) |
| rectangular window | 矩形窗 | 矩形視窗 | 國教院 (電機：矩形窗；通訊、電算：矩形視窗) |
| Hann window | Hann 窗 | 韓恩視窗、漢寧窗、海寧窗 | 國教院 (通訊：韓恩視窗)；NTNU algo：Hann 窗 |
| Hanning window | Hanning 窗 | 漢寧窗 (同 Hann 窗) | 國教院 (統計：Hann 修勻)；習慣同 Hann |
| Hamming window | Hamming 窗 | 漢明窗 | NTNU algo 教材 (web.ntnu.edu.tw/~algo/Audio.html) |
| Blackman window | Blackman 窗 | 黑曼窗、布萊克曼窗 | NTNU algo 教材 |
| Kaiser window | Kaiser 窗 | 凱撒視窗、凱薩窗 | 國教院 (電算：凱撒視窗) |
| Gaussian window | 高斯窗 | 高斯視窗 | *NTU 音訊/機率常用「高斯」+「窗函數」組合 |
| Bartlett window | Bartlett 窗 | 巴特萊窗 | *通例保留 Bartlett 英文 + 窗 |
| triangular window | 三角窗 | 三角形窗、三角視窗 | *NTNU algo：triangle window |
| DPSS (discrete prolate spheroidal sequences) | *DPSS | 離散長橢圓球函數序列 | *無權威來源，待確認 |
| Slepian sequences | *Slepian 序列 | — | *無權威來源，待確認 |
| main lobe | 主瓣 | 主波瓣、主波束 | 國教院 (電子、物理：主瓣；通訊：主波瓣) |
| side lobe | 旁瓣 | 側瓣、旁波瓣 | 國教院 (電子、電機：旁瓣) |
| side-lobe level | 旁瓣準位 | 旁瓣強度、旁瓣位準 | *組合「旁瓣」+「準位」 |
| main-lobe width | 主瓣寬度 | 主瓣頻寬 | *組合「主瓣」+「寬度」 |
| window length | 視窗長度 | 窗長、窗口長度 | *組合「視窗」+「長度」 |

---

## 濾波器與系統 (Filters & systems)

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| digital filter | 數位濾波器 | 數字濾波器 | 國教院 (電機、電子、通訊) |
| lowpass filter | 低通濾波器 | — | 國教院 (通訊、航太、海洋) |
| highpass filter | 高通濾波器 | — | 類比低通；zh-wiki |
| bandpass filter | 帶通濾波器 | 通帶濾波器 | zh-wiki；NTU 電機教材 |
| bandstop filter | 帶阻濾波器 | 止帶濾波器 | zh-wiki；NTU 電機教材 |
| notch filter | 凹口濾波器 | 陷波濾波器、陷頻濾波器 | 國教院 (通訊) |
| FIR (finite impulse response) | 有限脈衝響應 | 有限長度脈衝響應 | 國教院 (通訊：線性相位 FIR 濾波器) |
| IIR (infinite impulse response) | 無限脈衝響應 | 無限長度脈衝響應 | 國教院 (電機、電子、通訊) |
| impulse response | 脈衝響應 | 脈衝反應、脈衝回應 | 國教院 (通訊、電機) |
| step response | 步進響應 | 階梯響應、階狀響應 | 國教院 (機械、物理) |
| frequency response | 頻率響應 | 頻率反應、頻率回應 | 國教院 (電機、通訊) |
| transfer function | 轉移函數 | 傳遞函數、轉換函數 | 國教院 (電機、機械) |
| convolution | 摺積 | 卷積、捲積、疊積 | 國教院 (通訊：摺積/卷積；數學：摺積/疊積/捲積) |
| linear convolution | 線性摺積 | 線性卷積 | *組合「線性」+「摺積」 |
| circular convolution | 循環摺積 | 圓形摺積、圓周摺積 | 國教院 (電機：循環摺積；通訊：圓形摺積) |
| pole | 極點 | 極 | 國教院 (電力、電工：極；標準 DSP 語境加「點」) |
| zero (in z-plane) | 零點 | — | *NTU 訊號與系統通用「零點」 |
| z-transform | Z 轉換 | Z 變換 | 國教院 (通訊：Z 轉換) |
| group delay | 群延遲 | 群體延遲、波群延遲 | 國教院 (通訊、電腦：群延遲) |
| phase delay | 相位延遲 | 相滯、位相遲延 | 國教院 (物理、電機、電算：相位延遲) |
| minimum phase | 最小相位 | — | 國教院 (電機、電子) |
| linear phase | 線性相位 | — | 國教院 (通訊、電機、電子) |

---

## STFT 與聲譜圖

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| short-time Fourier transform (STFT) | 短時傅立葉轉換 | 短時距傅立葉變換、短時傅氏轉換、短時間傅立葉轉換 | 國教院 (通訊、電機)；zh-wiki 條目名為「短時距傅立葉變換」 |
| inverse STFT | 反短時傅立葉轉換 | 逆短時傅立葉轉換 | *類比 inverse + STFT |
| spectrogram | 聲譜圖 | 頻譜圖、時頻圖 | 國教院 (物理-聲學：聲譜圖)；NTNU algo 用「頻譜圖」 |
| hop / hop size | 音框跳距 | 跳距、移動量 | NTNU algo：「音框跳距(hop size)」(web.ntnu.edu.tw/~algo/Audio.html) |
| overlap-add (OLA) | 重疊相加 | 重疊-相加之摺積法、交疊累加 | zh-wiki：「重疊-相加之摺積法」 |
| overlap-save | 重疊保留 | 重疊-儲存法 | *zh-wiki 沿用「重疊保留」；類比 OLA |
| constant overlap-add (COLA) | 等值重疊相加 | 常數重疊相加、COLA | *通常保留 COLA 英文；「等值重疊相加」為字面譯法 |
| frame (windowed frame) | 音框 | 框、幀 | NTNU algo：「音框(frame)」 |
| frame size | 音框大小 | 幀長 | NTNU algo |
| frame overlap | 音框重疊量 | 幀重疊 | NTNU algo |
| analysis window | 分析窗 | 分析視窗 | *組合「分析」+「窗」；NTU 課程常見 |
| synthesis window | 合成窗 | 合成視窗 | *組合「合成」+「窗」；NTU 課程常見 |
| overlap-add view / OLA interpretation (of STFT) | 重疊相加詮釋 | 重疊相加觀點、重疊相加解釋 | *zh-wiki/NTU 傾向「詮釋」(interpretation) 而非「觀點」；觀點含主觀意味 |
| filter-bank view / FBS interpretation (of STFT) | 濾波器組詮釋 | 濾波器組解釋、濾波器組觀點 | *SASP 中譯慣例用「詮釋」；「觀點」用於主觀意見，DSP 語境應避免 |
| dual views / dual interpretations | 對偶詮釋 | 對偶觀點 | *數學中 dual 譯「對偶」；NTU 教材沿用 |

---

## 濾波器組與多速率 (Filter bank & multirate)

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| filter bank | 濾波器組 | 濾波器排、濾波器阻 | 國教院 (電腦、電力、電子、電機：濾波器組) |
| analysis filter bank | 分析濾波器組 | — | *組合；NTU 電機課程通用 |
| synthesis filter bank | 合成濾波器組 | — | *組合；NTU 電機課程通用 |
| perfect reconstruction (PR) | 完美重建 | 完全重建、完美重構 | NCTU/NYCU 論文：「linear phase cosine modulated … perfect reconstruction」中譯；無國教院條目 |
| polyphase decomposition | 多相分解 | 多相分量分解 | *NTU ADSP 課程、Medium 電機教材沿用「多相」 |
| polyphase matrix | 多相矩陣 | — | *組合「多相」+「矩陣」 |
| multirate signal processing | 多速率訊號處理 | 多率訊號處理、多重取樣率訊號處理 | NTU ADSP 課程 (djj.ee.ntu.edu.tw)：「多率信號處理」 |
| decimation | 抽取 | 降頻取樣、減退抽樣、整數倍降低取樣率 | 國教院 (通訊：整數倍降低取樣率；電算：減退抽樣) |
| downsampling | 降取樣 | 降低取樣頻率、下取樣 | 國教院 (通訊、電算) |
| interpolation | 內插 | 內插法、插值 | 國教院 (電機、電子：內插法；通訊：內差) |
| upsampling | 升取樣 | 上取樣、增取樣 | 國教院 (電子、電機) |
| anti-aliasing filter | 抗混疊濾波器 | 抗混淆濾波器、抗失真濾波器 | 國教院 (電子：抗失真；電算：抗混淆/抗假像) |
| Nyquist rate | 奈奎斯取樣率 | 尼奎斯取樣率 | 國教院 (通訊) |
| Nyquist frequency | 尼奎士頻率 | 奈奎斯特頻率、Nyquist 頻率 | 國教院 (通訊) |
| Nyquist theorem | 尼奎斯特定理 | Nyquist 定理、奈奎斯特定理 | 國教院 |
| sampling theorem | 取樣定理 | 抽樣定理、Nyquist-Shannon 定理 | 國教院 (通訊) |
| aliasing | 頻疊 | 混淆、別名 | 國教院 (通訊、電機：頻疊) |
| alias | 頻疊 | 假頻、映象頻率 | 國教院 (電機：頻疊/別名/混淆) |
| quadrature mirror filter (QMF) | 正交鏡相濾波器 | 正交鏡濾波器 | 國教院 (通訊、電算：正交鏡相濾波器) |
| conjugate quadrature filter (CQF) | *共軛正交濾波器 | 共軛鏡相濾波器、CQF | *無國教院條目，字面譯自 conjugate + quadrature |
| paraunitary filter bank | *擬么正濾波器組 | 保么正濾波器組、類么正濾波器組、準單位濾波器組 | *無國教院條目，待確認；NTU 論文常保留 paraunitary 英文 |
| wavelet | 小波 | 子波、漣波 | 國教院 (化學、數學：小波；物理：子波) |
| wavelet transform | 小波轉換 | 小波變換 | 國教院 (數學、電機、電子：小波變換/轉換) |
| wavelet filter bank | 小波濾波器組 | — | *組合「小波」+「濾波器組」；NTU 課程通用 |
| discrete wavelet transform (DWT) | 離散小波轉換 | 離散小波變換 | 國教院；zh-wiki 條目「離散小波變換」 |
| continuous wavelet transform (CWT) | 連續小波轉換 | 連續小波變換 | *類比 DWT；NTU TFW 教材沿用 |
| dyadic filter bank | *二進濾波器組 | 二元濾波器組、對偶濾波器組 | *無國教院條目，小波八度分解慣用「二進」 |
| Haar wavelet | Haar 小波 | 哈爾小波 | NTNU algo：「Harr 小波」；zh-wiki |
| Daubechies wavelet | Daubechies 小波 | 多貝西小波、杜比契小波 | *通常保留 Daubechies 英文；國教院無條目 |
| critically sampled | 臨界取樣 | 最大降頻取樣 | *NYCU 論文用「臨界取樣」；maximally decimated 同義 |
| oversampled | 過取樣 | 超取樣 | *類比 critically sampled；NTU 通訊課程沿用 |
| noble identities | *高貴恆等式 | 貴族恆等式、降/升取樣對易律 | *無權威中譯，通常保留英文 noble identities |
| MDCT (modified discrete cosine transform) | 改良型離散餘弦轉換 | 修正型離散餘弦轉換 | 國教院 (通訊) |

---

## 統計 (Statistics)

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| random variable | 隨機變數 | 隨機變量 | 國教院 (統計、數學) |
| stochastic process | 隨機過程 | 隨機程序 | 國教院 (數學、統計、工程) |
| probability distribution | 機率分布 | 機率分配 | 國教院 (數學、物理) |
| stationary | 平穩 | 定常、穩態 | 國教院 (數學：平穩；通訊：穩態) |
| wide-sense stationary (WSS) | 廣義平穩 | 廣義穩態、寬義平穩 | 國教院 (海洋：廣義平穩；通訊：廣義穩態隨機過程) |
| ergodic | 遍歷 | 各態歷經的 | 國教院 (數學、物理：遍歷) |
| expected value | 期望值 | 預期值 | 國教院 (數學、統計) |
| mean | 平均值 | 平均數、均值 | 國教院 (數學、統計) |
| variance | 變異數 | 變方 | 國教院 (數學、統計) |
| standard deviation | 標準差 | 標準偏差 | 國教院 (統計、數學) |
| moment | 矩 | 動差 | 國教院 (數學、統計) |
| central moment | 中心矩 | 中央動差 | *組合「中心」+「矩」 |
| sample moment | 樣本矩 | 樣本動差 | *組合「樣本」+「矩」 |
| bias | 偏誤 | 偏差 | 國教院 (經濟、統計) |
| unbiased estimator | 不偏估計量 | 無偏估計量 | 國教院 (統計) |
| consistent estimator | 一致估計量 | 一致性估計量 | 國教院 (統計、經濟) |
| cross-correlation | 互相關 | 交叉相關、交互相關 | 國教院 (通訊、水下工程：互相關；統計：交叉相關) |
| autocorrelation | 自相關 | 自我相關、自相關性 | 國教院 (統計、氣象) |
| power spectral density (PSD) | 功率頻譜密度 | 功率譜密度、能譜密度 | 國教院 (聲學、電子、通訊：功率頻譜密度) |
| periodogram | 週期圖 | 週期頻譜圖 | 國教院 (數學、統計、氣象) |
| Welch method / periodogram | *Welch 週期圖 / Welch 法 | 威爾奇週期圖、Welch 平均頻譜估計 | *無國教院複合條目 (Welch 單字為「威爾奇」) |
| Bartlett method / periodogram | *Bartlett 週期圖 / Bartlett 法 | 巴特萊週期圖 | *無國教院複合條目 |
| white noise | 白雜訊 | 白噪音、白色雜訊 | 國教院 (通訊：白色雜訊；電機、數學、聲學：白噪音/白雜訊) |
| coloured noise / colored noise | 有色雜訊 | 有色噪音 | 國教院 (電算、資通) |

---

## 頻譜分析相關

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| spectral envelope | 頻譜包絡 | 頻譜包線 | 國教院 (電子) |
| cepstrum | 倒頻譜 | 倒譜、反頻譜 | 國教院 (物理-聲學、電腦) |
| cepstral coefficients | 倒頻譜係數 | 倒譜係數 | *組合；MFCC 語境常見 |
| real cepstrum | 實數倒頻譜 | 實倒頻譜 | *類比 complex cepstrum |
| complex cepstrum | 複數倒頻譜 | 複倒頻譜 | *組合「複數」+「倒頻譜」 |
| quefrency | 倒頻率 | 倒域、同態頻率 | 國教院 (詳見 terms.naer.edu.tw/detail/3141993/) |
| liftering | *倒濾波 | 倒頻譜濾波 | *國教院列「波濾」(海洋地質)，DSP 語境不適用；通常保留 liftering 英文 |
| linear prediction (LP) | 線性預測 | 線性預估 | 國教院 (數學、聲學、電腦：線性預測；通訊：線性預估) |
| autoregressive (AR) | 自迴歸 | 自回歸 | 國教院 (統計、數學) |
| linear predictive coding (LPC) | 線性預測編碼 | 線性預估編碼 | *組合「線性預測」+「編碼」 |
| formant | 共振峰 | 泛音組、共振峰值 | 國教院 (聲學、心理、電腦) |
| fundamental frequency (F0) | 基頻 | 基本頻率 | 國教院 (聲學、通訊、航太) |
| pitch | 音高 | 音調 | 國教院 (舞蹈、音樂：音高) |

---

## 知覺與心理聲學 (Perceptual / psychoacoustic)

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| critical band | 臨界頻帶 | 聽覺臨界頻帶、關鍵頻段 | 國教院 (物理-聲學：臨界頻帶；通訊：聽覺臨界頻帶) |
| critical bandwidth | 臨界頻寬 | 臨界帶寬 | *組合「臨界」+「頻寬」；國教院無獨立條目 |
| Bark scale | 巴克量度 | 巴克刻度、巴克標度 | 國教院 (物理-聲學) |
| equivalent rectangular bandwidth (ERB) | *等效矩形頻寬 | 等值矩形頻寬 | *無國教院條目，依字面組合 |
| masking | 遮蔽 | 掩蔽 | 國教院 (通訊：聽覺遮蔽性) |
| simultaneous masking | 同時遮蔽 | 瞬時遮蔽 | *組合「同時」+「遮蔽」 |
| temporal masking | 時域遮蔽 | 時間遮蔽 | *組合「時域」+「遮蔽」 |
| cochlea | 耳蝸 | — | 國教院 (解剖、動物、醫學) |
| basilar membrane | 基底膜 | 基膜、耳底膜 | 國教院 (醫學、動物：基底膜；物理-聲學：基底板) |
| place theory | 位置理論 | 部位學說 | 維基百科、心理學教材 |

---

## 合成 (Synthesis)

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| additive synthesis | 加法合成 | 相加合成 | 國教院 (美術：加法合成；電算：相加合成) |
| subtractive synthesis | 減法合成 | 相減合成 | *類比 additive synthesis |
| frequency modulation (FM) synthesis | 調頻合成 | 頻率調變合成 | 國教院 (電機：頻率調變) +「合成」 |
| wavetable synthesis | 波表合成 | 波形表合成 | *組合「波表/波形表」+「合成」 |
| sinusoidal modelling | 正弦模型 | 正弦波建模 | NTU CSIE 文章 (csie.ntu.edu.tw/~cyliou/red/SS/A09c.html) |
| spectral modelling synthesis (SMS) | *頻譜模型合成 | 頻譜建模合成 | *無國教院條目；依字面組合 |
| chirplet | *啾頻波 | 線性變頻波 | *類比 chirp「啾頻」 |
| time-scale modification (TSM) | *時間尺度修正 | 時長調整、時域伸縮 | *國教院「time scale」為「時間尺度」；加「modification」→修正 |
| phase vocoder | 相位聲碼器 | 相位編碼器 | zh-wiki 條目「相位聲碼器」；國教院 vocoder「聲碼器」 |
| channel vocoder | 通道聲碼器 | 頻道聲碼器 | *組合；國教院 vocoder「聲碼器」 |
| cross-synthesis | 交互合成 | 交叉合成 | *無國教院 DSP 條目；組合 cross + synthesis |

---

## 其他 SASP 相關

| English | 台灣正體 | 其他譯法 | 來源 |
|---|---|---|---|
| chirp signal | 啁啾訊號 | 啾頻訊號、線性調頻訊號 | 國教院 (aerospace、通訊：啾頻/線性變頻) |
| analytic signal | 解析訊號 | 解析信號 | 國教院 (物理-聲學、電機、電子) |
| Hilbert transform | 希爾伯特轉換 | 希伯特轉換、希爾伯轉換 | 國教院 (通訊、地球物理：希爾伯特轉換) |
| uncertainty principle | 測不準原理 | 不確定性原理 | 國教院 (物理、天文：測不準原理) |
| quadratic interpolation of spectral peaks | 頻譜峰值之二次內插 | 拋物線插值 | NTU algo 教材：「拋物線 (二次) 內插法」 |
| peak picking | *峰值偵測 | 峰值選取、波峰偵測 | *無國教院複合條目；NTU Visual Signal 教材用「Peak Detection」/ 峰值偵測 |
| peak tracking | *峰值追蹤 | 波峰追蹤 | *組合「峰值」+「追蹤」 |

---

## 翻譯慣例註記

1. **「詮釋 / 觀點 / 解釋 / 視角」** — SASP 中 *OLA view*、*filter-bank view*、*dual views* 等用語，
   在台灣學術慣例應譯為「**詮釋 (interpretation)**」或「**觀點 (perspective)**」。
   「觀點」雖可接受，但在中文多帶有「看法、意見」的主觀意味；技術文件傾向使用「詮釋」，
   比較中性地表示「(數學/物理) 上的解釋方式」。SASP-static 應統一採「詮釋」。

2. **「轉換 vs 變換」** — 台灣學界電機/電子/通訊領域以「**轉換**」為主 (國教院電機工程名詞標準)，
   數學領域兼用「變換」。本 glossary 以「轉換」為 Preferred，維基百科 zh-tw 條目名
   (如「離散小波變換」) 偶用「變換」，兩者皆可。

3. **「訊號 vs 信號」** — 台灣通訊、電機、物理聲學慣用「**訊號**」；中國大陸與部分電力領域用「信號」。
   SASP-static 應統一用「訊號」。

4. **「取樣 vs 抽樣 vs 採樣」** — 台灣工程領域以「**取樣**」為主 (物理聲學、通訊標準)；
   統計領域用「抽樣」；對岸用「採樣」。DSP 語境統一用「取樣」。

5. **「濾波器組」** — 是國教院電機工程名詞標準譯法，非「濾波器庫」、「濾波器排」或「濾波器陣列」。

6. **「音框」vs「幀」vs「框」** — 音訊處理語境建議用「**音框**」(NTNU algo 標準)，
   影像處理可用「幀」。兩者在 SASP 範疇應統一用「音框」。

7. **「時頻分析」** — NTU 丁建均教授 (djj.ee.ntu.edu.tw) 通用譯法，為台灣領域代表性術語。
