const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan')
const log = require('debug')('app');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'first web app', data: ['a', 'b', 'c']});
})

app.listen(PORT, () => {
    log(`listening on port ${chalk.green(PORT)}`);
})