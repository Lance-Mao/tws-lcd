'use strict'

let stringsStyles = {
    0: ["._.", "|.|", "|_|"],
    1: ["...", "..|", "..|"],
    2: ["._.", "._|", "|_."],
    3: ["._.", "._|", "._|"],
    4: ["...", "|_|", "..|"],
    5: ["._.", "|_.", "._|"],
    6: ["._.", "|_.", "|_|"],
    7: ["._.", "..|", "..|"],
    8: ["._.", "|_|", "|_|"],
    9: ["._.", "|_|", "..|"]
}

function splitNum(number) {
    return number.split('');
}


function matchingStyle(numbers, stringsStyle) {
    let stringSet = [];

    for (let i = 0; i < 3; i++) {
        let string = numbers.reduce((str, item) => {
            str += `${stringsStyle[item][i]} `;
            return str;
        }, '');
        stringSet.push(`${string.substring(0, string.length - 1)}\n`);
    }

    return stringSet;
}

function printDigit(stringSet) {

    return stringSet.reduce((pString, cString) => {
        pString += cString;
        return pString;
    })
}


function lcd(number) {
    let stringsStyle = stringsStyles;

    let numbers = splitNum(number);
    let stringSet = matchingStyle(numbers, stringsStyle);
    console.log(printDigit(stringSet));

}

exports.lcd = lcd;

