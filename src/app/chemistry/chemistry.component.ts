import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.css']
})
export class ChemistryComponent implements OnInit {

  chemQuestion:any;
  count=0;
  myRadio=''

  c={q:'',o:''}

  chemAnswers=[{
    quesNo:1,
    option:''
    
  }]


  constructor( private shareService:SharingService ) { }

  ngOnInit(): void {
    this.getUser();

  }

  getUser() {
    this.shareService.subQuestion.subscribe(data => {
      this.chemQuestion = data
      console.log(this.chemQuestion)
    }, err => {
      console.log(err);
    });
  }


  nextQuestion(){
    this.count++;
   


  }

show(i){
this.count=i
console.log(this.myRadio)
}
  

  previousQuestion(){
    this.count--;


  }

  // add(count){
  //   console.log(count)

  //   if(this.chemAnswers.length>0){
  //     this.chemAnswers.forEach(element => {
  //       if(element.quesNo==count){
  //         element.quesNo=count
  //       }

  //       else{
  //         console.log('in else')
  //         this.chemAnswers.push({
  //           quesNo:count,
  //           option:this.myRadio
  //         })
  //       }
  //     });
  //   }
  //   else{
  //     this.chemAnswers.push({
  //       quesNo:count,
  //       option:this.myRadio
  //     })
  //   }

  //   console.log(this.chemAnswers)

  // }
  
  
  add(count){
  //   if(this.chemAnswers.length>0){
  //   for(var a in this.chemAnswers){
  //     if(this.chemAnswers[a].quesNo==count){
  //       this.chemAnswers[a].option=this.myRadio;
  //       return this.chemAnswers[a];
  //     }else{
  //       console.log("in else");
  //       this.chemAnswers.push({
  //         quesNo:count,
  //         option:this.myRadio
  //       });
  //     }
  //   }
  // }else{
  //   this.chemAnswers.push({
  //     quesNo:count,
  //     option:this.myRadio
  //   });
  // }
   console.log(this.chemAnswers)

  if (this.chemAnswers.includes({quesNo:1,option:'',})) {

    console.log('hr')
    
  }

  else{
    this.chemAnswers.push({quesNo:count,option:this.myRadio})
    
  }
}




  
}
