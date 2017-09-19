export class Post {

    public id: number;
    public userId: number;
    public text: string;
    public likes: number;

    constructor () {}

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getUserId() {
        return this.userId;
    }

    public setUserId(userId: number) {
        this.userId = userId;
    }

    public getText() {
        return this.text;
    }

    public setText(text: string) {
        this.text = text;
    }

    public getLikes() {
        return this.likes;
    }

    public addLike() {
        this.likes++;
    }

}