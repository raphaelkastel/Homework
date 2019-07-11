// A prisoner's favorite punctuation mark is the period. It marks the end of his sentence.
(function () {
    'use strict';

    const cSwitch = document.getElementById('colorChanger');
    const body = document.getElementsByTagName('body')[0];
    const table = document.getElementById('tableId');
    let colorSwap;
    let stop = true;
    function stopswitch() {
        if (stop) {
            stop = false;
        } else if (!stop) {
            stop = true;
        }
    }

    cSwitch.addEventListener('click', event => {
        stopswitch();
        if (!stop) {
            colorSwap = window.setInterval(function () {
                body.style.backgroundColor = `rgb(${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))})`;
                body.style.color = `rgb(${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))})`;
                const row = table.insertRow();
                const color = row.insertCell(0);
                const textColor = row.insertCell(1);
                const date = row.insertCell(2);
                date.innerHTML = new Date();
                color.innerHTML = body.style.backgroundColor;
                textColor.innerHTML = body.style.color;
                const rows = document.getElementById("tableId").rows;


                for (var i = 0; i < rows.length; i++) {
                    let cells = rows[i].getElementsByTagName("td");
                    if (cells && cells.length) {
                        cells[0].onclick = function () {
                            return function () {
                                const colorId = this.innerHTML;
                                body.style.backgroundColor = colorId;
                            }
                        }();
                    }

                }
                for (var i = 0; i < rows.length; i++) {
                    let cells = rows[i].getElementsByTagName("td");
                    if (cells && cells.length) {
                        cells[1].onclick = function () {
                            return function () {
                                const textId = this.innerHTML;
                                body.style.color = textId;
                            }
                        }();
                    }

                }

                //I like the single version better so i commented out the row version.



                /*for (let i = 0; i < rows.length; i++) {
                    rows[i].onclick = function () {
                        return function () {
                            const colorId = this.cells[0].innerHTML;
                            const textId = this.cells[1].innerHTML;
                            body.style.backgroundColor = colorId;
                            body.style.color = textId;
                        };
                    }(rows[i]);
                }

                for (let i = 0; i < rows.length; i++) {
                    rows[i].cells[1].onclick = function () {
                        return function () {
                            const textId = this.cells[1].innerHTML;
                            body.style.color = textId;
                        };
                    }(rows[i]);
            }*/
            }, 1000);
        } else if (stop) {
            clearInterval(colorSwap);
        }
    });

}());