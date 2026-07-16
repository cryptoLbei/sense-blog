---
layout: default
title: 实盘策略
permalink: /strategy/
---

<div class="page-header">
    <h1>📈 实盘策略</h1>
    <p>量化策略回测与实盘跟踪</p>
</div>

<div class="posts-list">
    {% for post in site.categories.strategy %}
    <article class="post-item">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="meta">{{ post.date | date: "%Y-%m-%d" }}</div>
        <div class="excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
    </article>
    {% endfor %}
    {% if site.categories.strategy.size == 0 %}
    <div style="text-align: center; padding: 4rem; color: var(--text-light);">
        <p>暂无文章，敬请期待。</p>
    </div>
    {% endif %}
</div>

<section class="strategy-section" style="margin-top: 3rem;">
    <div class="section-header">
        <h2>📈 实盘收益曲线</h2>
        <span class="update-time">数据更新于：<span id="lastUpdate">加载中...</span></span>
    </div>
    <div class="chart-container">
        <div id="returnsChart"></div>
        <div class="metrics-row">
            <div class="metric-box">
                <div class="metric-value positive" id="totalReturn">--%</div>
                <div class="metric-label">累计收益</div>
            </div>
            <div class="metric-box">
                <div class="metric-value" id="annualReturn">--%</div>
                <div class="metric-label">年化收益</div>
            </div>
            <div class="metric-box">
                <div class="metric-value" id="maxDrawdown">--%</div>
                <div class="metric-label">最大回撤</div>
            </div>
            <div class="metric-box">
                <div class="metric-value" id="currentNav">--</div>
                <div class="metric-label">当前净值</div>
            </div>
        </div>
    </div>
</section>

<script src="{{ '/assets/js/chart.js' | relative_url }}"></script>
