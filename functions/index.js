const { https } = require('firebase-functions/v2');
const { default: next } = require('next');
const { initializeApp } = require('firebase-admin/app');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

initializeApp()

const { OptimizeImage } = require("./src/OptimizeImage")

exports.OptimizeImage = OptimizeImage

exports.nextApp = https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl);
  return app.prepare().then(() => handle(req, res));
});