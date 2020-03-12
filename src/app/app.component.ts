import { Component } from '@angular/core';
import { lorem } from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'type-game';
  sentence = lorem.sentence()
  enteredText = ""
  successMessageHidden = true

  getSentence = () => (this.sentence)

  onChangeInput = (value: string) => {
    // if(value === this.sentence){
    //   this.successMessageHidden = false
    // }
    this.enteredText = value;
  }

  compare = (randomLetter: string, enteredLetter: string) => {
    if(!enteredLetter){
      return "pending"
    }

    return randomLetter === enteredLetter ? "correct" : "incorrect"
  }


}
