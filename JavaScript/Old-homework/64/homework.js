/*global $*/
(function () {

    const fileForm = $('#fileForm');
    const nameInput = $('#file');
    const body = $('body');
    let url;
    body.append(`<div id = app></div>`);
    const app = $('#app');

    fileForm.submit(event => {
        url = nameInput.val();
        function loaded(rt) {
            fetch(url)
                .then(r => {
                   
                    if (r.ok) {
                        if (url.endsWith(".json")) {
                            return r.json();
                        }
                        return r.text();
                    } else {
                        throw new Error(r.status);
                    }
                })
                .then(rt => { if (url.endsWith(".json")) { body.append(JSON.stringify(rt)); } else { body.append(`<div> ${rt}</div>`) } })
                .catch(err => pcs.messageBox.show(`${err}`)); 
            app.html('');
        }

        function startLoad() {
            app.html('<img height="70" width="70" src="http://rpg.drivethrustuff.com/shared_images/ajax-loader.gif"/>');
                timeout = setTimeout(loaded, 1500);
        }
        startLoad();



        event.preventDefault();
        fileForm[0].reset();
    });
}());