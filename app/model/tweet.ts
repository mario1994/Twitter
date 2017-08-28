export default class Tweet {
  public tweetAuthor: string;
  public tweetAuthorTag: string;
  public smallAuthorImage :string;
  public tweetTime :number;
  public tweetText : string;
  public tweetImageURL : string;
  public tweetReply : number;
  public tweetForward : number;
  public tweetLove : number;

  constructor(tweetAuthor: string,tweetAuthorTag: string,smallAuthorImage :string, tweetTime: number,tweetText: string,tweetImageURL: string,tweetReply:number,tweetForward:number,tweetLove:number){
    this.tweetAuthor  = tweetAuthor;
    this.tweetAuthorTag = tweetAuthorTag;
    this.smallAuthorImage = smallAuthorImage;
    this.tweetTime  = tweetTime;
    this.tweetText = tweetText;
    this.tweetImageURL  = tweetImageURL;
    this.tweetReply  = tweetReply;
    this.tweetForward = tweetForward;
    this.tweetLove  = tweetLove;
  }
}