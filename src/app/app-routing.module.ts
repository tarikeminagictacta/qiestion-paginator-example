import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionOverviewComponent } from "./question-overview/question-overview.component";

const routes: Routes = [{ path: "", component: QuestionOverviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
