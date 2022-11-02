"use strict";
exports.__esModule = true;
exports.menuCreate = exports.menuShow = exports.menuDetele = exports.menuUpdateInfoStudent = exports.menuManagementFeatures = exports.menuForStudent = void 0;
function menuForStudent() {
    console.log("========================================");
    console.log("---------- STUDENT MANAGEMENT ----------");
    console.log("  STUDENT LIST MANAGEMENT");
    console.log("========================================");
    console.log("  1. ADD STUDENT");
    console.log("  2. SEARCH BY NAME");
    console.log("  3. SEARCH BY GROUP");
    console.log("  4. SHOW ALL STUDENT");
    console.log("  5. SHOW RANK");
    console.log("  6. Exit");
}
exports.menuForStudent = menuForStudent;
function menuManagementFeatures() {
    console.log("==================================");
    console.log("  MANAGEMENT FEATURES");
    console.log("==================================");
    console.log("  1. Update");
    console.log("  2. Delete");
    console.log("  3. Back to");
    console.log("==================================");
}
exports.menuManagementFeatures = menuManagementFeatures;
function menuUpdateInfoStudent() {
}
exports.menuUpdateInfoStudent = menuUpdateInfoStudent;
function menuDetele(printConsole) {
    console.log('========================================');
    console.log("  DELETE ".concat(String(printConsole).toUpperCase()));
    console.log('========================================');
}
exports.menuDetele = menuDetele;
function menuShow(printConsole) {
    console.log("========================================");
    console.log("  SHOW ".concat(String(printConsole).toUpperCase()));
}
exports.menuShow = menuShow;
function menuCreate(printConsole) {
    console.log("========================================");
    console.log("  NEW ".concat(String(printConsole).toUpperCase()));
    console.log("========================================");
}
exports.menuCreate = menuCreate;
