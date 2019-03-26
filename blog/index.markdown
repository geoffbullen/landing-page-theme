---
layout: single-page
category: blog
title: blog
---
<!-- Loop in you posts -->
{% for post in site.posts %}
  <!-- Here's the header -->
  <header>
    <h2 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
  </header>

  <!-- Your post's summary goes here -->
  <article>{{ post.excerpt }}</article>

{% endfor %}