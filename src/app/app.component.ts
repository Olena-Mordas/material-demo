import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    {id:1, name: 'Green'},
    {id:2, name: 'White'},
    {id:3, name: 'Indigo'}
  ];

  select(color){
    this.colors.filter(c=>c!=color)
    .forEach(c=>c['selected'] = false);

    color.selected= !color.selected;
  }
}
