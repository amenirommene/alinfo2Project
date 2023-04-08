import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alinfo2';
  title2 = 'test';
  show = false;
  image = 'test.png';
  title3="ngModel";
  f2(val:string){
    this.title2=val;
  }
  f(t:string){
    alert ("Hi! "+t);
    this.title="newvalue";
    this.show=true;
  }
}
