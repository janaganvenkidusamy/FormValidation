import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-personaldet',
  templateUrl: './personaldet.component.html',
  styleUrls: ['./personaldet.component.css']
})
export class PersonaldetComponent implements OnInit {

  formobject:any ={
    usename:'',
    //  count:'',
    // state:'',
    phone:''
  }

submitted:boolean=false;
mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
stateInfo: any;
countryInfo: any;
cityInfo: any;

  constructor(private Router: Router,private country:CountriesService) { }


  ngOnInit(): void {
    this.getCountries();
  }
  onsubmit() {
    this.submitted = true;
    if (!this.formobject.usename || !this.formobject.phone) {
      return;
    }
    this.Router.navigate(['/company']);
  }

  getCountries(){
    this.country.allCountries().subscribe(
      (data2:any) => {
        this.countryInfo=data2.Countries;
      },

      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue:any) {
    
     this.stateInfo=this.countryInfo[countryValue].States;
     console.log(this.stateInfo);
  }

  // onChangeState(stateValue) {
  //   this.cityInfo=this.stateInfo[stateValue].Cities;
  //   //console.log(this.cityInfo);
  // }



}
