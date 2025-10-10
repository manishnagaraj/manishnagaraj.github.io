---
layout: page
title: Projects
permalink: /projects/
description: Some of the projects I have worked on and am working on!
nav: true
nav_order: 3
# Use thesis-aligned themes as categories. Ensure each project file sets:
#   category: "Data Selection" | "Federated Learning" | "Event Vision"
display_categories: [Data Selection, Federated Learning, Event Vision]
horizontal: false
---

<!-- =========================
     HERO — thesis theme
========================= -->
# Exploring Data Efficiency in Deep Learning Systems

Selecting the **right data**, communicating **less**, and sensing **smarter**:
- **Data Selection** — identify small, high-impact subsets using training dynamics or attention structure.  
- **Federated Learning** — reduce bandwidth and improve privacy via obfuscated, compact surrogates.  
- **Event Vision** — exploit asynchronous, sparse signals for low-latency, energy-efficient perception.

---

<!-- =========================
     FEATURED: TRIM on top
========================= -->
{% assign trim = site.projects | where: "title", "TRIM" | first %}
{% if trim %}
## Featured: TRIM
<div class="row row-cols-1 row-cols-md-2">
  {% include projects.liquid project=trim %}
</div>
{% endif %}

---

<!-- =========================
     THEMED SECTIONS
========================= -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category | replace: ' ', '-' }}" href=".#{{ category | replace: ' ', '-' }}">
    <h2 class="category">{{ category }}</h2>
  </a>

  <!-- Per-theme micro-rationale (from your intro) -->
  {% if category == "Data Selection" %}
  <p><em>Select less, learn more:</em> Use <strong>training dynamics</strong> (loss trajectories) or <strong>token-level attention saliency</strong> to build small, effective coresets.</p>
  {% elsif category == "Federated Learning" %}
  <p><em>Communicate less, learn together:</em> Share <strong>proxy inputs</strong> that reproduce the intended update, cutting bandwidth and hindering inversion.</p>
  {% elsif category == "Event Vision" %}
  <p><em>Sense smarter, act faster:</em> Leverage <strong>asynchronous event streams</strong> with minimalist spiking models for low-latency detection.</p>
  {% endif %}

  {% assign categorized_projects = site.projects | where: "category", category %}
  <!-- Avoid duplicating TRIM below if it exists -->
  {% assign categorized_projects = categorized_projects | where_exp: "p","p.title != 'TRIM'" %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}

  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}

  {% endfor %}

{% else %}

<!-- Fallback: no categories configured -->
{% assign sorted_projects = site.projects | sort: "importance" %}

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}

{% endif %}
</div>

<!-- =========================
     HINTS FOR ORDERING
========================= -->
<!--
To keep ordering stable beneath the TRIM feature:
- In each project’s front matter, set a numeric `importance` (lower = earlier).
- Suggested order within themes:
  Data Selection: CLD (1), TRIM (handled above), others…
  Federated Learning: TOFU (1), others…
  Event Vision: DOTIE (1), others…
-->
