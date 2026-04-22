/* ============================================================
   DSP Quest — canvas plot helpers.
   Low-res by default for pixelated look. All plotters take a
   canvas element and redraw its contents each call.
   ============================================================ */

const Viz = (() => {

  const PALETTE = {
    bg:     '#0D0B1F',
    grid:   '#1A1C2C',
    axis:   '#7C7C7C',
    signal: '#3CBCFC',
    signal2:'#F8B800',
    peak:   '#F83800',
    env:    '#00B800',
    text:   '#FCFCFC',
    mid:    '#FCE098',
  };

  function setup(canvas) {
    // Physical size ~= CSS size; keep crisp pixels.
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    canvas.width  = Math.max(200, Math.floor(rect.width  * dpr));
    canvas.height = Math.max(120, Math.floor(rect.height * dpr));
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.scale(dpr, dpr);
    return { ctx, W: rect.width, H: rect.height };
  }

  function clear(ctx, W, H, bg = PALETTE.bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
  }

  function grid(ctx, W, H, pad, nx = 10, ny = 6) {
    ctx.strokeStyle = PALETTE.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i <= nx; i++) {
      const x = pad.l + (W - pad.l - pad.r) * i / nx;
      ctx.moveTo(x, pad.t);
      ctx.lineTo(x, H - pad.b);
    }
    for (let i = 0; i <= ny; i++) {
      const y = pad.t + (H - pad.t - pad.b) * i / ny;
      ctx.moveTo(pad.l, y);
      ctx.lineTo(W - pad.r, y);
    }
    ctx.stroke();
  }

  function axes(ctx, W, H, pad, xLabel, yLabel) {
    ctx.strokeStyle = PALETTE.axis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b);
    ctx.lineTo(W - pad.r, H - pad.b);
    ctx.stroke();

    ctx.fillStyle = PALETTE.text;
    ctx.font = '9px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    if (xLabel) ctx.fillText(xLabel, (pad.l + W - pad.r) / 2, H - pad.b + 14);
    if (yLabel) {
      ctx.save();
      ctx.translate(10, (pad.t + H - pad.b) / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(yLabel, 0, 0);
      ctx.restore();
    }
  }

  /* ------------ Plot types ------------ */

  /**
   * Stem plot for discrete signal x[n]. x is an array; optional n0 shifts the index start.
   * opts: { color, yMin, yMax, pad, xLabel, yLabel, markerRadius }
   */
  function stem(canvas, x, opts = {}) {
    const { ctx, W, H } = setup(canvas);
    const pad = opts.pad || { l: 36, r: 12, t: 10, b: 28 };
    const n0 = opts.n0 || 0;
    const N = x.length;
    let yMin = opts.yMin, yMax = opts.yMax;
    if (yMin === undefined || yMax === undefined) {
      let lo = Infinity, hi = -Infinity;
      for (let i = 0; i < N; i++) { if (x[i] < lo) lo = x[i]; if (x[i] > hi) hi = x[i]; }
      const pad2 = (hi - lo) * 0.15 || 1;
      yMin = opts.yMin !== undefined ? opts.yMin : lo - pad2;
      yMax = opts.yMax !== undefined ? opts.yMax : hi + pad2;
    }
    const innerW = W - pad.l - pad.r, innerH = H - pad.t - pad.b;
    const xToPx = i => pad.l + innerW * (i) / Math.max(1, N - 1);
    const yToPx = v => pad.t + innerH * (1 - (v - yMin) / (yMax - yMin));

    clear(ctx, W, H);
    grid(ctx, W, H, pad, Math.min(N - 1, 10), 6);

    // zero axis
    if (yMin < 0 && yMax > 0) {
      ctx.strokeStyle = PALETTE.axis;
      ctx.beginPath();
      ctx.moveTo(pad.l, yToPx(0));
      ctx.lineTo(W - pad.r, yToPx(0));
      ctx.stroke();
    }

    const color = opts.color || PALETTE.signal;
    const r = opts.markerRadius || 3;
    ctx.strokeStyle = color;
    ctx.fillStyle   = color;
    ctx.lineWidth = 2;
    for (let i = 0; i < N; i++) {
      const px = xToPx(i), py = yToPx(x[i]);
      ctx.beginPath();
      ctx.moveTo(px, yToPx(0));
      ctx.lineTo(px, py);
      ctx.stroke();
      ctx.fillRect(px - r, py - r, r * 2, r * 2);
    }

    axes(ctx, W, H, pad, opts.xLabel || 'n', opts.yLabel || 'x[n]');
    if (opts.title) {
      ctx.fillStyle = PALETTE.text;
      ctx.font = '9px "Press Start 2P", monospace';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(opts.title, pad.l + 4, 2);
    }
  }

  /** Continuous line plot of a function y = x array over evenly-spaced abscissa. */
  function line(canvas, y, opts = {}) {
    const { ctx, W, H } = setup(canvas);
    const pad = opts.pad || { l: 40, r: 12, t: 12, b: 28 };
    const N = y.length;
    let yMin = opts.yMin, yMax = opts.yMax;
    if (yMin === undefined || yMax === undefined) {
      let lo = Infinity, hi = -Infinity;
      for (let i = 0; i < N; i++) { if (y[i] < lo) lo = y[i]; if (y[i] > hi) hi = y[i]; }
      const pad2 = (hi - lo) * 0.1 || 1;
      yMin = opts.yMin !== undefined ? opts.yMin : lo - pad2;
      yMax = opts.yMax !== undefined ? opts.yMax : hi + pad2;
    }
    const xMin = opts.xMin !== undefined ? opts.xMin : 0;
    const xMax = opts.xMax !== undefined ? opts.xMax : N - 1;
    const innerW = W - pad.l - pad.r, innerH = H - pad.t - pad.b;
    const xToPx = i => pad.l + innerW * (i - xMin) / (xMax - xMin);
    const yToPx = v => pad.t + innerH * (1 - (v - yMin) / (yMax - yMin));

    clear(ctx, W, H);
    grid(ctx, W, H, pad);

    if (yMin < 0 && yMax > 0) {
      ctx.strokeStyle = PALETTE.axis;
      ctx.beginPath();
      ctx.moveTo(pad.l, yToPx(0)); ctx.lineTo(W - pad.r, yToPx(0));
      ctx.stroke();
    }

    ctx.strokeStyle = opts.color || PALETTE.signal;
    ctx.lineWidth = opts.lineWidth || 2;
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const xv = opts.xValues ? opts.xValues[i] : (xMin + (xMax - xMin) * i / (N - 1));
      const px = xToPx(xv), py = yToPx(y[i]);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    axes(ctx, W, H, pad, opts.xLabel, opts.yLabel);
    if (opts.title) {
      ctx.fillStyle = PALETTE.text;
      ctx.font = '9px "Press Start 2P", monospace';
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText(opts.title, pad.l + 4, 2);
    }
    // tick labels (x-axis)
    if (opts.xTicks) {
      ctx.fillStyle = PALETTE.text;
      ctx.font = '8px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      opts.xTicks.forEach(({ v, label }) => ctx.fillText(label, xToPx(v), H - pad.b + 4));
    }
    if (opts.yTicks) {
      ctx.fillStyle = PALETTE.text;
      ctx.font = '8px "Press Start 2P", monospace';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      opts.yTicks.forEach(({ v, label }) => ctx.fillText(label, pad.l - 4, yToPx(v)));
    }
  }

  /** Plot multiple lines on one axes. data = [{y, xValues?, color, label}]. */
  function multiLine(canvas, data, opts = {}) {
    const { ctx, W, H } = setup(canvas);
    const pad = opts.pad || { l: 40, r: 12, t: 12, b: 28 };

    let yMin = opts.yMin, yMax = opts.yMax;
    let xMin = opts.xMin, xMax = opts.xMax;
    if (yMin === undefined || yMax === undefined || xMin === undefined || xMax === undefined) {
      let lo = Infinity, hi = -Infinity, xlo = Infinity, xhi = -Infinity;
      for (const d of data) {
        for (let i = 0; i < d.y.length; i++) {
          if (d.y[i] < lo) lo = d.y[i]; if (d.y[i] > hi) hi = d.y[i];
          const xv = d.xValues ? d.xValues[i] : i;
          if (xv < xlo) xlo = xv; if (xv > xhi) xhi = xv;
        }
      }
      const p = (hi - lo) * 0.1 || 1;
      yMin = opts.yMin !== undefined ? opts.yMin : lo - p;
      yMax = opts.yMax !== undefined ? opts.yMax : hi + p;
      xMin = opts.xMin !== undefined ? opts.xMin : xlo;
      xMax = opts.xMax !== undefined ? opts.xMax : xhi;
    }

    const innerW = W - pad.l - pad.r, innerH = H - pad.t - pad.b;
    const xToPx = v => pad.l + innerW * (v - xMin) / (xMax - xMin);
    const yToPx = v => pad.t + innerH * (1 - (v - yMin) / (yMax - yMin));

    clear(ctx, W, H);
    grid(ctx, W, H, pad);

    if (yMin < 0 && yMax > 0) {
      ctx.strokeStyle = PALETTE.axis;
      ctx.beginPath();
      ctx.moveTo(pad.l, yToPx(0)); ctx.lineTo(W - pad.r, yToPx(0));
      ctx.stroke();
    }

    data.forEach((d, idx) => {
      ctx.strokeStyle = d.color || [PALETTE.signal, PALETTE.signal2, PALETTE.env, PALETTE.peak][idx % 4];
      ctx.lineWidth = d.lineWidth || 2;
      ctx.beginPath();
      for (let i = 0; i < d.y.length; i++) {
        const xv = d.xValues ? d.xValues[i] : i;
        const px = xToPx(xv), py = yToPx(d.y[i]);
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
    });

    axes(ctx, W, H, pad, opts.xLabel, opts.yLabel);
    if (opts.title) {
      ctx.fillStyle = PALETTE.text;
      ctx.font = '9px "Press Start 2P", monospace';
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText(opts.title, pad.l + 4, 2);
    }
    // Legend
    if (opts.legend !== false) {
      ctx.font = '8px "Press Start 2P", monospace';
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      let ly = pad.t + 2;
      data.forEach((d, idx) => {
        if (!d.label) return;
        const c = d.color || [PALETTE.signal, PALETTE.signal2, PALETTE.env, PALETTE.peak][idx % 4];
        ctx.fillStyle = c;
        ctx.fillRect(W - pad.r - 80, ly, 10, 8);
        ctx.fillStyle = PALETTE.text;
        ctx.fillText(d.label, W - pad.r - 66, ly);
        ly += 12;
      });
    }
    if (opts.xTicks) {
      ctx.fillStyle = PALETTE.text;
      ctx.font = '8px "Press Start 2P", monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      opts.xTicks.forEach(({ v, label }) => ctx.fillText(label, xToPx(v), H - pad.b + 4));
    }
    if (opts.yTicks) {
      ctx.fillStyle = PALETTE.text;
      ctx.font = '8px "Press Start 2P", monospace';
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      opts.yTicks.forEach(({ v, label }) => ctx.fillText(label, pad.l - 4, yToPx(v)));
    }
  }

  return { setup, clear, grid, axes, stem, line, multiLine, PALETTE };
})();
