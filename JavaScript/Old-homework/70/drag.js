/*global $*/
(function () {
    'use strict';

    let dragging;
    let offset;
    let reload = [];
    let boxoff = 10;
    
    for (let index = 0; index < 6; index++) {
        $(`#${index}`).css('top', `${boxoff}px`);
        boxoff += 80;
    }



    $(document)
        .on('mousedown', '.box', e => {
            console.log('down', e);
            dragging = $(e.target);
            offset = { y: e.offsetY, x: e.offsetX };
        }).mousemove(e => {
            if (dragging) {
                dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
                e.preventDefault();
            }
        }).mouseup(e => {
            console.log('up', e);
            dragging = null;
            if (e.target.id !== "sidebar" && e.target.id !== "") {
                const reloadData = { id: e.target.id, top: e.pageY - offset.y, left: e.pageX - offset.x };
                for (let index = 0; index < reload.length; index++) {
                    if (reload[index].id === e.target.id) {
                        reload.splice(index, 1);
                    }
                }
                reload.push(reloadData);
                localStorage.reload = JSON.stringify(reload);
            }
        });



    if (localStorage.reload) {
        reload = JSON.parse(localStorage.reload);
        reload.forEach(reloadData => {
            $(`#${reloadData.id}`).css('top', `${reloadData.top}px`);
            $(`#${reloadData.id}`).css('left', `${reloadData.left}px`);
        });
    }
}());