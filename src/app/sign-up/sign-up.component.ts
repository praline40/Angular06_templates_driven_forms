import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: User = new User();
  bsubmit: boolean = false;

  constructor(){}

  ngOnInit(): void {
   
  }

  onSubmit({value, valid}){
    // form submitted
    if (valid) {
      this.bsubmit=false;
       console.log(this.model);
     } else {
      this.bsubmit=true;
       console.log('invalid form');
     }
    
  }



}
