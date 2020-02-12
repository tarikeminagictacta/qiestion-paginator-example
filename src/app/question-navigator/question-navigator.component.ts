import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-question-navigator",
  templateUrl: "./question-navigator.component.html",
  styleUrls: ["./question-navigator.component.scss"]
})
export class QuestionNavigatorComponent {
  private _currentIndex: number;

  @Input() questions: any[];
  @Input()
  set currentIndex(val: number) {
    this.currentIndexChange.emit(val);
    this._currentIndex = val;
  }

  get currentIndex(): number {
    return this._currentIndex;
  }

  @Output()
  currentIndexChange: EventEmitter<number> = new EventEmitter();

  next() {
    this.currentIndex++;
  }
}
