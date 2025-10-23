let ball = {
    x: 50,
    y: 50,
    speedX: 3,
    speedY: 3,
    dia: 100
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    circle(ball.x, ball.y, ball.dia);
    if (ball.x < ball.dia/ 2 || ball.x > width - ball.dia /2) {
        ball.speedX *= -1;
        ball.dia += -1
    }
    if (ball.y < ball.dia /2 || ball.y > height - ball.dia /2) {
        ball.speedY *= -1;
        ball.dia += -1
    }
    ball.x += ball.speedX;
    ball.y += ball.speedY;
}