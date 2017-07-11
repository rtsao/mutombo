#!/usr/bin/env node

const {spawn} = require('child_process');

spawn('git', ['grep', '-P', `'TODO(?!\\(#\\d+\\))'`], {stdio: 'inherit'});
