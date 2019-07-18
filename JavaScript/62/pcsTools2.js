window.pcs = window.pcs || {};

window.pcs = function (id) {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, style) {
        element.style[property] = style;
    }

    function getCss(element, property) {
        return getComputedStyle(element)[property];
    }

    const elem = get(id);
    let stop = false;
    let inter;

    return {
      
        css: function (property, style) {

            if (arguments.length < 2) {
                return getCss(elem, property);
            }
            setCss(elem, property, style);
            return this;
        },
        hide: function () {
            setCss(elem, 'display', 'none');
            return this;
        },
        show: function () {
            setCss(elem, 'display', 'block');
            return this;
        },
        click: function (callback) {
            elem.addEventListener('click', callback);
            return this;
        },
        changeColor: function (time, gap) {
                setCss(elem, 'backgroundColor',
                    `rgb(${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))})`);
                setTimeout(() => {
                    setCss(elem, 'backgroundColor', 'white');
                     setTimeout(() => {
                        this.changeColor(time, gap);
                    }, gap);
                }, time);

            return this;
        },


        data: function (nameVal, value) {
            if (arguments.length < 2) {
                return elem[nameVal];
            }
            Object.assign(elem, { [nameVal]: value });
            return this;
        },
    };
};