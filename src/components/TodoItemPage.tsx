import { FC } from "react";

// ----------------------------

interface SumA {
    (a: number | string, b: number): number | string;
}


type SumB = {
    (a: number | string, b: number): number | string;
}


const sum: SumB = (a, b) => {
    if (typeof a === "number") {
        return a + b
    } else {
        return "Hello"
    }
};

console.log(sum('abs', 3));
console.log(sum(3, 3));

// ----------------------------

type B = {
    name: string
}

interface A extends B {
    lastname: string;
    age: number;
}

const obj: A = {
    name: 'Vitalii',
    lastname: 'Grigorash',
    age: 35
}

console.log(obj);

// ----------------------------

type UniqId = string;

interface Id {
    id: UniqId
}

const user: Id = {
    id: '123'
}

console.log(user);

// ----------------------------

type NamesA = string[];

interface NamesB {
    [key: number]: string
}

const names: NamesB = [
    'Vitalii',
    'Kristina'
]

console.log(names);

// ----------------------------

type NumbersA = number[];

interface NumbersB {
    [key: number]: number
}

const numbers: NumbersB = [
    35,
    30
]

console.log(numbers);

// ----------------------------

interface Name {
    name: string;
}

interface Age {
    age: number
}

type NameAge = Name | Age

const userName: NameAge = {
    name: 'Vitalii'
}

const userAge: NameAge = {
    age: 35
}

const userNameAge: NameAge = {
    name: "Vitalii",
    age: 35
}

console.log(userName);
console.log(userAge);
console.log(userNameAge);

// ----------------------------

interface User {
    name: string;
    age: number;
}

interface Admin {
    lastName: string;
    email: string;
}

type NewUser<T> = T | null | undefined;

const userOne: NewUser<User> = {
    name: 'Vitalii',
    age: 35
};

const userTwo: NewUser<User> = null;

const userThree: NewUser<User> = undefined;

const userFour: NewUser<Admin> = {
    lastName: "Grigorash",
    email: 'vitalii.grigorash@gmail.com',
}

console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userFour);

// ----------------------------

interface IUser {
    name: string;
    age: number;
}

interface IAdmin {
    access: boolean;
    role: string;
}

interface IClient extends IUser, IAdmin {
    org: string
}

type IClient2 = IUser | IAdmin;

const client5: IClient2 = {
    name: 'Vitalii',
    age: 35
}

const client1: IClient = {
    name: 'Vitalii',
    age: 35,
    access: true,
    role: 'admin',
    org: 'Sber'
}


const client2: IUser = {
    name: 'Vitalii',
    age: 35,
}

const client3: IAdmin = {
    access: true,
    role: 'admin',
}

interface INewObj {
    [key: string]: number
}

const newObj: INewObj = {
    qwe: 123,
    asd: 345,
    dfg: 555,
}

newObj.help = 123

export const TodoItemPage: FC = () => {

    return (
        <div>

        </div>
    )
}