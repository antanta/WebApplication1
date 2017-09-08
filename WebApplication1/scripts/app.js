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
function sayHello() {
    var compiler = document.getElementById("compiler").value;
    var framework = document.getElementById("framework").value;
    return "Hello from " + compiler + " and " + framework + "!";
}
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " moved by " + distance);
    };
    return Animal;
}());
var Cat = (function () {
    function Cat(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    ;
    Cat.prototype.reset = function (int) {
        debugger;
        console.log('cat\'s reset');
    };
    ;
    Cat.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log(this.name + " ran " + distance);
    };
    ;
    return Cat;
}());
var SiameseCat = (function (_super) {
    __extends(SiameseCat, _super);
    function SiameseCat(name, weight) {
        var _this = _super.call(this, name, weight) || this;
        _this.name = name;
        _this.weight = weight;
        return _this;
    }
    ;
    SiameseCat.prototype.reset = function (int) {
        console.log('this is siamese run');
        _super.prototype.reset.call(this, int);
    };
    return SiameseCat;
}(Cat));
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
$(document).ready(function () {
    var c1 = new Cat("ordinary cat", 5);
    var c2 = new SiameseCat("siamese cat", 10);
    c1.move();
    c2.reset(2);
    var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    //alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    var pickedCard2 = pickCard(12);
    //alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
});
//# sourceMappingURL=app.js.map