export default class User {

    username: String;
    password: String;

    constructor(username: String, password: String) {
        this.username = username;
        this.password = password;
    }




    checkPassword(password: String): boolean {
        return this.password == password;
    }
}