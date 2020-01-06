/*global $, pcs*/
(function () {
    'use strict';

    const fileNameInput = $('#filename');
    const outputElem = $('#output');
    const spinner = $('#spinner');
    const table = $('#tab');

    $('#load').click(() => {
        outputElem.text('');


        fetch(fileNameInput.val())
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(rt => {
                for (let i = 0; i < rt.length; i++) {
                    const elem = Object.values(rt[i]);
                    table.append(`<tr>
                    <td>${elem[0]}</td>
                    <td>${elem[1]}</td>
                    <td>${elem[2]}</td>
                    <td>${elem[3]}</td>
                 </tr>`);

                }
            })
            .catch(err => {
                console.log(err);
            })
            .then(() => {
                spinner.hide();
            });
    });
}());