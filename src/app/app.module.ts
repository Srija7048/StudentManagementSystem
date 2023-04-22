import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentcomponentComponent } from './studentcomponent/studentcomponent.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentDirective } from './student.directive';
import { StudentpipePipe } from './studentpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentcomponentComponent,
    StudentdetailsComponent,
    StudentDirective,
    StudentpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
