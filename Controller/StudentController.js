"use strict";
exports.__esModule = true;
exports.StudentController = void 0;
var ViewMenu_1 = require("./../View/ViewMenu");
var ValidateInput_1 = require("./../View/ValidateInput");
var StudentManger_1 = require("./../Model/StudentManger");
var readlineSync = require("readline-sync");
var ChoiceManagerForStudent_1 = require("../../Enum/ChoiceManagerForStudent");
var StudentController = /** @class */ (function () {
    function StudentController() {
    }
    StudentController.menuStudentController = function () {
        console.clear();
        (0, ViewMenu_1.menuForStudent)();
        var studentManger = new StudentManger_1.StudentManger();
        var choice = (0, ValidateInput_1.inputOptionFunction)(ChoiceManagerForStudent_1.ChoiceMenuForStudent.ChoiceMin, ChoiceManagerForStudent_1.ChoiceMenuForStudent.ChoiceMax);
        switch (choice) {
            case ChoiceManagerForStudent_1.ChoiceMenuForStudent.Add:
                studentManger.addStudent();
                var yn = readlineSync.question('Do you want to continue? (y/n): ');
                while (yn != "y" && yn != "Y" && yn != "N" && yn != "n") {
                    console.log('Please select Y/N to continue the program!');
                    yn = readlineSync.question('Do you want to continue? (y/n): ');
                }
                if (yn === "y" || yn === "Y") {
                    while (yn === "y" || yn === "Y") {
                        studentManger.addStudent();
                        yn = readlineSync.question('Do you want to continue? (y/n): ');
                        if (yn === "n" || yn === "N") {
                            console.clear();
                            this.menuStudentController();
                        }
                    }
                }
                else if (yn == "n" || yn == "N") {
                    console.clear();
                    this.menuStudentController();
                }
                break;
            case ChoiceManagerForStudent_1.ChoiceMenuForStudent.SearchName:
                studentManger.searchByName();
                readlineSync.question();
                console.clear();
                this.menuStudentController();
                break;
            case ChoiceManagerForStudent_1.ChoiceMenuForStudent.SearchGroup:
                studentManger.searchByGroup();
                readlineSync.question();
                console.clear();
                this.menuStudentController();
                break;
            case ChoiceManagerForStudent_1.ChoiceMenuForStudent.ShowList:
                studentManger.showListStudent();
                readlineSync.question();
                console.clear();
                this.menuStudentController();
                break;
            case ChoiceManagerForStudent_1.ChoiceMenuForStudent.ShowRank:
                studentManger.showRank();
                readlineSync.question();
                console.clear();
                this.menuStudentController();
                break;
            case ChoiceManagerForStudent_1.ChoiceMenuForStudent.Exit:
                process.exit();
                break;
        }
    };
    return StudentController;
}());
exports.StudentController = StudentController;
