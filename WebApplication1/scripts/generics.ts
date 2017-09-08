/// <reference path ="../scripts/typings/jquery/jquery.d.ts"/> 

/* Generic functions */
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

/* Generic classes */

class MetaNumber {
    constructor(number: number, presicion: number) {
        this.number = number;
        this.presicision = presicion;
    }
    number: number;
    presicision: number;
}

class DerivedMetaNumber extends MetaNumber {
    constructor(number: number, presicion: number) {
        super(number, presicion);
    }
    set: number;
}

interface GenericNumber<T extends MetaNumber> {
    zeroValue: number;
    add(x: new () => T, y: new () => T): T;
    substract(x: new () => T, y: new () => T): T;
}

abstract class SpecificNumber<T extends MetaNumber> implements GenericNumber<T> {
    zeroValue: number;
    add(x: new () => T, y: new () => T): T {
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
    abstract substract(x: new () => T, y: new () => T): T;
    abstract multuply(x: T, y: T): T;
    abstract divide(x: T, y: T): T;
}

class RealNumber extends SpecificNumber<DerivedMetaNumber> {
    constructor(zeroValue: number = 0) {
        super();
        this.zeroValue = zeroValue;
    };

    substract(x: new () => DerivedMetaNumber, y: new () => DerivedMetaNumber): DerivedMetaNumber {
        throw Error("Not implemented");
    };
    multuply(x: DerivedMetaNumber, y: DerivedMetaNumber): DerivedMetaNumber {
        throw Error("Not implemented");
    }
    divide(x: DerivedMetaNumber, y: DerivedMetaNumber): DerivedMetaNumber {
        throw Error("Not implemented");
    }
}

$(document).ready(function () {
    //myIdentity()  
    let tt: number = identity<number>(1);
    //alert(`number is ${tt}`);
});