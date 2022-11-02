import * as readlineSync from "readline-sync";
import { ChoiceFeatureStudent } from "../../Enum/ChoiceManagerForStudent";
2
const regexEmail: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexBirthDay: RegExp = /^(?=\d)^(?:(?!(?:10\D(?:0?[5-9]|1[0-4])\D(?:1582))|(?:0?9\D(?:0?[3-9]|1[0-3])\D(?:1752)))((?:0?[13578]|1[02])|(?:0?[469]|11)(?!\/31)(?!-31)(?!\.31)|(?:0?2(?=.?(?:(?:29.(?!000[04]|(?:(?:1[^0-6]|[2468][^048]|[3579][^26])00))(?:(?:(?:\d\d)(?:[02468][048]|[13579][26])(?!\x20BC))|(?:00(?:42|3[0369]|2[147]|1[258]|09)\x20BC))))))|(?:0?2(?=.(?:(?:\d\D)|(?:[01]\d)|(?:2[0-8])))))([-.\/])(0?[1-9]|[12]\d|3[01])\2(?!0000)((?=(?:00(?:4[0-5]|[0-3]?\d)\x20BC)|(?:\d{4}(?!\x20BC)))\d{4}(?:\x20BC)?)(?:$|(?=\x20\d)\x20))?((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})?$/g///g;
const regexPhoneNumber: RegExp = /^(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const regexName: RegExp = /^^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
const regexAddress = /^^[a-zA-Z0-9\s,'-]*$/g;

export function inputOptionFunction(choiceMin: number, choiceMax: number) : number{ 
        
    let choice : number =  readlineSync.questionInt(" #YOUR CHOICE:  ", {
        min: choiceMin,
        max: choiceMax,
        limitMessage: "Input valid number, please.",
    });

    while (choice < choiceMin || choice > choiceMax) {
        choice =  readlineSync.questionInt(`Please, input option ${choiceMin}-${choiceMax}:  `, {
            min: choiceMin,
            max: choiceMax,
            limitMessage: "Input valid number, please."
        });
    }

    return choice;

}

export function checkInputNotNull(dataInput: string, printConsole: string): string{

    dataInput = readlineSync.question(`  Enter ${printConsole}: `);

    while (dataInput.trim() === '') {
        console.log(`Enter ${printConsole} not null!`);
        dataInput = readlineSync.question(`  Enter ${printConsole}: `);
    }

    return dataInput;

}

export function checkInputFormatName(dataInput: string, printConsole: string): string{

    dataInput = readlineSync.question(`  Enter ${printConsole}: `);
    
    if (dataInput.trim() !== '' && regexName.test(dataInput)){
        return dataInput;
    }

    while (dataInput.trim() === '' || !regexName.test(dataInput)) {

        if (dataInput.trim() === ''){ 
            console.log(`Enter ${printConsole} not null!`);
        }else if (!regexName.test(dataInput)){
            console.log(`  Invalid ${printConsole}!`);
        }

        dataInput = readlineSync.question(`  Enter ${printConsole}: `);

        if (dataInput.trim() !== '' && regexName.test(dataInput)){
            return dataInput;
        }
    
    }

    return dataInput;
}

export function checkInputFormatAddress(dataInput: string, printConsole: string): string{

    dataInput = readlineSync.question(`  Enter ${printConsole}: `);

    if (dataInput.trim() !== '' && regexAddress.test(dataInput)){
        return dataInput;
    }

    while (dataInput.trim() === '' || !regexAddress.test(dataInput)) {

        if (dataInput.trim() === ''){ 
            console.log(`Enter ${printConsole} not null!`);
        }else if (!regexAddress.test(dataInput)){
            console.log(`  Invalid ${printConsole}!`);
        }

        dataInput = readlineSync.question(`  Enter ${printConsole}: `);

        if (dataInput.trim() !== '' && regexAddress.test(dataInput)){
            return dataInput;
        }
    }

    return dataInput;

}

export function checkInputFormatScore(dataInput: string, printConsole: string): number{

    let data : number= parseFloat(dataInput);
    
    if (data < 0 || data > 10 || Number.isNaN(data)){
        data = readlineSync.questionFloat(`  Enter ${printConsole}: `,{
            min: 0,
            max: 10,
        });
    }
    
    while (data < 0 || data > 10) {
        console.log(`Enter ${printConsole} illegal!`);
        data = readlineSync.questionFloat(`  Enter ${printConsole}: `,{
            min: 0,
            max: 10,
        });
    }

    return data;
}

export function checkInputFormatEmail(dataInput: string, printConsole: string): string{

    dataInput = readlineSync.question(`  Enter ${printConsole}: `);

    if (dataInput.trim() !== '' && regexEmail.test(dataInput)){
        return dataInput;
    }

    while (dataInput.trim() === '' || !regexEmail.test(dataInput)) {

        if (dataInput.trim() === ''){ 
            console.log(`Enter ${printConsole} not null!`);
        }else if (!regexEmail.test(dataInput)){
            console.log(`  Invalid ${printConsole}!`);
        }

        dataInput = readlineSync.question(`  Enter ${printConsole}: `);

        if (dataInput.trim() !== '' && regexEmail.test(dataInput)){
            return dataInput;
        }

    }

    return dataInput;

}

export function checkInputFormatBirthDay(dataInput: string, printConsole: string): string{

    dataInput = readlineSync.question(`  Enter ${printConsole}: `);

    if (dataInput.trim() !== '' && regexBirthDay.test(dataInput)){
        return dataInput;
    }

    while (dataInput.trim() === '' || !regexBirthDay.test(dataInput)) {

        if (dataInput.trim() === ''){ 
            console.log(`Enter ${printConsole} not null!`);
        }else if (!regexBirthDay.test(dataInput)){
            console.log(`  Invalid ${printConsole}( mm / dd / yyyy )!`);
        }

        dataInput = readlineSync.question(`  Enter ${printConsole}: `);

        if (dataInput.trim() !== '' && regexBirthDay.test(dataInput)){
            return dataInput;
        }
    }

    return dataInput;

}

export function checkInputFormatPhoneNumber(dataInput: string, printConsole: string): string{

    dataInput = readlineSync.question(`  Enter ${printConsole}: `);

    if (dataInput.trim() !== '' && regexPhoneNumber.test(dataInput)){
        return dataInput;
    }

    while (dataInput.trim() === '' || !regexPhoneNumber.test(dataInput)) {

        if (dataInput.trim() === ''){ 
            console.log(`Enter ${printConsole} not null!`);
        }else if (!regexPhoneNumber.test(dataInput)){
            console.log(`  Invalid ${printConsole}!`);
        }

        dataInput = readlineSync.question(`  Enter ${printConsole}: `);

        if (dataInput.trim() !== '' && regexPhoneNumber.test(dataInput)){
            return dataInput;
        }
    }

    return dataInput;

}

export function inputFeaturesStudent(): number{

    let choice : number =  readlineSync.questionInt(" #YOUR CHOICE:  ", {
        min: ChoiceFeatureStudent.ChoiceMin,
        max: ChoiceFeatureStudent.ChoiceMax,
        limitMessage: "Input valid number, please.",
    });

    while (choice < ChoiceFeatureStudent.ChoiceMin || choice > ChoiceFeatureStudent.ChoiceMax) {
        choice =  readlineSync.questionInt(`Please, input option ${ChoiceFeatureStudent.ChoiceMin}-${ChoiceFeatureStudent.ChoiceMax}:  `, {
            min: ChoiceFeatureStudent.ChoiceMin,
            max: ChoiceFeatureStudent.ChoiceMax,
            limitMessage: "Input valid number, please."
        });
    }

    return choice;

}

export function searchInfo(printConsole: string): string{

    console.log("========================================");
    let keyword: string = readlineSync.question(`${printConsole}`);

    while (keyword.trim() === '') {
        console.log(`Please enter again!`);
        keyword = readlineSync.question(`${printConsole}: `);
    }
    
    return keyword;
}
