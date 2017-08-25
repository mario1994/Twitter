export default class User {
  public firstName: string;
  public lastName: string;
  public userName :string;
  public country : string;
  public city : string;
  public dataOfBirth : string;
  public email: string;
  public aboutMe: string;
  public smallImage:string;
  public bigImage:string;
  public password: string;
  
  constructor(firstName: string,lastName: string,userName: string,country: string,city: string,dataOfBirth : string,email: string,
  aboutMe: string, smallImage:string, bigImage:string, password: string){
    this.firstName  = firstName;
    this.lastName = lastName;
    this.userName  = userName;
    this.country = country;
    this.city  = city;
    this.dataOfBirth= dataOfBirth;
    this.email = email;
    this.aboutMe = aboutMe;
    this.smallImage = smallImage;
    this.bigImage = bigImage;
    this.password = password;
  }
}