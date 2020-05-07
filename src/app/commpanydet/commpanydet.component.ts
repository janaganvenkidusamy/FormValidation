import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commpanydet',
  templateUrl: './commpanydet.component.html',
  styleUrls: ['./commpanydet.component.css']
})
export class CommpanydetComponent implements OnInit {

  formobject:any ={
    companyname:'',
    Email:'',
    Title:'',
    year:''
  }
submitted:boolean=false;
  backbutton: boolean =false;
  imgurl: string ="/assets/image/logo1.jpg";
 
  filetoupload: File = null;
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  onsubmit() {
    this.submitted = true;
    if (!this.formobject.companyname || !this.formobject.Email ||
      !this.formobject.Title || !this.formobject.year) {
      return;
    }
    this.Router.navigate(['/Verification']);
  }
  backtoperson(){
    this.backbutton = true;
    this.Router.navigate(['/personal']);
  }
  Fileinput(file: FileList){
    this.filetoupload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imgurl ="";
      this.imgurl = event.target.result;
    }
    reader.readAsDataURL(this.filetoupload);

  }
}
