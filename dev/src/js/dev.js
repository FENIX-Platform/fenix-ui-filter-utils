define([
    'loglevel',
    'jquery',
    'underscore',
    '../../../src/js/index',
    "../models/dataset"
], function (log, $, _, Utils, Model) {

    'use strict';

    function Dev() {

        console.clear();

        //trace, debug, info, warn, error, silent
        //log.setLevel('trace');
        log.setLevel('silent');

        this._importThirdPartyCss();

        this.start();

    }

    Dev.prototype.start = function () {

        log.trace("Dev started");

        this._render();

    };

    Dev.prototype._render = function () {

        console.log(Utils.createConfiguration({
            model : Model
        }))

    };

    Dev.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require('bootstrap/dist/css/bootstrap.css');

    };

    return new Dev();

});