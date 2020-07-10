import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatingApp-SPA';
  changableText = 'Tour of heros';

  public foo() {
    this.changableText =  'Food is Good!';
  };
}
