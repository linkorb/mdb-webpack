require('../css/theme.scss');

var $ = require('jquery');
global.$ = global.jQuery = $;

import popper from 'popper.js';
global.popper = global.Popper = popper;

import 'mdbootstrap-pro/js/bootstrap.min.js';

//import 'mdbootstrap-pro/css/mdb.min.css';

global.bsCustomFileInput = require('mdbootstrap-pro/js/modules/vendor/bs-custom-file-input');

import 'mdbootstrap-pro/js/mdb.min.js';
