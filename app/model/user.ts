export default class User {
  public firstName: string;
  public lastName: string;
  public twitterTag :string;
  public country : string;
  public city : string;
  public dataOfBirth : string;
  public email: string;
  public aboutMe: string;
  public password: string;
  
  constructor(firstName: string,lastName: string,twitterTag: string,country: string,city: string,dataOfBirth : string,email: string,
  aboutMe: string, password: string){
    this.firstName  = firstName;
    this.lastName = lastName;
    this.twitterTag  = twitterTag;
    this.country = country;
    this.city  = city;
    this.dataOfBirth= dataOfBirth;
    this.email = email;
    this.aboutMe = aboutMe;
    this.password = password;
  }
}