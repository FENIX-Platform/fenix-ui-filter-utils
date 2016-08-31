/*global describe, it, require*/
var expect = require("chai").expect;
var Pivotator = require("../src/js/index");

describe("Pivotator", function () {

    it("should be not null", function () {
        expect(Pivotator).to.be.not.null;
    });
});