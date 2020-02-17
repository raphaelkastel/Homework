var debug = require('debug')('contacts:contacts');
var express = require('express');
var router = express.Router();
const db = require('../pool');

/*let contacts = [
  {
    id: 1,
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'dtrump@whitehouse.gov',
    phone: '123456789'
  },
  {
    id: 2,
    firstName: 'Bibi',
    lastName: 'Netanyahu',
    email: 'bnetanyahu@knesset.gov',
    phone: '987654321'
  }
];
let nextId = contacts.length + 1;*/

router.get('/', (req, res, next) => {
  db.query('SELECT * FROM contacts', (error, results, fields) => {
    if (error) return next(error);

    res.render('layout', {
      title: 'Contacts',
      partials: { content: 'contacts' },
      contacts: results,
      noContacts: !results.length,
      css: ['contacts']
    });
  });
});

/*router.get('/addContact', (req, res, next) => {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'contactForm' },
    css: ['contactForm']
  });
});

router.post('/addContact', (req, res, next) => {*/

router.route('/addContact')
  .get((req, res, next) => {
    res.render('layout', {
      title: 'Add Contact',
      partials: { content: 'contactForm' },
      css: ['contactForm']
    });
  })
  .post((req, res, next) => {
    //req.body.id = nextId++;
    debug('Adding contact', req.body);
    //contacts.push(req.body);

    db.query(`INSERT INTO CONTACTS(firstName, lastName, email, phone)
              VALUES(?, ?, ?, ?)`,
      [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
      (error, result) => {
        if (error) return next(error);
        res.redirect('/contacts');
      }
    );
  });

router.route('/updateContact/:id')
  .get((req, res, next) => {
    debug('Update contact', req.params.id);

    db.query('SELECT * FROM contacts WHERE id=?', [req.params.id], (error, results) => {
      if (error) return next(error);
      debug('Select for update results', results);
      if (!results.length) {
        return next(new Error(`Failed to find contact with id ${req.params.id} to update`));
      }

      res.render('layout', {
        title: 'Edit Contact',
        partials: { content: 'contactForm' },
        css: ['contactForm'],
        contact: results[0]
      });
    });
  })
  .post((req, res, next) => {
    debug('Updating contact', req.body);

    db.query(`UPDATE CONTACTS SET firstName = ?, lastName = ?, email = ?, phone = ?
              WHERE id = ?`,
      [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.params.id],
      (error, result) => {
        if (error) return next(error);
        if (result.affectedRows === 0) {
          return next(new Error(`Failed to find contact with id ${req.params.id} to update`));
        }
        res.redirect('/contacts');
      }
    );
  });

router.get('/deleteContact/:id', (req, res, next) => {
  debug('Deleting contact', req.params.id);
  //contacts = contacts.filter(c => c.id !== +req.params.id);

  db.query('DELETE FROM contacts WHERE id=?', [req.params.id], (error, results) => {
    if (error) return next(error);
    debug('Delete results', results);
    if (results.affectedRows === 0) {
      return next(new Error(`Failed to find contact with id ${req.params.id} to delete`));
    }
    res.redirect('/contacts');
  });
});

module.exports = router;
