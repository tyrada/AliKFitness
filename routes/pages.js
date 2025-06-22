/*****************************************************************************
 * FILENAME: pages.js
 *****************************************************************************/

const express = require('express');
const router = express.Router();
const path = require('path');

const RES_OK = 200

router.get('/', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../index.html'));
})

router.get('/about', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/about-section.html'));
})

router.get('/contact', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/contact-section.html'));
})

router.get('/login', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/login.html'));
})

module.exports = router;