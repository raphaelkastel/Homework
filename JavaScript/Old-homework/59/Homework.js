(function () {
    'use strict';

    const background = document.getElementById('background');
    const textcolor = document.getElementById('text');
    const body = document.getElementsByTagName('body')[0];

    background.addEventListener('click', event => {
        let bcolor = document.getElementById('background').innerHTML;

        switch (bcolor) {
            case "Darkgray":
                body.style.backgroundColor = 'rgb(65, 62, 62';
                background.innerHTML = "Blue";
                break;
            case "Blue":
                body.style.backgroundColor = 'blue';
                background.innerHTML = "Red";
                break;
            case "Red":
                body.style.backgroundColor = 'red';
                background.innerHTML = "Green";
                break;
            case "Green":
                body.style.backgroundColor = 'green';
                background.innerHTML = "White";
                break;
            case "White":
                body.style.backgroundColor = 'white';
                background.innerHTML = "Darkgray";
                break;
        }
    });

    textcolor.addEventListener('click', event => {
        let tcolor = document.getElementById('text').innerHTML;

        switch (tcolor) {
            case "Gray":
                body.style.color = 'gray';
                textcolor.innerHTML = "Blue";
                break;
            case "Blue":
                body.style.color = 'blue';
                textcolor.innerHTML = "Red";
                break;
            case "Red":
                body.style.color = 'red';
                textcolor.innerHTML = "Green";
                break;
            case "Green":
                body.style.color = 'green';
                textcolor.innerHTML = "Black";
                break;
            case "Black":
                body.style.color = 'black';
                textcolor.innerHTML = "Gray";
                break;
        }
    });

}());