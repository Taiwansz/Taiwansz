document.addEventListener("DOMContentLoaded", () => {
    const chartContainer = document.getElementById("chart-container");
    if (!chartContainer) return;

    const myChart = echarts.init(chartContainer);
    const username = "Taiwansz";
    const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

    // Base64 encoded images to avoid external dependencies
    const pacmanImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACzElEQVR4nLVWy0sUYRT+zszO7E5mZ3cn2c3uZnf28kU3I4PouqA3LQgqghARFX1B0KAPoAgiGkGhL6AvqIWK3kS8qI/gQxAUvSgqGkFE3czszM7M+n2/M+vM6oysfOBwzjnf/M53vjO/MwL+I5h3T/d/sPqB7v7p/p/+/x/g/Lv9g++DCwSDgY/sdnsMBoNn6tVqNZrN5g2bzcY2m80Vh8NhLpfLraZp+vj4+Lqapv13CH4mFovlUqvVqhGv1/s9GAx2d3Z2phGNRt/J5XJ/1Wq1g3q9/pDRaHTUaDS+zWazXxmPxw8Mh8Ofpmn+B/4f+L9nMpnMVqvVIBgMbpqmrUaj8Xo+n38wGAx2dXZ2/lWr1d4iCALvEomEt1qt9o5EIp8Sy+XxSZI8ZLPZvA8Gg1/UarU3dXd3f6/X6x8KhULfEM/z31mW/dZ0Ov2U8Xj8nslk8r5IJEIqlcovarXaR03T3mKxWJVKpQ/abDYfW63W23K5/JBlWV8zTTslm83+rNfr3zQaDTsSCQGj0fg2Ho/vO5/Pf2g0GuuCIHjUaDS+73Q6SZI8bjwevxONRp/V6/W/NpvNlqZpLxGNRjebzQYqlcozIpHIe8Mw3B6Px/dM0/wP/B/wP2AwGLzZbDabz+f/qNfr31mW/c5oNHpINpt9UywWvyIYDA6bzeZ/arXaiy6XS6wsi8XiiVwu/5JzudyLNE3bTqfT0Wq1etxoNJpLpVLfI5fL/U4sFr8hGAz2NpvNTxUKhfeI5/n/LMv6nNfr/bJarfYxGo3m09nZ+bver/f/slgsPiQcDmcqlcozrut+JxqN/gD+H/j/v8xms6lWq02lUvmp0+k8bjAYfCgUCv/V6/V/NRqNL0VR/JxzOBx+NRqNvta2/t/wP9b3+H8A/wA3tSDFc3z/igAAAABJRU5ErkJggg==';
    const ghostImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+klEQVR4nO2Xz0vUcRjHP8/7vO/z/uDkS3ISG5aQCimXhQhCQSG4K4Kgu+i/8B8IunDTbQiiDk4O4iBIIBQUQkL4kOTl5eXl5eXn/b3bHk6TEp2b8MHbvfN9ft/n83ne56Pjf0mI+d//Z+uv+X//+t8gEAgE/q5Wq9lutz+DweA39Xq9xWazvW02m/uCIHjSaDQ+kcvl/nK5XHc4HD5rtVp/xGaz2WKx+KDRaHwsFosfFovFq/V6/ZlIJL7R0dE3arXaS/V6/Zlqtfojrut+NRqNf83n83/bbrff1Wq1f8lkMv/RaDQ+lUqlv6/X69uCIPhsNpvdrus+VqvV3mKxeJzP59+NRqN/lEqlf6lU6q3RaPyk0+n8Zzab/UVR1D/Ouq5/2Ww2/6rX6z9lMpn+otFo/KDRaLzK5/O/sVgs/nK53N00Tf+sVqs/nU6nf0aj0X+I4/hHlmV/NpvNf2q12n+I4/hHlmV/5vP5X4jjeEaj0X+I4/gfjuP4r7Vafcjn8//M5/O/sVjsRVEUf2i12n+oVqv/NZ1O/6jX69+22+3/2m63/2Eymf6g0+m8zmazn+d5/u/zPP/Ldru9xXG8o1ar/VKp1Ntt2/bTNE3/v23b/nE6nX6r1+u/tNvtL4jjeEqlUn/M5/M/G41G/yqVyn/n8/lfWZb1S6VSf2i12n/I5/M/fN//8zz/yyAI/mE0Gn8ul8v9ZVm/0Wq1H0VR/DXP83/dbrffLMv6J5vN/lKp1Ntt2/Y3TdM/yvP8L/V6vUWStFqt9pPNZn+v1+t/NRqNP6Zp+sfzPP/Lsqz/xHE8o9frvyiK4u/zPP9LURT/iOP4R7vd/kVRFP/Msqz/YDAYvGq12j/k8/lfWZb1S61W+yUnJ/+NRqP/NpvN/3q93v+x2+1vWZb1TzKZ/F8qlfo/wzD8/zAMf/8H+P8D9A8j5h8D/QO3y324iK2I3wAAAABJRU5ErkJggg==';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (!data.contributions || data.contributions.length === 0) {
                chartContainer.innerHTML = "Could not fetch contribution data.";
                return;
            }

            const graphData = data.contributions.map(c => [c.date, c.count]);
            const maxContributions = Math.max(...data.contributions.map(c => c.count));

            const option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    formatter: params => `${params.value[1]} contributions on ${params.value[0]}`
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: maxContributions,
                    inRange: {
                        symbolSize: [6, 18] // Pellets will range from 6px to 18px (Power Pellets)
                    }
                },
                calendar: {
                    left: 'center',
                    top: 'middle',
                    cellSize: ['auto', 20],
                    yearLabel: { show: false },
                    orient: 'vertical',
                    dayLabel: { firstDay: 1, nameMap: 'en', color: '#c9d1d9' },
                    monthLabel: { nameMap: 'en', color: '#c9d1d9' },
                    range: data.contributions[0].date.substring(0, 10)
                },
                graphic: [
                    {
                        type: 'image',
                        left: '70%',
                        top: '45%',
                        z: 100,
                        style: { image: pacmanImage, width: 35, height: 35 }
                    },
                    {
                        type: 'image',
                        left: '25%',
                        top: '45%',
                        z: 100,
                        style: { image: ghostImage, width: 30, height: 30 }
                    }
                ],
                series: [{
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    data: graphData,
                    symbol: 'circle',
                    itemStyle: {
                        color: '#ffc107' // Yellow color for pellets
                    }
                }]
            };

            myChart.setOption(option);
        })
        .catch(error => {
            console.error("Error fetching contribution data:", error);
            chartContainer.innerHTML = "Error fetching contribution data.";
        });

    window.addEventListener('resize', () => myChart.resize());
});