import { menuForStudent } from './../View/ViewMenu';
import { inputOptionFunction } from './../View/ValidateInput';
import { StudentManger } from './../Model/StudentManger';
import * as readlineSync from "readline-sync";
import { ChoiceMenuForStudent } from '../../Enum/ChoiceManagerForStudent';

export class StudentController{ 

    static menuStudentController(){ 
        console.clear();
        menuForStudent();
        
        let studentManger = new StudentManger();
        let choice = inputOptionFunction(ChoiceMenuForStudent.ChoiceMin, ChoiceMenuForStudent.ChoiceMax);

        switch(choice){ 
            case ChoiceMenuForStudent.Add:
                studentManger.addStudent();
                let yn: string =  readlineSync.question('Do you want to continue? (y/n): ');

                while (yn != "y" && yn != "Y" && yn != "N" && yn != "n"){
                    console.log('Please select Y/N to continue the program!');
                    yn =  readlineSync.question('Do you want to continue? (y/n): ');
                }

                if (yn === "y" || yn === "Y"){
                    while (yn === "y" || yn === "Y"){
                        studentManger.addStudent();
                        yn =  readlineSync.question('Do you want to continue? (y/n): ');
                        if (yn === "n" || yn === "N"){
                            console.clear();
                            this.menuStudentController();
                        }
                    }
                }else if (yn == "n" || yn == "N"){
                    console.clear();
                    this.menuStudentController();
                }

                break;
            case ChoiceMenuForStudent.SearchName:
                studentManger.searchByName();
                readlineSync.question();
                console.clear();
                this.menuStudentController();
                break;
            case ChoiceMenuForStudent.SearchGroup:      
                studentManger.searchByGroup();
                readlineSync.question();
                console.clear();
                this.menuStudentController();
                break;
            case ChoiceMenuForStudent.ShowList:
                studentManger.showListStudent();
                readlineSync.question();
                console.clear();
                this.menuStudentController();
                break;
            case ChoiceMenuForStudent.ShowRank:
                studentManger.showRank();
                readlineSync.question();
                console.clear();
                this.menuStudentController();
                break;
            case ChoiceMenuForStudent.Exit:
                process.exit();
                break;
        }
    }
}