import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SharingService } from './sharing.service';
declare var $: any; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineQuiz';

  questions:any;
  time_limit=true
  
  constructor(private service :DataService,private shareService:SharingService) {}

  ngOnInit(): void {
    this.timeController()


    $(document).ready(function(){
      setTimeout(function showModal() {
         $('#myModal').modal('show');
       }, 10800002);
   });
    
      this.service.getQues().subscribe(
        data=>{
          this.questions=data
          this.shareService.setQuestion(this.questions)
          console.log(this.questions)

        },
        error => console.log(error));

      

  }

  timeController() {
      
    setTimeout (() => {
      this.time_limit=false
         console.log("Hello from setTimeout");
      }, 10800002);
 
 
  }
 


}
