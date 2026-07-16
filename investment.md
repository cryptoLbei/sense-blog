---
layout: default
title: 投资思考
---

<div class="page-header">
    <h1>🧠 投资思考</h1>
    <p>深度行业研究与投资框架迭代</p>
</div>

<div class="posts-list">
    {% for post in site.categories.investment %}
    <article class="post-item">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="meta">{{ post.date | date: "%Y-%m-%d" }}</div>
        <div class="excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
    </article>
    {% endfor %}
    {% if site.categories.investment.size == 0 %}
    <div style="text-align: center; padding: 4rem; color: var(--text-light);">
        <p>暂无文章，敬请期待。</p>
    </div>
    {% endif %}
</div>
