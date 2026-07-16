document.addEventListener('DOMContentLoaded', function() {
    fetch('/assets/data/returns.csv')
        .then(response => {
            if (!response.ok) throw new Error('CSV not found');
            return response.text();
        })
        .then(csvText => {
            const lines = csvText.trim().split('\n');
            const headers = lines[0].split(',');
            const data = [];
            for (let i = 1; i < lines.length; i++) {
                const cols = lines[i].split(',');
                if (cols.length >= 2) {
                    data.push({
                        date: cols[0].trim(),
                        nav: parseFloat(cols[1].trim())
                    });
                }
            }
            renderChart(data);
        })
        .catch(error => {
            console.log(error.message);
            // 备用示例数据
            const sampleData = [
                {date: "2024-01-01", nav: 1.0000},
                {date: "2024-07-01", nav: 1.5234},
                {date: "2025-01-01", nav: 1.5987},
                {date: "2025-07-01", nav: 1.6456},
                {date: "2026-01-01", nav: 1.6234},
                {date: "2026-07-01", nav: 1.6339}
            ];
            renderChart(sampleData);
        });
});

function renderChart(data) {
    const dates = data.map(d => d.date);
    const navs = data.map(d => d.nav);

    const totalReturn = (navs[navs.length - 1] - 1) * 100;
    const days = data.length;
    const annualReturn = (Math.pow(navs[navs.length-1], 365.25/days) - 1) * 100;

    let maxDrawdown = 0;
    let peak = navs[0];
    for (let nav of navs) {
        if (nav > peak) peak = nav;
        const dd = (peak - nav) / peak * 100;
        if (dd > maxDrawdown) maxDrawdown = dd;
    }

    const totalEl = document.getElementById('totalReturn');
    if (totalEl) {
        totalEl.textContent = totalReturn.toFixed(2) + '%';
        totalEl.className = 'metric-value ' + (totalReturn >= 0 ? 'positive' : 'negative');
    }

    const annualEl = document.getElementById('annualReturn');
    if (annualEl) annualEl.textContent = annualReturn.toFixed(2) + '%';

    const ddEl = document.getElementById('maxDrawdown');
    if (ddEl) ddEl.textContent = maxDrawdown.toFixed(2) + '%';

    const navEl = document.getElementById('currentNav');
    if (navEl) navEl.textContent = navs[navs.length-1].toFixed(4);

    const updateEl = document.getElementById('lastUpdate');
    if (updateEl) updateEl.textContent = dates[dates.length-1];

    const chartDom = document.getElementById('returnsChart');
    if (!chartDom) return;

    const chart = echarts.init(chartDom);
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            formatter: function(params) {
                const d = params[0];
                return d.name + '<br/>' +
                       '净值: ' + d.value.toFixed(4) + '<br/>' +
                       '收益: ' + ((d.value - 1) * 100).toFixed(2) + '%';
            }
        },
        grid: {
            left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true
        },
        xAxis: {
            type: 'category',
            data: dates,
            boundaryGap: false,
            axisLine: { lineStyle: { color: '#e5e7eb' } },
            axisLabel: { color: '#6b7280', fontSize: 11 }
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false },
            splitLine: { lineStyle: { color: '#f3f4f6' } },
            axisLabel: {
                color: '#6b7280',
                formatter: function(value) {
                    return (value * 100).toFixed(0) + '%';
                }
            }
        },
        series: [{
            name: '净值',
            type: 'line',
            data: navs,
            smooth: true,
            symbol: 'none',
            lineStyle: {
                color: '#c9a96e',
                width: 3
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(201, 169, 110, 0.3)' },
                    { offset: 1, color: 'rgba(201, 169, 110, 0.02)' }
                ])
            }
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}
