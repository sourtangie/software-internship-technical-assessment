"use strict";

export function luhnChecker(inputStr: string) {
    let length: number = inputStr.length;
    let sum: number = 0;
    let odd: boolean = false;
    let currentDigit: number = 0;
    let divideBy: number = 10;
    let success: number = 0;
    let fail: number = 1;

    for (let i: number = (length - 1); i >= 0; i--) {
        currentDigit = parseInt(inputStr[i], 10) | 0;

        if (odd === true) {
            currentDigit = currentDigit * 2 | 0;
        }
        if (currentDigit > 9) {
            currentDigit = currentDigit - 9;
        }
        odd = !odd;
        sum += currentDigit;
    }
    let divisionCheck: number = sum % divideBy;
    if (divisionCheck === 0) {
        return success;
    }
    return fail;

}