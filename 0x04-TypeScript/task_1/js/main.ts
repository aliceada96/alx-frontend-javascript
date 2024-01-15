export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attributes: string]: any;
}

interface Directors extends Teacher {
 numberOfReports: number;
}

function printTeacher(firstName:string, lastName:string): string {
    return firstName[0] + '. ' + lastName;
}

export function printTeacherFunction(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

export interface StudentConstructor {
    new (firstName:string, lastName:string): StudentClassInterface
}

export interface StudentClassInterface {
    workOnHomework: () => string
    displayName: () => string
}

export class StudentClass implements StudentClassInterface {
        __firstName: string
        __lastName: string

        constructor (firstName: string, lastName: string) {
            this.__firstName = firstName
            this.__lastName = lastName
        }
        
        workOnHomework() {
        return "Currently working"
    }
        displayName() {
        return this.__firstName
    }

}
