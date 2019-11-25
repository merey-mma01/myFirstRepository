import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDate = new Date();
  title = 'untitled1';
  public now: any = 1;
  torts = ['tort1' , 'tort2' , 'tort3' , 'tort4'];
  public korz: any = [];

  show(target: any) {
    this.now = target;
  }

  Add(arg: any) {
    this.korz.push(arg);
  }
  Del(arg: any) {
    this.korz.splice(arg);
  }
}
