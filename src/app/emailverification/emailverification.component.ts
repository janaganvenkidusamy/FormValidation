import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.css']
})
export class EmailverificationComponent implements OnInit {

  formobject:any ={
    otp:''
  }
submitted:boolean=false;
  backbutton: boolean =false;

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  onsubmit() {
    this.submitted = true;
    if (!this.formobject.otp ) {
      return;
    }
    // this.Router.navigate(['/Verification']);
  }
  backtoperson(){
    this.backbutton = true;
    this.Router.navigate(['/company']);
  }
}