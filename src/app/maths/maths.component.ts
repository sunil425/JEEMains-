import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {

  mathQuestion:any
  count=0;
  myRadio=''

  constructor(private shareService:SharingService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.shareService.subQuestion.subscribe(data => {
      this.mathQuestion = data
      console.log(this.mathQuestion)
    }, err => {
      console.log(err);
    });
  }

  nextQuestion(){
    this.count++;
   
    console.log("count"+this.count)


  }


  show(i){
    this.count=i
    }
      

  

  previousQuestion(){
    this.count--;
    console.log(this.count)


  }


}
