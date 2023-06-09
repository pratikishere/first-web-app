const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan')
const log = require('debug')('app');

const app = express();
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello from my app');
})

app.listen(3000, () => {
    log(`listening on port ${chalk.green('3000')}`);
})