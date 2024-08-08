let data = "secret info";
class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewdata(){
        console.log("data = ",data)
    }
}
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data = "new value"
    }
}
let s1 = new user("krishna","@krishna.com");
let s2 = new user("anuj","@anuj.com");
let admin = new Admin("jdkvjdjd","@colg.com")