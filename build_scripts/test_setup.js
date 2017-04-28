// This file isn't transpiled with Babel!

// Register Babel to transpile before the tests run.
require('babel-register');

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
