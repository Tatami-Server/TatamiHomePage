const { https } = require('firebase-functions/v2');
const { default: next } = require('next');
const { initializeApp } = require('firebase-admin/app');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

initializeApp()

exports.OptimizeImage = require("./src/OptimizeImage"),
exports.nextApp = https.onRequest((req, res) => app.prepare().then(() => handle(req, res)))