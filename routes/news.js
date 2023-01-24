const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection');
const connection = dbConnection();

console.log('Conectado correctamente!!!');

/* GET home page. */
router.get('/', function(req, res, next) {

  //UN SELECT PARA HACER LOS RESULTADOS DE CONSULTA  
  connection.query('SELECT * FROM news', (err, result) => {

    console.log(result);
    res.render('news/news', {
        news: result
    });
  });  
});

router.post('/', function(req, res, next) {

    console.log(req.body)
    const {title, news} = req.body
    connection.query('INSERT INTO news SET?', {
      title,
      news
    }, (error, result) => {
      res.redirect('/news')
    })

});


module.exports = router;
