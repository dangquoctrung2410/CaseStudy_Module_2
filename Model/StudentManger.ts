import { Student } from "./Student";
import { Table } from "console-table-printer";
import * as readLineSync from "readline-sync";
import { checkInputNotNull, inputOptionFunction, searchInfo, inputFeaturesStudent , checkInputFormatScore, checkInputFormatName, checkInputFormatAddress, checkInputFormatEmail,checkInputFormatBirthDay, checkInputFormatPhoneNumber} from "../View/ValidateInput";
import { menuCreate, menuDetele, menuManagementFeatures, menuShow } from "./../View/ViewMenu";
import { StudentController } from "./../Controller/StudentController";
import { ChoiceFeatureStudent, ChoiceUpdateForStudent } from "../../Enum/ChoiceManagerForStudent";

export class StudentManger {

    private static listStudent: Student[] = [];

    static getListStudent() {
        return StudentManger.listStudent;
    }

    addStudent(): void {

        let printConsole: string = 'student';
        menuCreate(printConsole);

        let nameStudent: string = '';
        let nameStudentConsole = 'name student';
        nameStudent = checkInputFormatName(nameStudent, nameStudentConsole);

        let birthDayStudent: string = '';
        let birthDayStudentConsole = 'birth day student';
        birthDayStudent = checkInputFormatBirthDay(birthDayStudent, birthDayStudentConsole);

        let addressStudent: string = '';
        let addressStudentConsole = 'address student';
        addressStudent = checkInputFormatAddress(addressStudent, addressStudentConsole);

        let emailStudent: string = '';
        let emailStudentConsole = 'email student';
        emailStudent = checkInputFormatEmail(emailStudent, emailStudentConsole);

        let phoneNumberStudent: string = '';
        let phoneNumberConsole: string = 'phone number student';
        phoneNumberStudent = checkInputFormatPhoneNumber(phoneNumberStudent, phoneNumberConsole);

        let groupsStudent: string = '';
        let groupsStudentConsole = 'groups student';
        groupsStudent = checkInputNotNull(groupsStudent, groupsStudentConsole);

        let score1: string = '';
        let scoreHK1Console: string = 'semester exam score I';
        let scoreHK1: number = checkInputFormatScore(score1, scoreHK1Console);

        let score2: string = '';
        let scoreHK2Console: string = 'semester exam score II';
        let scoreHK2: number = checkInputFormatScore(score2, scoreHK2Console);

        let id: string = Math.random().toString(36).substr(2, 5);

        let student = new Student(id, nameStudent, birthDayStudent, addressStudent, emailStudent, phoneNumberStudent, groupsStudent, scoreHK1, scoreHK2);

        
        StudentManger.listStudent.push(student);

        StudentManger.listStudent.sort((a, b) => (a.getName() > b.getName()) ? 1 : -1);

        

        console.log("  Successfully inserted a student!");

    }

    showListStudent(): void {

        let printConsole: string = 'list student';
        menuShow(printConsole);

        if (StudentManger.listStudent.length > 0) {

            StudentManger.listStudent.sort((a, b) => (a.getName() > b.getName()) ? 1 : -1);

            this.printDataTable(StudentManger.listStudent);

            this.totalStudent();

            let printConsole: string = "Input ID to view Details or Input 0 back to menu: ";
            let id: string = searchInfo(printConsole);
            this.searchStudentInfo(id, StudentManger.listStudent);

        } else {
            console.log('Student list is empty!');
        }

    }

    totalStudent(): void {
        console.log(`Total students : ${StudentManger.listStudent.length}`);
    }

    showRank(): void {

        let printConsole: string = 'rank student';
        menuShow(printConsole);

        if (StudentManger.listStudent.length > 0) {

            let resultList: Student[] = StudentManger.listStudent;

            resultList.sort((a, b) => (a.averageScore() > b.averageScore()) ? 1 : -1);

            this.printDataTable(resultList);

            this.totalStudent();

        } else {
            console.log('Student list is empty!');
        }

    }

    searchByName(): void {

        let printConsole: string = 'Input is the keyword to search for name student: ';
        let keyword: string = searchInfo(printConsole);

        if (StudentManger.listStudent.length > 0) {

            let list: Student[] = StudentManger.listStudent;

            list.sort((a, b) => (a.averageScore() > b.averageScore()) ? 1 : -1);

            let resultList: Student[] = list.filter(student => student.getName().includes(keyword));

            if (resultList.length > 0) {

                this.printDataTable(resultList);

                let printConsole: string = "Input ID to view Details or Input 0 back to menu: ";
                let id: string = searchInfo(printConsole);
                this.searchStudentInfo(id, resultList);

            } else {
                console.log('Student list is empty!');
            }

        } else {
            console.log('Student list is empty!');
        }

    }

    searchByGroup(): void {

        let printConsole: string = 'Input is the keyword to search for group student: ';
        let keyword: string = searchInfo(printConsole);

        if (StudentManger.listStudent.length > 0) {

            let list: Student[] = StudentManger.listStudent;

            list.sort((a, b) => (a.getGroups() > b.getGroups()) ? 1 : -1);

            let resultList: Student[] = list.filter(student => student.getGroups() === keyword);

            if (resultList.length > 0) {

                this.printDataTable(resultList);

                let printConsole: string = "Input ID to view Details or Input 0 back to menu: ";
                let id: string = searchInfo(printConsole);
                this.searchStudentInfo(id, resultList);

            } else {
                console.log('Student list is empty!');
            }

        } else {
            console.log('Student list is empty!');
        }

    }

