"use strict";
exports.__esModule = true;
exports.Student = void 0;
require("reflect-metadata");
var Student = /** @class */ (function () {
    function Student(id, name, birthday, address, email, phoneNumber, groups, scoreHK1, scoreHK2) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.groups = groups;
        this.scoreHK1 = scoreHK1;
        this.scoreHK2 = scoreHK2;
    }
    Student.prototype.setID = function (id) {
        this.id = id;
    };
    Student.prototype.getID = function () {
        return this.id;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Student.prototype.getBirthday = function () {
        return this.birthday;
    };
    Student.prototype.setAddress = function (address) {
        this.address = address;
    };
    Student.prototype.getAddress = function () {
        return this.address;
    };
    Student.prototype.setEmail = function (email) {
        this.email = email;
    };
    Student.prototype.getEmail = function () {
        return this.email;
    };
    Student.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Student.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Student.prototype.setGroups = function (groups) {
        this.groups = groups;
    };
    Student.prototype.getGroups = function () {
        return this.groups;
    };
    Student.prototype.setScoreHK1 = function (scoreHK1) {
        this.scoreHK1 = scoreHK1;
    };
    Student.prototype.getScoreHK1 = function () {
        return this.scoreHK1;
    };
    Student.prototype.setScoreHK2 = function (scoreHK2) {
        this.scoreHK2 = scoreHK2;
    };
    Student.prototype.getScoreHK2 = function () {
        return this.scoreHK2;
    };
    Student.prototype.averageScore = function () {
        return Math.floor((this.getScoreHK1() + this.getScoreHK2()) / 2);
    };
    return Student;
}());
exports.Student = Student;
