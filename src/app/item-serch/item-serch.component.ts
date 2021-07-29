import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-serch',
  templateUrl: './item-serch.component.html',
  styleUrls: ['./item-serch.component.css']
})
export class ItemSerchComponent implements OnInit {

  constructor() { }
  dataavailable = false;
  showingdata = {
    name: '',
    nutriants: {
      Sodium: 0,
      Potassium: 0,
      Iron: 0,
      Sugars: 0,
      Fat:0,
      Calcium:0
    },
  };
  vegidata = [
    {
      name: 'carot',
      nutriants: {
        Sodium: 50,
        Potassium: 200,
        Iron: 0,
        Sugars: 4,
        Fat:30,
        Calcium:10
      },
    },
    {
      name: 'chilli',
      nutriants: {
        Sodium: 20,
        Potassium: 340,
        Iron: 10,
        Sugars: 24,
        Fat:1,
        Calcium:10
      },
    },
  ];

  ngOnInit(): void {
  }
  onSearchChange(searchValue: any) {
    console.log(searchValue.target.value);
    let serchingvaluesi = searchValue.target.value;
    if (this.vegidata.filter((e) => e.name == serchingvaluesi).length > 0) {
      this.dataavailable = true;
      this.vegidata.filter((e) => {
        if (e.name == serchingvaluesi) {
          this.showingdata.name = e.name;
          this.showingdata.nutriants.Iron=e.nutriants.Iron;
          this.showingdata.nutriants.Potassium=e.nutriants.Potassium;
          this.showingdata.nutriants.Sodium=e.nutriants.Sodium;
          this.showingdata.nutriants.Fat=e.nutriants.Fat;
          this.showingdata.nutriants.Calcium=e.nutriants.Calcium;
          this.showingdata.nutriants.Sugars=e.nutriants.Sugars;
        }
      });
    } else {
      this.dataavailable = false;
    }
  }
}
