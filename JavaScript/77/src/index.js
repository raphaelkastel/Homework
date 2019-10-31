
'use strict';

import $ from 'jquery';

const button = $('#button');
const clicked = $('clicked');

button.addEventListener('click', () => {
    clicked.innerHTML = `clicked`;
});
