export class Person {
    id: number;
    name: string;
    lastName: string;
    good: boolean;

    constructor () {}

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getLastName() {
        return this.lastName;
    }

    public setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public isGood() {
        return this.good;
    }

    public setIsGood(isGood: boolean) {
        this.good = isGood;
    }

}