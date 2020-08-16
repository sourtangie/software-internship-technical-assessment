"use strict";
import * as readline from 'readline';
import {luhnChecker} from "./luhn";

const errorCode: number = 42;
const successCode: number = 0;

let stdInOut = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

stdInOut.question("Please Input a Credit Card Number \n", (answer) => {
    let cleanCreditNumber: string = answer.replace(/\s/g, "");
    const hasNonDigits: RegExp = /\D/g;

    if (cleanCreditNumber.length <= 1 || hasNonDigits.test(cleanCreditNumber) == true) {
        console.log("Invalid Credit Card Number! Exiting with code " + errorCode);
        process.exit(errorCode);
    } else {
        if (luhnChecker(cleanCreditNumber) === 0) {
            console.log("Valid Number, Congratulations! Exiting with code " + successCode);
            process.exit(successCode);
        } else {
            console.log("Number did not pass Luhn Evaluation, exiting with code " + errorCode)
        }
        stdInOut.close();
    }
});