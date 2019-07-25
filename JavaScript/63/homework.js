/*global $*/
(function () {

    const contactForm = $('#contactForm');
    const nameInput = $('#name');
    const addressInput = $('#address');
    const body = $('body');
    function disable() {
        nameInput.prop('disabled', true);
        addressInput.prop('disabled', true);
    }
    disable();

    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            nameInput.prop('disabled', false);
            addressInput.prop('disabled', false);
        }
    });

    contactForm.submit(event => {
        body.append(`<div>Name: ${nameInput.val()} Address: ${addressInput.val()} </div>`);
        event.preventDefault();
        contactForm[0].reset();
        disable();
    });
}());