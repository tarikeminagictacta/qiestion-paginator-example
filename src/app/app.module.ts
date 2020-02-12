import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionOverviewComponent } from './question-overview/question-overview.component';
import { QuestionNavigatorComponent } from './question-navigator/question-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionOverviewComponent,
    QuestionNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
