export class User {

    public id: number;
    public userName: string;
    public password: string;
    public name: string;
    public lastName: string;
    public logged: boolean;
    public friends: number [];

    constructor () {}
    
    public getId() {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getUserName() {
        return this.userName;
    }

    public setUserName(userName: string) {
        this.userName = userName;
    }

    public getPassword() {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
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

    public isLogged() {
        return this.logged;
    }

    public setIsLogged(isLogged: boolean) {
        this.logged = isLogged;
    }

    public getFriends() {
        return this.friends;
    }

    public setFriends(friends: number[]){
        this.friends = friends;
    }

    public addFriend(id: number) {
        if(!this.findFriendById(id)){
            this.friends.push(id);
        }
    }

    public removeFriend(id: number) {
        let index = this.findFriendById(id);
        if(index){
            this.friends.splice(index, 1);
        }
    }

    private findFriendById(id: number) {
        return this.friends.findIndex(x => x === id);
    }

}