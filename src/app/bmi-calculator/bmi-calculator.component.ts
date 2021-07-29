import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
})
export class BmiCalculatorComponent implements OnInit {
  constructor() {}

  showbmishoclass="card";
  showbmidata = {
    Message: '',
    colorclassname:'card',
    bmiscore:''
  };
  bmidata = [
    {
      name: 'underweight',
      Message: 'You are Under weight',
      colorclassname:'card bg-info text-white'
    },
    {
      name: 'healthy',
      Message: 'You are healthy',
      colorclassname:'card bg-success text-white'

    },
    {
      name: 'overweight',
      Message: 'You are Over weight',
      colorclassname:'card bg-warning text-dark'

    },
    {
      name: 'obese',
      Message: 'You are Obese',
      colorclassname:'card bg-danger text-white'

    },
  ];

  ngOnInit(): void {}
  checkBMI(height: any, weight: any) {
    let bmirangesis = ((weight) / Math.pow(height, 2));
    this.showbmidata.bmiscore=Number(bmirangesis).toFixed(2)+"";
    if(bmirangesis<18.5){
      this.showbmidata.Message=this.bmidata[0].Message;
      this.showbmidata.colorclassname=this.bmidata[0].colorclassname;
    }
    else if(bmirangesis>=18.5&&bmirangesis<=24.99){
      this.showbmidata.Message=this.bmidata[1].Message;
      this.showbmidata.colorclassname=this.bmidata[1].colorclassname;

    }
    else if(bmirangesis>=25&&bmirangesis<=30){
      this.showbmidata.Message=this.bmidata[2].Message;
      this.showbmidata.colorclassname=this.bmidata[2].colorclassname;

    }
    else{
      this.showbmidata.Message=this.bmidata[3].Message;
      this.showbmidata.colorclassname=this.bmidata[3].colorclassname;

    }
    console.log(height + 'and' + weight + '=>' + bmirangesis);
  }

  //   BMI values less than 18.5 kg/m2 are considered underweight
  // BMI values between 18.5 kg/m2 to 24.9 kg/m2 are healthy
  // BMI values between 25 kg/m2 to 30 kg/m2 are overweight
  // BMI values greater than 40 kg/m2 are considered obese
}
