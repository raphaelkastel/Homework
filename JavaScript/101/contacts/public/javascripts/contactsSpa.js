/*global $*/

(async function () {
    'use strict';

    const theTable = $('#contactsTable tbody');

    let contacts = [];

    function addContact(newContact) {
        if (!contacts.length) {
            theTable.empty();
        }

        contacts.push(newContact);

        const newRow = $(`<tr>
            <td>${newContact.firstName}</td>
            <td>${newContact.lastName}</td>
            <td>${newContact.email}</td>
            <td>${newContact.phone}</td>
            <td>
                <button class="edit">edit</button>
                <button class="delete">delete</button>
            </td>
         </tr>`).appendTo(theTable);

        newRow.find('.delete').click(async () => {
            try {
                const res = await fetch(`api/contacts/${newContact.id}`, {
                    method: 'DELETE'
                });

                if (!res.ok) {
                    const result = await res.json();
                    throw new Error(`${res.status} ${res.statusText} ${result.error}`);
                }

                newRow.remove();
                contacts = contacts.filter(c => c !== newContact);
            } catch (error) {
                pcs.messageBox.show(error, true);
            }
        });

        newRow.find('.edit').click(async () => {
            showContactForm(newContact);
        });
    }

    function updateContact(updatedContact, originalContact) {
        // tbd - implement update of row and contact
    }

    const firstNameInput = $('#first');
    const lastNameInput = $('#last');
    const emailInput = $('#email');
    const phoneInput = $('#phone');
    const contactForm = $('#contactForm');

    contactForm.submit(async event => {
        event.preventDefault();

        const newContact = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            email: emailInput.val(),
            phone: phoneInput.val()
        };

        // TBD - rewrite as sepaarte post and put paths
        const existingContact = contactForm.data('contact');
        const url = 'api/contacts' + (existingContact ? `/${existingContact.id}` : '');
        const method = existingContact ? 'PUT' : 'POST';
        try {
            const res = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(newContact)
            });

            const ok = res.ok;

            let result;
            if (!ok || !existingContact) {
                result = await res.json();

                if (!ok) {
                    throw new Error(`${res.status} ${res.statusText} ${result.error}`);
                }
            }

            if (!existingContact) {
                addContact(result);
            } else {
                updateContact(newContact, existingContact);
            }

            hideContactForm();
        } catch (error) {
            pcs.messageBox.show(error, true);
        }
    });

    function hideContactForm() {
        contactForm.slideUp('fast'); // 5000);
        contactForm[0].reset();
        contactForm.data('contact', null);
    }

    $('#cancel').click(() => {
        hideContactForm();
    });

    $('#addContact').click(() => {
        showContactForm();
    });

    function showContactForm(contact) {
        if (contact) {
            firstNameInput.val(contact.firstName);
            lastNameInput.val(contact.lastName);
            emailInput.val(contact.email);
            phoneInput.val(contact.phone);
            contactForm.data('contact', contact);
        }
        contactForm.slideDown('slow');
    }

    //$('#loadContacts').click(async () => {
    try {
        const response = await fetch('api/contacts');
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const loadedContacts = await response.json();
        loadedContacts.forEach(addContact);
    }
    catch (error) {
        pcs.messageBox.show(error, true);
    }
    //});
}());