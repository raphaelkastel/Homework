/*global $*/
//(function () {
//    'use strict';

import $ from 'jquery';
// const $ = require('jquery');

let clicks = 0;
//const results = $('#results');

$('#theButton').click(() => {
    $('#results')/*results*/.text(`You clicked me ${++clicks} times`);
});

//}());