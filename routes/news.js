const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.use('/public', express.static('public'));
router.get("/news/coronavirus",function(req,res)
{
    var key = req.params.key;
    var art;
    var url = 'http://newsapi.org/v2/everything?' +
          'q=' + key + '&' +
          'from=2020-07-16&' +
          'apiKey=85f8d9d56ac2448b9080732e373604e5';

    request(url, { json: true }, (err, res, body) => {
    if (err) 
    {
        return console.log(err); 
    }
    art=body.articles;
    });
    setTimeout( function()
    {
        res.render("news.ejs",{articles:art});
    },4000);
})

module.exports = router;
