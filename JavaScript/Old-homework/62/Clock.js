(function () {
    'use strict';
    let clock = new Date();
    const clockDiv = document.createElement('div');
    const span = document.createElement('span');
    
    clockDiv.appendChild(span);
    clockDiv.style.position = 'fixed';
    clockDiv.style.color = 'darkGreen';
    clockDiv.style.backgroundColor = 'black';
    clockDiv.style.left = '50%';
    clockDiv.style.bottom = '0';
    clockDiv.style.width = '160px';
    clockDiv.style.height = '2rem';
    clockDiv.style.fontSize  = '2rem';
    clockDiv.style.marginLeft ='-100px';
    clockDiv.style.textAlign = 'center';
    clockDiv.style.borderTopLeftRadius = '4px';
    clockDiv.style.borderTopRightRadius = '4px';
    clockDiv.innerHTML = clock.toLocaleTimeString();
    document.body.appendChild(clockDiv);
    setInterval(() => {
        clock = new Date();
        clockDiv.innerHTML = clock.toLocaleTimeString();
    }, 1000);

}());
