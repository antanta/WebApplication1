/// <reference path ="../scripts/typings/jquery/jquery.d.ts"/> 

function sayHello() {
    let compiler = (document.getElementById("compiler") as HTMLInputElement).value;
    let framework = (document.getElementById("framework") as HTMLInputElement).value;
    return `Hello from ${compiler} and ${framework}!`;
}

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

abstract class Animal {
    name: string;
    weight: number;
    abstract reset(int: number): void;
    move(distance: number): void {
        console.log(`${this.name} moved by ${distance}`);
    }
}

class Cat implements Animal {
    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    };
    reset(int: number): void {
        debugger;
        console.log('cat\'s reset');
    };
    name: string;
    weight: number;
    move(distance: number = 5): void {
        console.log(`${this.name} ran ${distance}`);
    };
}

class SiameseCat extends Cat {
    constructor(name: string, weight: number) {
        super(name, weight);
        this.name = name;
        this.weight = weight;
    };
    reset(int: number): void {
        console.log('this is siamese run');
        super.reset(int);
    }
}


var suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

$(document).ready(function () {
    let c1 = new Cat("ordinary cat", 5);
    let c2 = new SiameseCat("siamese cat", 10);
    c1.move();
    c2.reset(2);

    
    let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];

    let pickedCard1 = myDeck[pickCard(myDeck)];
    //alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    let pickedCard2 = pickCard(12);
    //alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
});