    printDataTable(list: Student[]): void {

        let table = new Table();

        for (let i = 0; i < list.length; i++) {
            table.addRow({
                Index: list.indexOf(list[i]) + 1,
                ID: list[i].getID(),
                Name: list[i].getName(),
                BirthDay : list[i].getBirthday(),
                Address: list[i].getAddress(),
                Email: list[i].getEmail(),
                PhoneNumber: list[i].getPhoneNumber(),
                Groups: list[i].getGroups(),
                HK1: list[i].getScoreHK1(),
                HK2: list[i].getScoreHK2(),
            });
        }

        table.printTable();

    }

    searchStudentInfo(id: string, list: Student[]): void {

        let found: boolean = false;

        list.find(student => {

            if (student.getID() === id) {
                this.featureStudent(student);
                found = true;
            }

        });

        if (!found && Number(id) !== 0) {
            console.log('Student ID not found!');
        }

    }

    featureStudent(student: Student): void {

        menuManagementFeatures();

        let choice = inputFeaturesStudent();

        switch (choice) {

            case ChoiceFeatureStudent.Update:
                this.updateInfoStudent(student);
                console.clear();
                readLineSync.question();
                StudentController.menuStudentController();
                break;
            case ChoiceFeatureStudent.Delete:
                this.deleteStudent(student);
                readLineSync.question();
                console.clear();
                StudentController.menuStudentController();
                break;
            case ChoiceFeatureStudent.BackTo:
                readLineSync.question();
                console.clear();
                StudentController.menuStudentController();
                break;

        }
    }

    deleteStudent(student: Student): void {

        let printConsole: string = 'student';
        menuDetele(printConsole);
        console.log(` Successfully deleted student with Id: ${student.getID()}`);
        StudentManger.listStudent.splice(StudentManger.listStudent.indexOf(student), 1);
        

    }

    updateInfoStudent(student: Student): void {

        let choice: number = 0;

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

    
        while (choice !== ChoiceUpdateForStudent.BackTo) {

            let choice: number = inputOptionFunction(ChoiceUpdateForStudent.ChoiceUpdateMin, ChoiceUpdateForStudent.ChoiceUpdateMax);

            switch (choice) {
                case ChoiceUpdateForStudent.UpdateName:
                    console.log("  First Name old: " + student.getName());
                    let nameStudent: string = '';
                    let nameStudentConsole = 'name student new';
                    student.setName(checkInputFormatName(nameStudent, nameStudentConsole));
                    
                    console.log(' Update successful!');
                    break;
                case ChoiceUpdateForStudent.UpdateBirthday:
                    console.log("  First Birthday old: " + student.getBirthday());
                    let birthdayStudent: string = '';
                    let birthdayStudentConsole = 'birthday student new';
                    student.setBirthday(checkInputFormatBirthDay(birthdayStudent, birthdayStudentConsole));
                    
                    console.log('  Update successful!');
                    break;
                case ChoiceUpdateForStudent.UpdateAddress:
                    console.log("  First Address old: " + student.getAddress());
                    let addressStudent: string = '';
                    let addressStudentConsole = 'address student new';
                    student.setAddress(checkInputFormatAddress(addressStudent, addressStudentConsole));
                    
                    console.log('  Update successful!');
                    break;
                case ChoiceUpdateForStudent.UpdateEmail:
                    console.log("  First Email old: " + student.getEmail());
                    let emailStudent: string = '';
                    let emailStudentConsole = 'email student new';
                    student.setEmail(checkInputFormatEmail(emailStudent, emailStudentConsole));
                    console.log('  Update successful!');
                    break;
                case ChoiceUpdateForStudent.UpdatePhoneNumber:
                    console.log(" First Phone Number old: " + student.getPhoneNumber());
                    let phoneNumberStudent: string = '';
                    let phoneNumberStudentConsole = 'phone number student new';
                    student.setPhoneNumber(checkInputFormatPhoneNumber(phoneNumberStudent, phoneNumberStudentConsole));
                    console.log('  Update successful!');
                    break;
                case ChoiceUpdateForStudent.UpdateGroup:
                    console.log("  Groups Name old: " + student.getGroups());
                    let groupsStudent: string = '';
                    let groupsStudentConsole = 'groups student new';
                    student.setGroups(checkInputNotNull(groupsStudent, groupsStudentConsole));
                    console.log('  Update successful!');
                    break;
                case ChoiceUpdateForStudent.UpdateHK1:
                    console.log("  Semester exam score I old: " + student.getScoreHK1());
                    let score1: string = '';
                    let scoreHK1Console: string = 'semester exam score I new';
                    student.setScoreHK1(checkInputFormatScore(score1, scoreHK1Console));
                    console.log('  Update successful!');
                    break;
                case ChoiceUpdateForStudent.UpdateHK2:
                    console.log("  Semester exam score II old: " + student.getScoreHK1());
                    let score2: string = '';
                    let scoreHK2Console: string = 'semester exam score II new';
                    student.setScoreHK1(checkInputFormatScore(score2, scoreHK2Console));
                    console.log('  Update successful!');
                    break;
                case ChoiceUpdateForStudent.BackTo:
                    this.featureStudent(student);
                    break;
            }

        }

    }
}

