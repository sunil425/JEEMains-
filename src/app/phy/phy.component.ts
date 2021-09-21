import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-phy',
  templateUrl: './phy.component.html',
  styleUrls: ['./phy.component.css']
})
export class PhyComponent implements OnInit {
  phyQuestion:any;
  count=0;
  myRadio=''

  constructor(private shareService:SharingService) { }

  ngOnInit(): void {
  this.getUser() 


  }
  getUser() {
    this.shareService.subQuestion.subscribe(data => {
      this.phyQuestion = data
      console.log(this.phyQuestion)
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

