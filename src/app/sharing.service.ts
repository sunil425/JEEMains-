import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private question = new BehaviorSubject<any>('');

  subQuestion = this.question.asObservable();


  constructor() { }
  setQuestion(questions: any) {
    this.question.next(questions)
  }

}
