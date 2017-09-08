/// <reference path ="../scripts/typings/jquery/jquery.d.ts"/> 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(arg) {
    return arg;
}
var myIdentity = identity;
/* Generic classes */
var MetaNumber = (function () {
    function MetaNumber(number, presicion) {
        this.number = number;
        this.presicision = presicion;
    }
    return MetaNumber;
}());
var DerivedMetaNumber = (function (_super) {
    __extends(DerivedMetaNumber, _super);
    function DerivedMetaNumber(number, presicion) {
        return _super.call(this, number, presicion) || this;
    }
    return DerivedMetaNumber;
}(MetaNumber));
var SpecificNumber = (function () {
    function SpecificNumber() {
    }
    SpecificNumber.prototype.add = function (x, y) {
        //let resultNumber: number = x. .number + y.number;
        return null;
        //let ttt = new x();
        //let result: MetaNumber = new T();
        //return new T();
        //return {
        //    number: number = 1,
        //    presicision: number = 2
        //};
    };
    ;
    return SpecificNumber;
}());
var RealNumber = (function (_super) {
    __extends(RealNumber, _super);
    function RealNumber(zeroValue) {
        if (zeroValue === void 0) { zeroValue = 0; }
        var _this = _super.call(this) || this;
        _this.zeroValue = zeroValue;
        return _this;
    }
    ;
    RealNumber.prototype.substract = function (x, y) {
        throw Error("Not implemented");
    };
    ;
    RealNumber.prototype.multuply = function (x, y) {
        throw Error("Not implemented");
    };
    RealNumber.prototype.divide = function (x, y) {
        throw Error("Not implemented");
    };
    return RealNumber;
}(SpecificNumber));
$(document).ready(function () {
    //myIdentity()  
    var tt = identity(1);
    //alert(`number is ${tt}`);
});
//# sourceMappingURL=generics.js.map