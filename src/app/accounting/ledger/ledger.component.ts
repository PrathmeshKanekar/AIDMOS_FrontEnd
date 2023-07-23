import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  formdata:any;
  ledgers:any;
  id:any;
  constructor( private api:ApiService){

  }

  ngOnInit(): void {
    this.load();

  }

  load(){
    this.formdata = new FormGroup({
      groupid:new FormControl(0),
      name:new FormControl(""),
      openingbalance:new FormControl(""),
      balancetype:new FormControl(""),
      address:new FormControl(""),
      contactperson:new FormControl(""),
      town:new FormControl(""),
      pincode:new FormControl(""),
      mobileno:new FormControl(""),
      altmobileno:new FormControl(""),
      email:new FormControl(""),
      gstno:new FormControl(""),
      panno:new FormControl(""),
      adharno:new FormControl(""),

       })
      this.api.get("Accledgers").subscribe((result:any)=>{
        this.ledgers = result;
        console.log(result);})
     }
     save(data:any): void{
      console.log(data);
      this.api.post("Accledgers", data).subscribe((result:any)=>{
        console.log(result);
      })
  }
  }

  // edit(id: number) {
  //   this.api.get("Accledgers/" + id).subscribe((result: any) => {
  //     this.formdata.patchValue({

  //   srno: result.srno,
  //   name: result.name,
  //   primarygroup: result.primarygroup,
  //   group: result.groupid,
  //   type: result.type,


  //     })
  //   })
  // }

  // delete(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.api.delete("Accledgers/" + id).subscribe((result: any) => {
  //         this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
  //         this.load();
  //       })
  //     }
  //   })

  //}


