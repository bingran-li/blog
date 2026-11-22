---
title: Publications
---

<script setup>
import { withBase } from 'vitepress'
</script>

# 📒 Working Papers and Publications

<div class="pub-card">
  <a class="pub-media" :href="withBase('/demos/adam/')" target="_blank" title="Open the interactive demo">
    <video autoplay muted loop playsinline preload="metadata" :poster="withBase('/demos/adam/adam-phase-poster.png')" aria-label="Left: the (β₁, β₂) regions where the paper proves divergence (red) and convergence (blue). Right: Adam's trajectory for β₂ = 0.2 (diverges) and β₂ = 1 − 10⁻⁷ (converges). Opens the interactive demo.">
      <source :src="withBase('/demos/adam/adam-phase.mp4')" type="video/mp4" />
      <source :src="withBase('/demos/adam/adam-phase.webm')" type="video/webm" />
    </video>
  </a>
  <div class="pub-info">
    <p class="pub-title">Adam Converges Without Any Modification On Update Rules</p>
    <p class="pub-authors">Yushun Zhang, <strong>Bingran Li</strong>, Congliang Chen, Zhi-Quan Luo, Ruoyu Sun</p>
    <p class="pub-venue">Preprint.</p>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2603.02092" target="_blank">arXiv</a>
      <a href="https://arxiv.org/pdf/2603.02092" target="_blank">PDF</a>
      <a :href="withBase('/demos/adam/')" target="_blank">Demo</a>
    </div>
  </div>
</div>
