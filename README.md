# DSP Quest — 頻譜音訊訊號處理互動教科書

An 8-bit Nintendo-style, bilingual (English + 繁體中文) interactive
walkthrough of Julius O. Smith III's
[*Spectral Audio Signal Processing* (SASP)](https://ccrma.stanford.edu/~jos/sasp/).

**Live:** https://feiyuehchen.github.io/SASP-static/

> 把 SASP 整本從 DTFT 一路走到 PARSHL，每節一頁，英文優先、繁中在下，
> 關鍵術語一律附 EN/ZH hover tooltip。UI 做成 NES 配色，數學用 MathJax，
> 互動用純 Canvas + Web Audio — 沒有依賴任何前端框架。

---

## 內容範圍

610 個 HTML 頁，涵蓋 SASP 的所有葉節點：

| 世界 | 主題 | 頁數 |
|---|---|---|
| W1 | Preface | 4 |
| W2 | Introduction | 9 |
| W3 | Fourier Transforms & Theorems | 34 |
| W4 | Spectrum Analysis Windows | 65 |
| W5 | FIR Filter Design | 41 |
| W6 | Sinusoidal Peak Modeling | 32 |
| W7 | Noise Spectrum Analysis | 27 |
| W8 | Time-Frequency Displays | 24 |
| W9 | Overlap-Add STFT Processing | 33 |
| W10 | Filter Bank View of the STFT | 36 |
| W11 | Applications of the STFT | 64 |
| W12 | Multirate Filter Banks | 64 |
| W13 | Summary | 2 |
| **Appendix A** | Notation | 4 |
| **Appendix B** | Continuous-Time Fourier Theorems | 22 |
| **Appendix C** | Statistical Signal Processing | 25 |
| **Appendix D** | Gaussian Function Properties | 32 |
| **Appendix E** | Bilinear Frequency Warping | 16 |
| **Appendix F** | Matlab Utilities | 19 |
| **Appendix G** | History of Spectral Audio | 42 |
| **Appendix H** | PARSHL Sinusoidal Modeller | 13 |

每頁包含：
- **雙語內文**（`<span lang="en">` / `<span lang="zh">` 切換）
- **SASP 原書回連**（每頁頁首右上角有 `SASP §X.Y ↗`）
- **MathJax 推導**（`$...$` inline、`$$...$$` display）
- **術語 tooltip**：`<span class="term" data-en="..." data-en-def="..." data-zh-def="...">` — 滑鼠移過去顯示英文原名 + 中英雙語定義
- **互動 Canvas Lab**（概念密集頁，見下方「互動清單」）
- **Mini-Boss 小測驗**（概念頁，答對賺金幣）

---

## 本地執行

```bash
git clone https://github.com/feiyuehchen/SASP-static.git
cd SASP-static
python3 -m http.server 8000
# open http://localhost:8000
```

所有程式碼都是純靜態檔，沒有 build step、沒有 package.json、沒有 node_modules。

---

## 專案結構

```
SASP-static/
├── index.html                # World map (世界選擇)
├── MANIFEST.md               # 590 條葉節點 checklist
├── TRANSLATION_GLOSSARY.md   # 184 條台灣正體術語譯名
├── README.md                 # ← 本檔
├── assets/
│   ├── css/8bit.css          # NES 主題 + Cubic 11 + Press Start 2P
│   ├── js/
│   │   ├── dsp.js            # FFT / 視窗 / DTFT / 卷積原語
│   │   ├── viz.js            # Canvas stem / line 繪圖
│   │   ├── audio.js          # Web Audio 播放、金幣音效
│   │   ├── i18n.js           # 語言切換
│   │   └── terms.js          # Tooltip 掛鉤
│   ├── fonts/
│   ├── img/favicon.svg
│   └── sfx/
├── ch01-preface/ … ch13-summary/
└── appendix/
    ├── index.html            # 附錄 hub
    ├── notation/             # A.1–A.3
    ├── ct-fourier/           # B.1–B.18
    ├── stats/                # C.1–C.3.3.2
    ├── gaussian/             # D.1–D.13
    ├── warping/              # E.1–E.7
    ├── matlab/               # F.1–F.6.1
    ├── history/              # G.1–G.14
    └── parshl/               # H.1–H.12
```

---

## 術語譯法

本站採用**台灣正體**，術語以 `TRANSLATION_GLOSSARY.md` 為準，
來源優先度：

1. **國家教育研究院樂詞網** (https://terms.naer.edu.tw/)
2. 繁體中文維基百科 zh-tw variant
3. NTU / NTHU / NYCU / NTNU EE/CS 課程教材

關鍵慣例：

| 英文 | 台灣正體 | 常見誤譯 |
|---|---|---|
| Fourier transform | 傅立葉**轉換** | 傅立葉變換 |
| filter bank **view** / **interpretation** | 濾波器組**詮釋** | 濾波器組觀點 |
| signal | **訊號** | 信號 |
| sampling | **取樣** | 抽樣 / 採樣 |
| frame | **音框** | 幀 / 框 |
| filter bank | **濾波器組** | 濾波器庫 / 陣列 |
| spectrogram | **聲譜圖** | 頻譜圖（後者指 |X(ω)| 一般圖） |

完整 184 條術語見 [TRANSLATION_GLOSSARY.md](./TRANSLATION_GLOSSARY.md)。

---

## 互動清單

以下頁面有原生 Canvas Lab（非影片、不是嵌入外部工具）：

**Ch 3 Fourier Transforms**
- §3.1 DTFT 頻譜互動玩具（頻率/振幅雙正弦、播放、脈衝、雜訊）
- §3.5.1 實訊號 Re/Im 對稱視覺化
- §3.12 時域重複 ↔ 頻域取樣
- §3.13 Stretch 後 L 份頻譜鏡像
- §3.14.1 M 份混疊副本疊加
- §3.15 乘 n 與 n² 的頻譜微分效果
- §3.17.1 Dirichlet 核（含 dB 軸）
- §3.17.2 DFT bin 與完整 DTFT 的關係
- §3.17.3.1–4 補零各種效果
- §3.17.4 零相位 vs. 後端補零相位比較
- §3.17.4.1 fftshift 的視覺展示
- §3.17.4.2 零相位緩衝區 layout 視覺化

**Ch 10 Filter Bank View of the STFT**
- §10.1.1 OLA 視窗和 / COLA 偵測
- §10.1.2 FB 通道響應隨視窗+bin 變化
- §10.1.3 FBS 重建 + RMSE 顯示
- §10.2 8 通道追啾頻訊號
- §10.3 DFT sinc 格柵（dB）
- §10.3.4 Sum-of-sincs 歸零平坦化
- §10.4 視窗子取樣 COLA PR 判定
- §10.6 視窗時頻點的 PSF 對偶

---

## 技術堆疊

- **純 HTML + CSS + 原生 JS**（ES6，無框架）
- **MathJax 3** CDN（SVG 輸出）
- **Web Audio API**（金幣音效、音訊播放）
- **Canvas 2D**（所有圖表，無 D3 / Chart.js）
- **字型**：Press Start 2P（英文 pixel）+ Cubic 11（中文 pixel）+ Noto Sans TC（內文）

---

## License

Educational Use License (c) 2026 Fei-Yueh Chen.

本站以 SASP 為架構但不重製 Smith 原書之文字或圖表；
所有教學敘述、互動程式碼、翻譯為原創。
SASP 原書 © Julius O. Smith III / W3K Publishing。

---

## 貢獻

- 發現中英文翻譯問題、公式錯誤、broken link：開 Issue 或直接 PR
- 新增互動 Lab：優先於沒有 Lab 的章節（見各世界 index.html）
- 術語詞彙新增：更新 `TRANSLATION_GLOSSARY.md` 同時附上權威來源

---

## 致謝

- **Julius O. Smith III** — 原書作者，無私將 SASP 全文免費公開於 CCRMA
- **ACh-K** — [Cubic 11](https://github.com/ACh-K/Cubic-11) 繁中像素字型（SIL OFL）
- **Codestar** — Press Start 2P 英文像素字型
- **國家教育研究院樂詞網** — 大量台灣正體工程術語權威來源
