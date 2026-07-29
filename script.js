const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];

function heart(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) -
                5 * Math.cos(2 * t) -
                2 * Math.cos(3 * t) -
                Math.cos(4 * t));
    return { x, y };
}

for (let i = 0; i < 800; i++) {
    const t = Math.random() * Math.PI * 2;
    const p = heart(t);

    particles.push({
        x: p.x * 18,
        y: p.y * 18,
        size: Math.random() * 2 + 1
    });
}
