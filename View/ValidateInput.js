"use strict";
exports.__esModule = true;
exports.searchInfo = exports.inputFeaturesStudent = exports.checkInputFormatPhoneNumber = exports.checkInputFormatBirthDay = exports.checkInputFormatEmail = exports.checkInputFormatScore = exports.checkInputFormatAddress = exports.checkInputFormatName = exports.checkInputNotNull = exports.inputOptionFunction = void 0;
var readlineSync = require("readline-sync");
var ChoiceManagerForStudent_1 = require("../../Enum/ChoiceManagerForStudent");
2;
var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
var regexBirthDay = /^(?=\d)^(?:(?!(?:10\D(?:0?[5-9]|1[0-4])\D(?:1582))|(?:0?9\D(?:0?[3-9]|1[0-3])\D(?:1752)))((?:0?[13578]|1[02])|(?:0?[469]|11)(?!\/31)(?!-31)(?!\.31)|(?:0?2(?=.?(?:(?:29.(?!000[04]|(?:(?:1[^0-6]|[2468][^048]|[3579][^26])00))(?:(?:(?:\d\d)(?:[02468][048]|[13579][26])(?!\x20BC))|(?:00(?:42|3[0369]|2[147]|1[258]|09)\x20BC))))))|(?:0?2(?=.(?:(?:\d\D)|(?:[01]\d)|(?:2[0-8])))))([-.\/])(0?[1-9]|[12]\d|3[01])\2(?!0000)((?=(?:00(?:4[0-5]|[0-3]?\d)\x20BC)|(?:\d{4}(?!\x20BC)))\d{4}(?:\x20BC)?)(?:$|(?=\x20\d)\x20))?((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})?$/g; ///g;
var regexPhoneNumber = /^(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
var regexName = /^^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
var regexAddress = /^^[a-zA-Z0-9\s,'-]*$/g;
function inputOptionFunction(choiceMin, choiceMax) {
    var choice = readlineSync.questionInt(" #YOUR CHOICE:  ", {
        min: choiceMin,
        max: choiceMax,
        limitMessage: "Input valid number, please."
    });
    while (choice < choiceMin || choice > choiceMax) {
        choice = readlineSync.questionInt("Please, input option ".concat(choiceMin, "-").concat(choiceMax, ":  "), {
            min: choiceMin,
            max: choiceMax,
            limitMessage: "Input valid number, please."
        });
    }
    return choice;
}
exports.inputOptionFunction = inputOptionFunction;
function checkInputNotNull(dataInput, printConsole) {
    dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
    while (dataInput.trim() === '') {
        console.log("Enter ".concat(printConsole, " not null!"));
        dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
    }
    return dataInput;
}
exports.checkInputNotNull = checkInputNotNull;
function checkInputFormatName(dataInput, printConsole) {
    dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
    if (dataInput.trim() !== '' && regexName.test(dataInput)) {
        return dataInput;
    }
    while (dataInput.trim() === '' || !regexName.test(dataInput)) {
        if (dataInput.trim() === '') {
            console.log("Enter ".concat(printConsole, " not null!"));
        }
        else if (!regexName.test(dataInput)) {
            console.log("  Invalid ".concat(printConsole, "!"));
        }
        dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
        if (dataInput.trim() !== '' && regexName.test(dataInput)) {
            return dataInput;
        }
    }
    return dataInput;
}
exports.checkInputFormatName = checkInputFormatName;
function checkInputFormatAddress(dataInput, printConsole) {
    dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
    if (dataInput.trim() !== '' && regexAddress.test(dataInput)) {
        return dataInput;
    }
    while (dataInput.trim() === '' || !regexAddress.test(dataInput)) {
        if (dataInput.trim() === '') {
            console.log("Enter ".concat(printConsole, " not null!"));
        }
        else if (!regexAddress.test(dataInput)) {
            console.log("  Invalid ".concat(printConsole, "!"));
        }
        dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
        if (dataInput.trim() !== '' && regexAddress.test(dataInput)) {
            return dataInput;
        }
    }
    return dataInput;
}
exports.checkInputFormatAddress = checkInputFormatAddress;
function checkInputFormatScore(dataInput, printConsole) {
    var data = parseFloat(dataInput);
    if (data < 0 || data > 10 || Number.isNaN(data)) {
        data = readlineSync.questionFloat("  Enter ".concat(printConsole, ": "), {
            min: 0,
            max: 10
        });
    }
    while (data < 0 || data > 10) {
        console.log("Enter ".concat(printConsole, " illegal!"));
        data = readlineSync.questionFloat("  Enter ".concat(printConsole, ": "), {
            min: 0,
            max: 10
        });
    }
    return data;
}
exports.checkInputFormatScore = checkInputFormatScore;
function checkInputFormatEmail(dataInput, printConsole) {
    dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
    if (dataInput.trim() !== '' && regexEmail.test(dataInput)) {
        return dataInput;
    }
    while (dataInput.trim() === '' || !regexEmail.test(dataInput)) {
        if (dataInput.trim() === '') {
            console.log("Enter ".concat(printConsole, " not null!"));
        }
        else if (!regexEmail.test(dataInput)) {
            console.log("  Invalid ".concat(printConsole, "!"));
        }
        dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
        if (dataInput.trim() !== '' && regexEmail.test(dataInput)) {
            return dataInput;
        }
    }
    return dataInput;
}
exports.checkInputFormatEmail = checkInputFormatEmail;
function checkInputFormatBirthDay(dataInput, printConsole) {
    dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
    if (dataInput.trim() !== '' && regexBirthDay.test(dataInput)) {
        return dataInput;
    }
    while (dataInput.trim() === '' || !regexBirthDay.test(dataInput)) {
        if (dataInput.trim() === '') {
            console.log("Enter ".concat(printConsole, " not null!"));
        }
        else if (!regexBirthDay.test(dataInput)) {
            console.log("  Invalid ".concat(printConsole, "( mm / dd / yyyy )!"));
        }
        dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
        if (dataInput.trim() !== '' && regexBirthDay.test(dataInput)) {
            return dataInput;
        }
    }
    return dataInput;
}
exports.checkInputFormatBirthDay = checkInputFormatBirthDay;
function checkInputFormatPhoneNumber(dataInput, printConsole) {
    dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
    if (dataInput.trim() !== '' && regexPhoneNumber.test(dataInput)) {
        return dataInput;
    }
    while (dataInput.trim() === '' || !regexPhoneNumber.test(dataInput)) {
        if (dataInput.trim() === '') {
            console.log("Enter ".concat(printConsole, " not null!"));
        }
        else if (!regexPhoneNumber.test(dataInput)) {
            console.log("  Invalid ".concat(printConsole, "!"));
        }
        dataInput = readlineSync.question("  Enter ".concat(printConsole, ": "));
        if (dataInput.trim() !== '' && regexPhoneNumber.test(dataInput)) {
            return dataInput;
        }
    }
    return dataInput;
}
exports.checkInputFormatPhoneNumber = checkInputFormatPhoneNumber;
function inputFeaturesStudent() {
    var choice = readlineSync.questionInt(" #YOUR CHOICE:  ", {
        min: ChoiceManagerForStudent_1.ChoiceFeatureStudent.ChoiceMin,
        max: ChoiceManagerForStudent_1.ChoiceFeatureStudent.ChoiceMax,
        limitMessage: "Input valid number, please."
    });
    while (choice < ChoiceManagerForStudent_1.ChoiceFeatureStudent.ChoiceMin || choice > ChoiceManagerForStudent_1.ChoiceFeatureStudent.ChoiceMax) {
        choice = readlineSync.questionInt("Please, input option ".concat(ChoiceManagerForStudent_1.ChoiceFeatureStudent.ChoiceMin, "-").concat(ChoiceManagerForStudent_1.ChoiceFeatureStudent.ChoiceMax, ":  "), {
            min: ChoiceManagerForStudent_1.ChoiceFeatureStudent.ChoiceMin,
            max: ChoiceManagerForStudent_1.ChoiceFeatureStudent.ChoiceMax,
            limitMessage: "Input valid number, please."
        });
    }
    return choice;
}
exports.inputFeaturesStudent = inputFeaturesStudent;
function searchInfo(printConsole) {
    console.log("========================================");
    var keyword = readlineSync.question("".concat(printConsole));
    while (keyword.trim() === '') {
        console.log("Please enter again!");
        keyword = readlineSync.question("".concat(printConsole, ": "));
    }
    return keyword;
}
exports.searchInfo = searchInfo;
