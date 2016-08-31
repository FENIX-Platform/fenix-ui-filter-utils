if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {

    'use strict';

    return {

        forbiddenSubjects: ["value"],
        exclude: [], //exclude id
        common: {},
        lang: 'EN',
        defaultPeriodFrom: 1970,
        defaultPeriodTo: 2017

    }
});