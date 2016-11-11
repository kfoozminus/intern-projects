const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;

const Books = require('./collections/books');
const AppRouter = require('./routers/router');
// const BookList = require('./views/book_list');

global.nunjucksEnv = new global.nunjucks.Environment(new global.nunjucks.PrecompiledLoader());

const books = new Books();

global.router = new AppRouter({books});

Backbone.history.start();