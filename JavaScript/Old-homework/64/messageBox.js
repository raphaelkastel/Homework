// Why don't programmers like nature? It has too many bugs.
window.pcs = window.pcs || {};

window.pcs.messageBox = (function () {
    'use strict';

    const offset = 40;
    const initialTopOffset = -75;
    const initialLeftOffset = -150;
    const width = 300;
    const height = 150;
    let currentTopOffset = initialTopOffset;
    let currentLeftOffset = initialLeftOffset;
    let numberOfOpenMessages = 0;
    let nextZIndex = 1;
    let messageBoxDiv; 
    let span;
    let buttonDiv;
    function createButton(name, callback) {
       
        const button = document.createElement('button');
        button.innerHTML = name;
        buttonDiv.appendChild(button);
        messageBoxDiv.appendChild(buttonDiv);
        button.style.margin = '4px';
        document.body.appendChild(messageBoxDiv);
        button.addEventListener('click', () => {
            document.body.removeChild(messageBoxDiv);
            if (callback) {
                callback(button.innerHTML);
            }
            if (--numberOfOpenMessages === 0) {
                currentLeftOffset = initialLeftOffset;
                currentTopOffset = initialTopOffset;
            }
           
        });
    }

    function show(msg, array, callback) {
        messageBoxDiv = document.createElement('div');
        span = document.createElement('span'); 
        buttonDiv = document.createElement('div');
        span.innerHTML = msg;
        messageBoxDiv.appendChild(span);




        if (!array) {
            createButton('ok', callback)
        }
        else if (array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i]) {
                    createButton(array[i], callback)
                }
            }
        }

        messageBoxDiv.style.backgroundColor = 'lightblue';
        messageBoxDiv.style.position = 'absolute';
        messageBoxDiv.style.top = '50%';
        messageBoxDiv.style.left = '50%';
        messageBoxDiv.style.width = `${width}px`;
        messageBoxDiv.style.height = `${height}px`;
        messageBoxDiv.style.marginLeft = `${currentLeftOffset}px`;
        messageBoxDiv.style.marginTop = `${currentTopOffset}px`;
        messageBoxDiv.style.border = '1px solid black';
        messageBoxDiv.style.boxSizing = 'border-box';
        messageBoxDiv.style.padding = '4px';
        messageBoxDiv.style.textAlign = 'center';
        messageBoxDiv.style.paddingBottom = '30px';

        span.style.overflow = 'auto';
        span.style.height = '100%';
        span.style.display = 'inline-block';
        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '0';
        buttonDiv.style.left = '0';
        buttonDiv.style.width = '100%';
        buttonDiv.style.marginBottom = '4px';

        messageBoxDiv.addEventListener('click', () => {
            messageBoxDiv.style.zIndex = nextZIndex++;
        });

        currentLeftOffset += offset;
        currentTopOffset += offset;

        if (parseInt(getComputedStyle(messageBoxDiv).left, 10) + currentLeftOffset + width > window.innerWidth) {
            currentLeftOffset -= (window.innerWidth - width);
        }
        if (parseInt(getComputedStyle(messageBoxDiv).top, 10) + currentTopOffset + height > window.innerHeight) {
            currentTopOffset -= (window.innerHeight - height);
        }

        numberOfOpenMessages++;
    }

    return {
        createButton: createButton,
        show: show
    };
}());