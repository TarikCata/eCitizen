export class Users{
    id!:number;
    JMBG!:number;
    username!:string;
    password!:string;
    name!:string;
    surname!:string;
    gender!:string;
    dateOfBirth!:string;
    expiryDate!:string;
    country!:string;
    signature!:string;
    placeOfBirth!:string;
    munOfResidence!:string;
    personalIdNumber!:number;
    dateOfIssue!:string;
    issuingAuthority!:string;
    pic!:string;
    infoDeteailsNum!:string;
    addres!:string;
    numAdress!:number;
    static makeUser(
        id:number,username:string,password:string,name:string,
        surname:string,placeOfBirth:string,pic:string
        ):Users{
        let u = new Users;
        u.id = id;
        u.JMBG = 4873287483223;
        u.username = username;
        u.password = password;
        u.name = name;
        u.surname = surname;
        u.gender = "M";
        u.dateOfBirth = "02/08/2000";
        u.expiryDate = "02/08/2027";
        u.country = "Bosnia And Herzegovina";
        u.signature = "dsadsfds";
        u.placeOfBirth = placeOfBirth;
        u.munOfResidence = placeOfBirth;
        u.personalIdNumber = 1;
        u.dateOfIssue = "04/07/2022";
        u.issuingAuthority = "MUP";
        u.pic = pic;
        u.infoDeteailsNum = "10242ACO001";
        u.addres = "Josanicka"
        u.numAdress = 12;
        return u;
    }
}
