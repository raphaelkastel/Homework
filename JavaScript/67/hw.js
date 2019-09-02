
/*global $*/
const picInput = $('#pictures');
const picc = $('#carpic');
const loadedPics = $('#pics');
const maindiv = $('#main');
const bb = $('body');
let arraylength;
let idnum;
let array;
function doSomething(data) {
    array = data.items;
    for (let i = 0; i < data.items.length; i++) {
        let width = data.items[i].media.m;
        //width = width.width();
        arraylength = data.items.length;
        array[i]['ide'] = idnum;
        idnum++;
        loadedPics.append(`<div class ="loadedpic picclass" ide = ${array[i].ide} > <img src= ${data.items[i].media.m}  alt="img"><p class ="h1">${data.items[i].title}</p></div> `);
    }

}


(function () {
    'use strict';
    $('#load').click(() => {
        loadedPics.empty();
        idnum = 1;

        $.getScript(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${picInput.val()}&format=json&jsoncallback=doSomething`).
            done(() => {
                $(".loadedpic").click((e) => {
                    picc.empty();
                    let id = $(e.currentTarget).attr('ide');
                    for (let i = 0; i < arraylength; i++) {
                        const elem = Object.values(array[i]);
                        if (id == array[i].ide) {
                            picc.append(`<div><button class="back right myButton" >Back</button><img id = "img" src="${array[i].media.m}" alt="img"><button class="forward left myButton">Next</button></div>
                                        <div id = "h1">${array[i].title}</div><button id = "close" class="myButton">
                                        Close</button>`);
                            $('#close').click(() => {
                                maindiv.show();
                                picc[0].style.display = 'none';
                            });

                            $('.back').click(() => {
                                let backid = parseInt(id) - 1;
                                if (backid === 0) {
                                    backid = arraylength;
                                }
                                id = backid;
                                for (let i = 0; i < arraylength; i++) {

                                    const backelem = Object.values(array[i]);
                                    if (backid === array[i].ide) {
                                        $('#img').attr("src", `${array[i].media.m}`);
                                        $('#h1').text(`${array[i].title}`);
                                    }
                                }
                            });
                            $('.forward').click(() => {
                                let forwardid = parseInt(id) + 1;
                                if (forwardid == arraylength + 1) {
                                    forwardid = 1;
                                }
                                id = forwardid;
                                for (let i = 0; i < arraylength; i++) {
                                    const forwardelem = Object.values(array[i]);
                                    if (forwardid == array[i].ide) {
                                        $('#img').attr("src", `${array[i].media.m}`);
                                        $('#h1').text(`${array[i].title}`);
                                    }
                                }
                            });
                        }
                        maindiv.hide();
                        bb[0].style.margin = "0";
                        picc[0].style.left = '0';
                        picc[0].style.top = '0';
                        picc[0].style.width = '100vw';
                        picc[0].style.height = '100vh';
                        picc[0].style.backgroundColor = 'black';
                        picc[0].style.color = 'white';
                        picc.addClass('center-me');
                        picc[0].style.zIndex = 0;
                        picc[0].style.display = 'flex';
                    }
                });
            });
    });
}());