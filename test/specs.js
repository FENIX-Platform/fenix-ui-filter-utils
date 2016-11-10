/*global describe, it, require*/
var expect = require("chai").expect,
    Utils = require("../src/js/index"),
    model = require("./models/fenix"),
    _ = require("underscore");


describe("Utils", function () {

    it("should be not null", function () {
        expect(Utils).to.be.not.null;
    });

    it("should not contains 'value' related configuration", function () {

        var config = Utils.createConfiguration({
            model: model,
            common: {
                selector: {
                    hideSummary: true
                },
                template: {
                    hideSwitch: true
                }
            }
        });

        console.log(config)

        expect((Object.keys(config)).every(function (a) {
            console.log(!String(a).toUpperCase().startsWith("VALUE"), a)
            return !String(a).toUpperCase().startsWith("VALUE")
        })).to.be.true;
    });
});