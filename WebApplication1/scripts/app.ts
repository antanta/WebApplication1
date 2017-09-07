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

$(document).ready(function () {
    let c1 = new Cat("ordinary cat", 5);
    let c2 = new SiameseCat("siamese cat", 10);

    c1.move();
    c2.reset(2);

});