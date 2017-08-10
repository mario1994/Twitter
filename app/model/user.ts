
export default class User {
  public firstName: string;
  public lastName: string;
  public twitterTag :string;
  public country : string;
  public city : string;
  
  constructor(firstName: string,lastName: string,twitterTag: string,country: string,city: string){
    this.firstName  = firstName;
    this.lastName = lastName;
    this.twitterTag  = twitterTag;
    this.country = country;
    this.city  = city;
  }
}