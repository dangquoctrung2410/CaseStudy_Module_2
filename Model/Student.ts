
import 'reflect-metadata';


export class Student {

    
    private id: string;

   
    private name: string;

   
    private birthday: string;

    
    private address: string;

   
    private email: string;

  
    private phoneNumber: string;

  
    private groups: string;

  
    private scoreHK1: number;

   
    private scoreHK2: number;

    constructor(id: string , name: string, birthday: string, address: string, email: string, phoneNumber: string, groups: string, scoreHK1: number, scoreHK2: number){
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

    setID(id: string){
        this.id = id;
    }

    getID(): string{
        return this.id;
    }

    setName(name: string): void{ 
        this.name = name;
    }

    getName(): string { 
        return this.name;
    }

    setBirthday(birthday: string){
        this.birthday = birthday;
    }

    getBirthday(): string {
        return this.birthday;
    }

    setAddress(address: string): void{
        this.address = address;
    }

    getAddress(): string {
        return this.address;
    }

    setEmail(email: string){
        this.email = email;
    }

    getEmail(): string {
        return this.email;
    }

    setPhoneNumber(phoneNumber: string){ 
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    setGroups(groups: string): void{
        this.groups = groups;
    }

    getGroups(): string {
        return this.groups;
    }

    setScoreHK1(scoreHK1: number): void{
        this.scoreHK1 = scoreHK1;
    }

    getScoreHK1(): number {
        return this.scoreHK1;
    }

    setScoreHK2(scoreHK2: number): void{
        this.scoreHK2 = scoreHK2;
    }

    getScoreHK2(): number {
        return this.scoreHK2;
    }

    averageScore() : number {
        return Math.floor((this.getScoreHK1() + this.getScoreHK2()) / 2);
    }
}