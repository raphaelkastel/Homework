/*global $*/
(function () {
    'use strict';
    const foo = $('#food');
    const outputElem = $('#output');
    fetch("recipeNames.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(rt => {

            foo.append(`Choose a recipe: `);
            const elem = Object.values(rt[0]);
            for (let i = 0; i < elem.length; i++) {
                foo.append(`<button id=${elem[i].join("-")} class="recipe">${elem[i].join(" ")}</button> `);
            }

        })
        .catch(err => {
            console.log(err);
        })
        .then(rt => {
            $('.recipe').click((e) => {
                outputElem.text('');

                fetch("recipes.json")
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`${response.status} ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(rt => {
                        let id = $(e.currentTarget).attr('id');
                        for (let i = 0; i < rt.length; i++) {
                            const elem = Object.values(rt[i]);

                            if (id == rt[i].id) {
                                outputElem.append(`<h1>${elem[0]}</h1><div><img src="${elem[1]}" alt="img"></div><div>${elem[2]}</div><h1>Ingredients</h1>`);
                                for (let i = 0; i < elem[3].length; i++) {
                                    outputElem.append(`<div>${elem[3][i]}</div>`);
                                }
                            }

                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        })
}());