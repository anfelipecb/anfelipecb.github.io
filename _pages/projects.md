---
layout: page
title: Projects
permalink: /projects/
description: A collection of data science and policy projects.
nav: true
nav_order: 2
display_categories: [work, student-work]
horizontal: false
---

<!-- pages/projects.md -->
<style>
  .post-header h1.post-title {
    display: none;
  }
</style>

<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  {%- for category in page.display_categories %}
  <h2 class="category">{% case category %}{% when 'work' %}Work{% when 'student-work' %}Student work{% when 'fun' %}Fun{% else %}{{ category | replace: '-', ' ' }}{% endcase %}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="grid projects-page-grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {% endfor %}
{%- else -%}
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <div class="grid projects-page-grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>

{% include tag_capitalize.html %}
<script src="{{ '/assets/js/project-filters.js' | relative_url }}"></script>
