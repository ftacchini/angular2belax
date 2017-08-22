export class Person {
    name: string;
    good: boolean;

    constructor () {}

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public isGood() {
        return this.good;
    }

}