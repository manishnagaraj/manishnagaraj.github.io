---
layout: page
title: CLD
description: Coresets via correlation of loss differences (training-dynamics selection with theory).
img: assets/img/CLD_project/cld_thumb.png
importance: 1
category: Data Selection
related_publications: true
status: Under review 
tags: ["Coresets", "Training Dynamics", "Generalization", "Compute/Storage Efficient"]
---

**At a glance — Data Efficiency (Data Selection)**  
**Problem.** Full-dataset training is wasteful when many samples add little to generalization.  
**Idea.** Rank each training sample by how its **loss-difference trajectory** correlates with the **validation** loss trajectory (class-wise), and select the top-aligned examples.  
**Why it works.** High correlation ↔ gradients better aligned with validation/test behavior → smaller subsets that preserve optimization and accuracy.  
**Results.** On CIFAR-100 and ImageNet-1k, CLD coresets typically **match or outperform** strong baselines across subset sizes and are **within ~1%** when not leading; they **transfer across architectures** (ResNet→VGG/DenseNet) within ~1%; stable with **early/subsampled checkpoints**; lowest compute/storage among strong methods. :contentReference[oaicite:0]{index=0}

---

## Motivation

Training and deploying large models is constrained by **compute, memory, and time**. Instead of training on everything, we want **small, high-impact subsets** that preserve performance. Many selectors require gradients, Hessians, or pairwise features; CLD uses only **per-sample losses across checkpoints**, making it **simple and scalable**. :contentReference[oaicite:1]{index=1}

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/CLD_project/fig1_cld_at_a_glance.png" title="CLD at a glance: high vs. low CLD samples and coreset effect" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Suggested from Figure 1: examples illustrating high/low CLD and accuracy of positive/negative/zero CLD coresets.
</div>

---

## Method Overview (Correlation of Loss Differences)

For each training sample \(z_m\), record its **loss change per checkpoint** over T epochs:
\[
\Delta(z_m) = \big[\ell(\theta_1, z_m) - \ell(\theta_0, z_m), \ldots, \ell(\theta_T, z_m) - \ell(\theta_{T-1}, z_m)\big].
\]
Compute the **class-wise** validation average trajectory \(\Delta'_{V,c}\). The **CLD score** is the (Pearson) correlation:
\[
\text{CLD}(z_m) = \rho\big(\Delta(z_m), \Delta'_{V,c}\big),
\]
and the coreset picks the **top-\(k_c\)** per class. No gradients or Hessians are needed; only scalar losses per checkpoint for train & validation. :contentReference[oaicite:2]{index=2}

**Selection recipe (per class)**  
1) Train a proxy/backbone; log per-sample train loss and per-sample validation loss each epoch.  
2) Build \(\Delta(z_m)\) and \(\Delta'_{V,c}\).  
3) Score by Pearson correlation and keep top-\(k_c\) per class; union over classes → coreset \(C\). :contentReference[oaicite:3]{index=3}

---

## Theory (why CLD preserves optimization)

Under standard smoothness and bounded-gradient assumptions, training on a **high-CLD coreset** achieves a convergence bound **close to full-data training**, up to an additive term governed by (i) **alignment** \(\kappa\) (improves as CLD ↑ and subset size ↑) and (ii) **validation representativeness** \(\delta\). Intuitively: **high CLD ⇒ gradient alignment with validation** along the trajectory, so coreset updates follow the full-data optimization path. :contentReference[oaicite:4]{index=4}

> Takeaway: High CLD is both a **sufficient and necessary** condition (within the framework) for matching full-data optimization dynamics with a subset. :contentReference[oaicite:5]{index=5}

---

## Results & Observations

**Benchmarks & setup.** CIFAR-100 and ImageNet-1k; per-class validation split (10% and 1% respectively); 5 seeds; ResNet-18 for scoring and training unless specified; subset sizes from **0.2–100%** (CIFAR-100) and **0.1–100%** (ImageNet-1k). :contentReference[oaicite:6]{index=6}

- **Accuracy vs SOTA:** CLD typically **matches or outperforms** baselines (score-based, optimization-based, training-property–based) across sizes; when not leading, it’s **within ~1%** of the best. :contentReference[oaicite:7]{index=7}  
- **Transferability:** Coresets selected with **ResNet-18** transfer to **ResNet-34/50, VGG-19, DenseNet-121** with **<~1%** gap to each model’s own (“oracle”) CLD selection. :contentReference[oaicite:8]{index=8}  
- **Stability & early checkpoints:** Computing CLD from only the **first 30–45** of 90 epochs, or with **2–3× subsampling**, yields **nearly identical accuracy**. :contentReference[oaicite:9]{index=9}  
- **Bias & class balance:** CLD’s **per-class validation** alignment provides inherent **bias reduction**; adding external stratified sampling **hurts** performance. :contentReference[oaicite:10]{index=10}

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/CLD_project/fig2_accuracy_vs_bases.png" title="CLD vs baselines: CIFAR-100 & ImageNet-1k" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/CLD_project/fig3_transfer.png" title="Cross-architecture transfer: ResNet-18 → {ResNet-34/50, VGG-19, DenseNet-121}" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Suggested from Figures 2–3. CLD is competitive across subset sizes and transfers across architectures within ~1%.
</div>

---

## Compute & Storage Efficiency

CLD logs **one scalar per sample per checkpoint** (plus validation scalars), avoiding per-sample gradients, Hessians, or feature caches. Selection compute is **proxy-only** plus lightweight validation forwards; training on the coreset uses the target model as usual. In end-to-end compute vs accuracy, CLD lies near the **Pareto-efficient** frontier with a tiny selection-stage storage footprint (scalar logs). Early-epoch CLD (e.g., 45/90) achieves similar accuracy at **~½ the selection compute**. :contentReference[oaicite:11]{index=11}

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/CLD_project/fig4_efficiency_bubble.png" title="Accuracy vs end-to-end compute; bubble size = selection-stage storage" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

## Practical Guidance

- **Proxy model.** Use a lightweight backbone (e.g., ResNet-18) to log losses; transfer the resulting coreset to larger targets. :contentReference[oaicite:12]{index=12}  
- **Validation set.** Build a **representative** per-class validation set; avoid heavy bias toward atypical/mislabeled examples (hurts CLD quality). Proportional sampling to the pool’s distribution works well. :contentReference[oaicite:13]{index=13}  
- **Temporal budget.** If needed, compute CLD from **early checkpoints** or **subsampled** trajectories with minimal accuracy loss. :contentReference[oaicite:14]{index=14}  
- **No extra stratification.** External percentile-based stratification (e.g., CCS style) generally **reduces** CLD accuracy. :contentReference[oaicite:15]{index=15}

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/CLD_project/fig5a_stability.png" title="Stability with early/subsampled checkpoints" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/CLD_project/fig5b_bias.png" title="Bias/stratification ablation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

## Validation Proxy Study (why proxy quality matters)

Varying the validation composition using memorization-based heuristics changes downstream CLD performance: **Highest-mem** (atypical) hurts; **Proportional** (to pool) is most reliable; mixing in some high-mem helps capture long-tail behavior. This underscores that **validation representativeness** directly affects CLD quality. :contentReference[oaicite:16]{index=16}

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/CLD_project/fig6a_mem_profiles.png" title="Validation mem-profile distributions" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/CLD_project/fig6b_val_study.png" title="Effect of validation composition on CLD coresets" class="img-fluid rounded z-depth-1" %}
  </div>
</div>


You can find more details in the full paper: {% cite nagaraj2025coresets %}