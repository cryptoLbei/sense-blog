---
layout: default
title: 交易随笔
permalink: /trading/
---

<div class="page-header">
    <h1>📊 交易随笔</h1>
    <p>日常交易记录、操作逻辑与即时复盘</p>
</div>

<div class="posts-list">
    {% for post in site.categories.trading %}
    <article class="post-item">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="meta">{{ post.date | date: "%Y-%m-%d" }}</div>
        <div class="excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
    </article>
    {% endfor %}
    {% if site.categories.trading.size == 0 %}
    <div style="text-align: center; padding: 4rem; color: var(--text-light);">
        <p>暂无文章，敬请期待。</p>
    </div>
    {% endif %}
</div>
