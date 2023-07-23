import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-accledgers',
  templateUrl: './accledgers.component.html',
  styleUrls: ['./accledgers.component.css']
})
export class AccledgersComponent implements OnInit {


  ledgers:any;
constructor(private route:Router, private api:ApiService){

}


  ngOnInit(): void {
    this.api.get("accledgers").subscribe((result:any)=>{
      this.ledgers = result;
    })
  }
  ledger(){


  }

}
