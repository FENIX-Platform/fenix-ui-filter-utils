define([
    'loglevel',
    'jquery',
    'underscore',
    '../../../src/js/index'
], function (log, $, _, Utils) {

    'use strict';

    function Dev() {

        console.clear();

        //trace, debug, info, warn, error, silent
        log.setLevel('trace');

        this.start();

    }

    Dev.prototype.start = function () {

        log.trace("Dev started");

        this._render();

    };

    Dev.prototype._render = function () {

        var obj = {},
            path = "a",
            value = "test";

        Utils.assign(path, obj, value);

        console.log(Utils.getNestedProperty(path, obj))


    };

    return new Dev();

});