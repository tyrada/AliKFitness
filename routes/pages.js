/*****************************************************************************
 * FILENAME: pages.js
 *****************************************************************************/

const express = require('express');
const router = express.Router();
const path = require('path');

const RES_OK = 200

router.get('/', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/index.html'));
})

router.get('/about', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/about-section.html'));
})

router.get('/programs', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/programs-section.html'));
})

router.get('/contact', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/contact-section.html'));
})

router.get('/signup', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/signup.html'));
})

router.get('/login', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/login.html'));
})

router.get('/forgot-password', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/forgot-password.html'));
})

router.get('/trainer-login', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/trainer-login.html'));
})

router.get('/trainer-dashboard', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/trainer-dashboard.html'));
})

router.get('/admin-login', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/admin-login.html'));
})

router.get('/admin-dashboard', (req, res) => {
  res.status(RES_OK);
  res.sendFile(path.join(__dirname, '../public/pages/admin-dashboard.html'));
})

module.exports = router;