import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';import { EditCourseComponent } from './edit-course/edit-course.component';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog){
    
  }
  openDialog(){
    this.dialog.open(EditCourseComponent)
      .afterClosed()
      .subscribe(res=>console.log(res));
  }
}
