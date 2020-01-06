// I could clean this up a little but I really don't care much for canvas.
(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const qrow = document.getElementById('sound');
    const death = document.getElementById('death');
    const setscore = document.getElementById('score');
    const context = canvas.getContext('2d');
    let score = 0;
    setscore.innerHTML = score;

    function resizeCanvas() {
        canvas.width = 1024;
        canvas.height = 640;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const SNAKE_SIZE = 64;
    let direction = 'ArrowRight';
    let x = -SNAKE_SIZE;
    let y = 0;
    let rannumx;
    let rannumy;
    let appx;
    let appy;
    const imgapp = new Image();
    function createapp() {
        rannumx = Math.floor(Math.random() * 16);
        rannumy = Math.floor(Math.random() * 10);
        appx = rannumx * SNAKE_SIZE;
        appy = rannumy * SNAKE_SIZE;
        imgapp.src = "images/images.jpg";
        if (x == appx && y == appy) {
            appx += 64;
            appy += 64;
        }
        context.drawImage(imgapp, appx, appy, SNAKE_SIZE, SNAKE_SIZE);
    }
    function reset(){
        context.clearRect(appx, appy, SNAKE_SIZE, SNAKE_SIZE);
        x = 0;
        y = 0;
        score = 0;
        setscore.innerHTML = score;
        direction = 'ArrowRight';
        createapp();
    }
    createapp();


    const img2 = new Image();
    img2.src = "images/snakehead.png";
    imgapp.addEventListener('load', () => {
        context.drawImage(imgapp, appx, appy, SNAKE_SIZE, SNAKE_SIZE);
    });
    img2.addEventListener('load', () => {
        setInterval(() => {
            context.clearRect(x, y, SNAKE_SIZE, SNAKE_SIZE);
            switch (direction) {
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
            }
            if (x == appx && y == appy) {
                createapp();
                console.log(appx, appy)
                qrow.play();
                score++;
                setscore.innerHTML = score;
            }

            if (y < -SNAKE_SIZE || y > canvas.height - SNAKE_SIZE || x > canvas.width - SNAKE_SIZE || x < 0 ) {
                reset();
                death.play();
            } 

            context.drawImage(img2, x, y, SNAKE_SIZE, SNAKE_SIZE);
        }, 200);
    });
    img2.addEventListener('error', () => {
        context.strokeText('OOPS', 250, 250);
    });


    document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                direction = event.key;
        }
    });

}());