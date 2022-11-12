export class Employee1 {
    public name: string = "";
    public salary: number = 0;
    public gender: string = "";
    public startDate: Date = new Date;
    public note: string = "";
    public profilePic: string = "";
    public department: Array<any> = [];

    constructor(name: string, salary: number, gender: string, startDate: Date, note: string, profilePic: string, department: Array<any>) {
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
        this.note = note;
        this.profilePic = profilePic;
        this.department = department;
    }

}