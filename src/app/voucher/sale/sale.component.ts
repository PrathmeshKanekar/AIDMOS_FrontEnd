import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from 'src/app/shared/api.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class SaleComponent implements OnInit{

  fieldArray: Array<any> = [];

  ngOnInit(): void {
    this.fieldArray.length = 10;
  }

  addFieldValue(count:number){
    this.fieldArray.push(count);
  }
  deleteFieldValue(i:any){
    this.fieldArray.splice(i, 1);
  }

}
