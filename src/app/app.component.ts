import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password:any;
  PwdLength:number;
  isNumbers=false;
  isCaptitals=false;
  isLowers=false;
  isSymbols=false;

  UpdateNumbers(){
    this.isNumbers = !this.isNumbers;
  }
  UpdateCapitals(){
    this.isCaptitals=!this.isCaptitals;
  }

 UpdateLowers(){
    this.isLowers=!this.isLowers;
  }
  
  UpdateSymbols(){
    this.isSymbols=!this.isSymbols;
  }
  
  updatepassword(pwdChar){
    this.PwdLength= parseInt( pwdChar.target.value);
  }

  genartePassword(){
    this.password='';
    let PwdChars='';
    PwdChars = this.isNumbers?"01234567890":"";
    PwdChars = this.isCaptitals?PwdChars+"ABCDEFGHIJKLMNOPQRSTUVWXYZ":PwdChars;
    PwdChars = this.isLowers?PwdChars+"abcdefghijklmnopqrstuvwxyz":PwdChars;
    PwdChars = this.isSymbols?PwdChars+"!@#$%^&*()":PwdChars;

    for (let index = 0; index < this.PwdLength; index++) {
      const rnd = this.randomNumber(PwdChars.length);
      this.password+=PwdChars.substring(rnd,rnd+1);
    }

  }

  randomNumber(max:any){
    return Math.floor(Math.random() * max);
  }

}
