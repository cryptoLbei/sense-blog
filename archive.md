---
layout: default
title: 全部文章
permalink: /archive/
---

<div class="page-header">
    <h1>📚 全部文章</h1>
    <p>按时间顺序排列的所有文章</p>
</div>

<div class="posts-list">
    {% for post in site.posts %}
    <article class="post-item">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="meta">{{ post.date | date: "%Y-%m-%d" }} | {{ post.categories[0] | default: "随笔" }}</div>
        <div class="excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
    </article>
    {% endfor %}
</div>
