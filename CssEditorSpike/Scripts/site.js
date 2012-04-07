/*global CodeMirror _ */
(function (app, $, _, cm, undef) {
    'use strict';

    app.initialize = function () {
        console.log('foo');
    };

    $(function () {
        app.initialize();
    });


}((window.app = {}), jQuery, _, CodeMirror));