// Topics:
// Describe and Context
// It and Specify
// Unit testing Demo

const { expect } = require("chai");



// Dummy App

let add = (a,b) => a+b;
let substract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

// Cypress Test
// Describe - Context => Group tests, nest multiple instances.

describe('Unit testing of my dummy app', () =>{
    context('Math with POSITIVE numbers', () =>{
        it('should add positive numbers', () =>{
            expect(add(2,2)).to.eq(4);
        });

        it('should substract positive numbers', () =>{
            expect(substract(4,2)).to.eq(2);
        });

        it('should divide positive numbers', () =>{
            expect(divide(2,2)).to.eq(1);
        });

        it('should multiply positive numbers', () =>{
            expect(multiply(2,2)).to.eq(4);
        });
    });

    describe('Math with DECIMALS numbers', () =>{
        it('should add decimals numbers', () =>{
            expect(add(2.2,2.2)).to.eq(4.4);
        });

        it('should substract decimals numbers', () =>{
            expect(substract(4.2,2.2)).to.eq(2.0);
        });


    });
});