"use strict";
exports.__esModule = true;
exports.StudentManger = void 0;
var Student_1 = require("./Student");
var console_table_printer_1 = require("console-table-printer");
var readLineSync = require("readline-sync");
var ValidateInput_1 = require("../View/ValidateInput");
var ViewMenu_1 = require("./../View/ViewMenu");
var StudentController_1 = require("./../Controller/StudentController");
var ChoiceManagerForStudent_1 = require("../../Enum/ChoiceManagerForStudent");
var StudentManger = /** @class */ (function () {
    function StudentManger() {
    }
    StudentManger.getListStudent = function () {
        return StudentManger.listStudent;
    };
    StudentManger.prototype.addStudent = function () {
        var printConsole = 'student';
        (0, ViewMenu_1.menuCreate)(printConsole);
        var nameStudent = '';
        var nameStudentConsole = 'name student';
        nameStudent = (0, ValidateInput_1.checkInputFormatName)(nameStudent, nameStudentConsole);
        var birthDayStudent = '';
        var birthDayStudentConsole = 'birth day student';
        birthDayStudent = (0, ValidateInput_1.checkInputFormatBirthDay)(birthDayStudent, birthDayStudentConsole);
        var addressStudent = '';
        var addressStudentConsole = 'address student';
        addressStudent = (0, ValidateInput_1.checkInputFormatAddress)(addressStudent, addressStudentConsole);
        var emailStudent = '';
        var emailStudentConsole = 'email student';
        emailStudent = (0, ValidateInput_1.checkInputFormatEmail)(emailStudent, emailStudentConsole);
        var phoneNumberStudent = '';
        var phoneNumberConsole = 'phone number student';
        phoneNumberStudent = (0, ValidateInput_1.checkInputFormatPhoneNumber)(phoneNumberStudent, phoneNumberConsole);
        var groupsStudent = '';
        var groupsStudentConsole = 'groups student';
        groupsStudent = (0, ValidateInput_1.checkInputNotNull)(groupsStudent, groupsStudentConsole);
        var score1 = '';
        var scoreHK1Console = 'semester exam score I';
        var scoreHK1 = (0, ValidateInput_1.checkInputFormatScore)(score1, scoreHK1Console);
        var score2 = '';
        var scoreHK2Console = 'semester exam score II';
        var scoreHK2 = (0, ValidateInput_1.checkInputFormatScore)(score2, scoreHK2Console);
        var id = Math.random().toString(36).substr(2, 5);
        var student = new Student_1.Student(id, nameStudent, birthDayStudent, addressStudent, emailStudent, phoneNumberStudent, groupsStudent, scoreHK1, scoreHK2);
        StudentManger.listStudent.push(student);
        StudentManger.listStudent.sort(function (a, b) { return (a.getName() > b.getName()) ? 1 : -1; });
        console.log("  Successfully inserted a student!");
    };
    StudentManger.prototype.showListStudent = function () {
        var printConsole = 'list student';
        (0, ViewMenu_1.menuShow)(printConsole);
        if (StudentManger.listStudent.length > 0) {
            StudentManger.listStudent.sort(function (a, b) { return (a.getName() > b.getName()) ? 1 : -1; });
            this.printDataTable(StudentManger.listStudent);
            this.totalStudent();
            var printConsole_1 = "Input ID to view Details or Input 0 back to menu: ";
            var id = (0, ValidateInput_1.searchInfo)(printConsole_1);
            this.searchStudentInfo(id, StudentManger.listStudent);
        }
        else {
            console.log('Student list is empty!');
        }
    };
    StudentManger.prototype.totalStudent = function () {
        console.log("Total students : ".concat(StudentManger.listStudent.length));
    };
    StudentManger.prototype.showRank = function () {
        var printConsole = 'rank student';
        (0, ViewMenu_1.menuShow)(printConsole);
        if (StudentManger.listStudent.length > 0) {
            var resultList = StudentManger.listStudent;
            resultList.sort(function (a, b) { return (a.averageScore() > b.averageScore()) ? 1 : -1; });
            this.printDataTable(resultList);
            this.totalStudent();
        }
        else {
            console.log('Student list is empty!');
        }
    };
    StudentManger.prototype.searchByName = function () {
        var printConsole = 'Input is the keyword to search for name student: ';
        var keyword = (0, ValidateInput_1.searchInfo)(printConsole);
        if (StudentManger.listStudent.length > 0) {
            var list = StudentManger.listStudent;
            list.sort(function (a, b) { return (a.averageScore() > b.averageScore()) ? 1 : -1; });
            var resultList = list.filter(function (student) { return student.getName().includes(keyword); });
            if (resultList.length > 0) {
                this.printDataTable(resultList);
                var printConsole_2 = "Input ID to view Details or Input 0 back to menu: ";
                var id = (0, ValidateInput_1.searchInfo)(printConsole_2);
                this.searchStudentInfo(id, resultList);
            }
            else {
                console.log('Student list is empty!');
            }
        }
        else {
            console.log('Student list is empty!');
        }
    };
    StudentManger.prototype.searchByGroup = function () {
        var printConsole = 'Input is the keyword to search for group student: ';
        var keyword = (0, ValidateInput_1.searchInfo)(printConsole);
        if (StudentManger.listStudent.length > 0) {
            var list = StudentManger.listStudent;
            list.sort(function (a, b) { return (a.getGroups() > b.getGroups()) ? 1 : -1; });
            var resultList = list.filter(function (student) { return student.getGroups() === keyword; });
            if (resultList.length > 0) {
                this.printDataTable(resultList);
                var printConsole_3 = "Input ID to view Details or Input 0 back to menu: ";
                var id = (0, ValidateInput_1.searchInfo)(printConsole_3);
                this.searchStudentInfo(id, resultList);
            }
            else {
                console.log('Student list is empty!');
            }
        }
        else {
            console.log('Student list is empty!');
        }
    };
    StudentManger.prototype.printDataTable = function (list) {
        var table = new console_table_printer_1.Table();
        for (var i = 0; i < list.length; i++) {
            table.addRow({
                Index: list.indexOf(list[i]) + 1,
                ID: list[i].getID(),
                Name: list[i].getName(),
                BirthDay: list[i].getBirthday(),
                Address: list[i].getAddress(),
                Email: list[i].getEmail(),
                PhoneNumber: list[i].getPhoneNumber(),
                Groups: list[i].getGroups(),
                HK1: list[i].getScoreHK1(),
                HK2: list[i].getScoreHK2()
            });
        }
        table.printTable();
    };
    StudentManger.prototype.searchStudentInfo = function (id, list) {
        var _this = this;
        var found = false;
        list.find(function (student) {
            if (student.getID() === id) {
                _this.featureStudent(student);
                found = true;
            }
        });
        if (!found && Number(id) !== 0) {
            console.log('Student ID not found!');
        }
    };
    StudentManger.prototype.featureStudent = function (student) {
        (0, ViewMenu_1.menuManagementFeatures)();
        var choice = (0, ValidateInput_1.inputFeaturesStudent)();
        switch (choice) {
            case ChoiceManagerForStudent_1.ChoiceFeatureStudent.Update:
                this.updateInfoStudent(student);
                console.clear();
                readLineSync.question();
                StudentController_1.StudentController.menuStudentController();
                break;
            case ChoiceManagerForStudent_1.ChoiceFeatureStudent.Delete:
                this.deleteStudent(student);
                readLineSync.question();
                console.clear();
                StudentController_1.StudentController.menuStudentController();
                break;
            case ChoiceManagerForStudent_1.ChoiceFeatureStudent.BackTo:
                readLineSync.question();
                console.clear();
                StudentController_1.StudentController.menuStudentController();
                break;
        }
    };
    StudentManger.prototype.deleteStudent = function (student) {
        var printConsole = 'student';
        (0, ViewMenu_1.menuDetele)(printConsole);
        console.log(" Successfully deleted student with Id: ".concat(student.getID()));
        StudentManger.listStudent.splice(StudentManger.listStudent.indexOf(student), 1);
    };
    StudentManger.prototype.updateInfoStudent = function (student) {
        var choice = 0;
        console.log("========================================");
        console.log("  UPDATE STUDENT INFORMATION");
        console.log("========================================");
        console.log("  1. Update Name");
        console.log("  2. Update Birthday");
        console.log("  3. Update Address");
        console.log("  4. Update Email");
        console.log("  5. Update phoneNumber");
        console.log("  6. Update Groups");
        console.log("  7. Update HK1");
        console.log("  8. Update HK2");
        console.log("  9. Back to ");
        console.log("========================================");
        while (choice !== ChoiceManagerForStudent_1.ChoiceUpdateForStudent.BackTo) {
            var choice_1 = (0, ValidateInput_1.inputOptionFunction)(ChoiceManagerForStudent_1.ChoiceUpdateForStudent.ChoiceUpdateMin, ChoiceManagerForStudent_1.ChoiceUpdateForStudent.ChoiceUpdateMax);
            switch (choice_1) {
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.UpdateName:
                    console.log("  First Name old: " + student.getName());
                    var nameStudent = '';
                    var nameStudentConsole = 'name student new';
                    student.setName((0, ValidateInput_1.checkInputFormatName)(nameStudent, nameStudentConsole));
                    console.log(' Update successful!');
                    break;
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.UpdateBirthday:
                    console.log("  First Birthday old: " + student.getBirthday());
                    var birthdayStudent = '';
                    var birthdayStudentConsole = 'birthday student new';
                    student.setBirthday((0, ValidateInput_1.checkInputFormatBirthDay)(birthdayStudent, birthdayStudentConsole));
                    console.log('  Update successful!');
                    break;
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.UpdateAddress:
                    console.log("  First Address old: " + student.getAddress());
                    var addressStudent = '';
                    var addressStudentConsole = 'address student new';
                    student.setAddress((0, ValidateInput_1.checkInputFormatAddress)(addressStudent, addressStudentConsole));
                    console.log('  Update successful!');
                    break;
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.UpdateEmail:
                    console.log("  First Email old: " + student.getEmail());
                    var emailStudent = '';
                    var emailStudentConsole = 'email student new';
                    student.setEmail((0, ValidateInput_1.checkInputFormatEmail)(emailStudent, emailStudentConsole));
                    console.log('  Update successful!');
                    break;
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.UpdatePhoneNumber:
                    console.log(" First Phone Number old: " + student.getPhoneNumber());
                    var phoneNumberStudent = '';
                    var phoneNumberStudentConsole = 'phone number student new';
                    student.setPhoneNumber((0, ValidateInput_1.checkInputFormatPhoneNumber)(phoneNumberStudent, phoneNumberStudentConsole));
                    console.log('  Update successful!');
                    break;
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.UpdateGroup:
                    console.log("  Groups Name old: " + student.getGroups());
                    var groupsStudent = '';
                    var groupsStudentConsole = 'groups student new';
                    student.setGroups((0, ValidateInput_1.checkInputNotNull)(groupsStudent, groupsStudentConsole));
                    console.log('  Update successful!');
                    break;
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.UpdateHK1:
                    console.log("  Semester exam score I old: " + student.getScoreHK1());
                    var score1 = '';
                    var scoreHK1Console = 'semester exam score I new';
                    student.setScoreHK1((0, ValidateInput_1.checkInputFormatScore)(score1, scoreHK1Console));
                    console.log('  Update successful!');
                    break;
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.UpdateHK2:
                    console.log("  Semester exam score II old: " + student.getScoreHK1());
                    var score2 = '';
                    var scoreHK2Console = 'semester exam score II new';
                    student.setScoreHK1((0, ValidateInput_1.checkInputFormatScore)(score2, scoreHK2Console));
                    console.log('  Update successful!');
                    break;
                case ChoiceManagerForStudent_1.ChoiceUpdateForStudent.BackTo:
                    this.featureStudent(student);
                    break;
            }
        }
    };
    StudentManger.listStudent = [];
    return StudentManger;
}());
exports.StudentManger = StudentManger;
