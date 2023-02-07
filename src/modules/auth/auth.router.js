const express = require('express');
const router = express.Router();

const ROUTE_PREFIX = 'auth';

router.get(`${ROUTE_PREFIX}/register`, (req, res) => {
    res.send('Birds home page')
});