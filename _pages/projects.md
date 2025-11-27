---
layout: page
title: Projects
permalink: /projects/
description: Research projects on data-efficient foundation models, multimodal perception, and federated learning.
nav: true
nav_order: 3
# Use role-aligned themes as categories. Ensure each project file sets:
#   category: "Foundation Models & Data Selection" | "Multimodal Perception & Robotics" | "Federated & Distributed Learning"
display_categories: [Foundation Models & Data Selection, Multimodal Perception & Robotics, Federated & Distributed Learning]
horizontal: false
---

<!-- =========================
     HERO — role-aligned theme
========================= -->
# Data-Efficient Foundation Models & Multimodal Systems

I work on making large models more practical under real constraints:
- **Foundation Models & Data Selection** — select small, high-impact subsets for LLMs and vision models using training dynamics and attention structure.  
- **Multimodal Perception & Robotics** — build lightweight, low-latency perception systems using event-based sensing and efficient architectures.  
- **Federated & Distributed Learning** — reduce communication, preserve privacy, and keep performance competitive in real-world, heterogeneous settings.

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

  <!-- Per-theme micro-rationale -->
  {% if category == "Foundation Models & Data Selection" %}
  <p><em>Select less, learn more:</em> Develop methods like <strong>attention-based token saliency</strong> and <strong>loss-trajectory coresets</strong> to train LLMs and vision models efficiently without sacrificing accuracy.</p>
  {% elsif category == "Multimodal Perception & Robotics" %}
  <p><em>Perceive faster, on cheaper hardware:</em> Use <strong>event cameras</strong> and <strong>compact neural architectures</strong> to enable real-time detection and tracking for robotics and embedded platforms.</p>
  {% elsif category == "Federated & Distributed Learning" %}
  <p><em>Learn collaboratively, communicate less:</em> Build <strong>communication- and data-efficient federated learning</strong> methods that handle heterogeneous clients while preserving privacy and model quality.</p>
  {% endif %}

  {% assign categorized_projects = site.projects | where: "category", category %}
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
In each project’s front matter, set:
  category: "Foundation Models & Data Selection" | "Multimodal Perception & Robotics" | "Federated & Distributed Learning"
  importance: <number>   # lower = earlier

Suggested mapping:
  Foundation Models & Data Selection:
    - TRIM
    - Coresets from Trajectories
  Multimodal Perception & Robotics:
    - DOTIE / event vision work
  Federated & Distributed Learning:
    - TOFU and related FL projects
-->
