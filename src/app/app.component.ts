import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  color = 2;

  colors = [
    {id:1, name: 'Green'},
    {id:2, name: 'White'},
    {id:3, name: 'Indigo'}
  ];

  startDate = new Date(2017,0,17);
  endDate = new Date(2018,1,1);
  onChange($event){
    console.log($event);
  }
}
