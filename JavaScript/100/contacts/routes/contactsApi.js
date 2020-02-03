var debug = require("debug")("contacts:contactsApi");
var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  db.query("SELECT * FROM contacts", (error, results, fields) => {
    if (error) {
      res.statusCode = 500;
      return res.end(`Unable to fetch contacts: ${error.message}`);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(results);
  });
});

router
  .route("/addContact")
  .get((req, res, next) => {
    res.render("layout", {
      title: "Add Contact",
      partials: { content: "addContact" },
      css: ["addContact"]
    });
  })
  .post((req, res, next) => {
    //req.body.id = nextId++;
    debug("Adding contact", req.body);
    //contacts.push(req.body);

    db.query(
      `INSERT INTO CONTACTS(firstName, lastName, email, phone)
              VALUES(?, ?, ?, ?)`,
      [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
      (error, result) => {
        if (error) {
          res.statusCode = 500;
          return res.end(`Unable to add contacts: ${error.message}`);
        }
        res.statusCode = 201;
        res.header("Access-Control-Allow-Origin", "*");
        res.send({ id: result.insertId, firstName: req.body.firstName });
      }
    );
  });

module.exports = router;
