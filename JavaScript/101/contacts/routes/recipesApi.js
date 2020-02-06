// so i'm having problems with postman i'll just hope this will do.
var debug = require('debug')('recipes:recipesApi');
var express = require('express');
var router = express.Router();
const ApiError = require('./apiError');
const db = require('../pool');

router.route('/')
    .get((req, res, next) => {
        db.query('SELECT * FROM recipes', (error, results, fields) => {
            if (error) return next(new ApiError(`Unable to fetch recipes ${error.message}`));
            res.send(results);
        });
    })
    .post((req, res, next) => {
        debug('Adding recipe', req.body);

        db.query(`INSERT INTO RECIPES(name, details)
                  VALUES(?, ?)`,
            [req.body.name, req.body.details],
            (error, result) => {
                if (error) return next(new ApiError(`Unable to add recipe ${error.message}`));
                if (!result.affectedRows) return next(new ApiError(`Unable to add recipe`));

                const recipe = {
                    name: req.body.name,
                    details: req.body.details,
                    id: result.insertId
                };
                res.status(201).send(recipe);
            }
        );
    });

router.route('/:id')
    .get((req, res, next) => {
        db.query('SELECT * FROM recipes WHERE id = ?',
            [req.params.id],
            (error, [result], fields) => {
                if (error) return next(new ApiError(`Unable to get recipe ${req.params.id} ${error.message}`));
                if (!result) return next(new ApiError(`Unable to get recipe ${req.params.id}`, 404));

                res.send(result);
            });
    })
    .put((req, res, next) => {
        db.query(`UPDATE RECIPES SET name = ?, details = ?
              WHERE id = ?`,
            [req.body.name, req.body.details, req.params.id],
            (error, result) => {
                if (error) return next(new ApiError(`Unable to update recipe ${req.params.id} ${error.message}`));
                console.log(result);
                if (!result.changedRows) return next(new ApiError(`Unable to update recipe`, 404));

                res.status(204).end();
            }
        );
    })
    .delete((req, res, next) => {
        db.query(`DELETE FROM RECIPES WHERE id = ?`,
            [req.params.id],
            (error, result) => {
                if (error) return next(new ApiError(`Unable to delete recipe ${req.params.id} ${error.message}`));
                if (!result.affectedRows) return next(new ApiError(`Unable to delete recipe ${req.params.id}`, 404));

                res.status(204).end();
            }
        );
    });

router.use((error, req, res, next) => {
    res.status(error.statusCode || 500)
        .send({ error: error.message });
});

module.exports = router;