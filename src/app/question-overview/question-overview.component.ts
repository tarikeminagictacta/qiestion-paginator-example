import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-question-overview",
  templateUrl: "./question-overview.component.html",
  styleUrls: ["./question-overview.component.scss"]
})
export class QuestionOverviewComponent implements OnInit {
  questions = [
    {
      text: "some question 1",
      answers: ["answer 1", "answer 2", "answer 2"]
    },
    {
      text: "some question 2",
      answers: ["answer 1", "answer 2", "answer 2"]
    },
    {
      text: "some question 3",
      answers: ["answer 1", "answer 2", "answer 2"]
    }
  ];

  currentIndex = 0;

  constructor() {}

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  ngOnInit() {}
}
