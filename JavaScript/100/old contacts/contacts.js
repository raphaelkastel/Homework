/*global $*/

(function() {
  "use strict";

  const theTable = $("#contactsTable tbody");

  const contacts = [];

  function addContact(newContact) {
    if (!contacts.length) {
      theTable.empty();
    }

    contacts.push(newContact);

    theTable.append(`<tr>
                            <td>${newContact.firstName}</td>
                            <td>${newContact.lastName}</td>
                            <td>${newContact.email}</td>
                            <td>${newContact.phone}</td>
                         </tr>`);
  }

  const firstNameInput = $("#first");
  const lastNameInput = $("#last");
  const emailInput = $("#email");
  const phoneInput = $("#phone");
  const contactForm = $("#contactForm");

  contactForm.submit(event => {
    const newContact = {
      firstName: firstNameInput.val(),
      lastName: lastNameInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };

    $.post(
      "http://localhost:3000/api/contacts/addContact",
      newContact,
      function(data, status) {
        console.log(data);
        alert("Contact added: " + data.firstName + "\nStatus: " + status);
      }
    );

    addContact(newContact);
    hideContactForm();

    event.preventDefault();
  });

  function hideContactForm() {
    contactForm.slideUp("fast");
    contactForm[0].reset();
  }

  $("#cancel").click(() => {
    hideContactForm();
  });

  $("#addContact").click(() => {
    contactForm.slideDown("slow");
  });

  $("#loadContacts").click(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/contacts");
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const loadedContacts = await response.json();
      loadedContacts.forEach(addContact);
    } catch (err) {
      pcs.messageBox.show(err, true);
    }
  });
})();
