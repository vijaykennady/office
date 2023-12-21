import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Office } from '../office';
import { OfficeService } from '../office.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(private active:ActivatedRoute, private offser:OfficeService){}
  ngOnInit(): void {
   this.id1=this.active.snapshot.params['id'];
   this.getOffice();
  }
id1:number;
getoffice:Office= new Office;

getOffice(){
this.offser.getoffice(this.id1).subscribe((off)=>{
  console.log(off);
  this.getoffice=off;
  this.updateoffice.patchValue({
    id: this.getoffice.id,
    name: this.getoffice.name,
    noOfEmployee: this.getoffice.noOfEmployee?.toString(),
    location: this.getoffice.location,
    officeType: this.getoffice.officeType
  })
})
}

updateoffice= new FormGroup({
  id: new FormControl(),
  name: new FormControl("",[Validators.required]),
  noOfEmployee: new FormControl("",[Validators.required,Validators.pattern(/^[0-9]+$/)]),
  location: new FormControl('',[Validators.required]),
  officeType: new FormControl('',[Validators.required])
  
});
update(){
  this.getoffice={id:Number(this.id.value),name: this.name.value?.toString(),noOfEmployee:Number(this.noOfEmployee.value),location:this.location.value?.toString(),officeType:this.officeType.value?.toString()}
this.offser.updateOffice(this.getoffice.id,this.getoffice).subscribe((res)=>{
  console.log(res);
  
})
}

get name(){
  return this.updateoffice.controls.name;
}
get noOfEmployee(){
  return this.updateoffice.controls.noOfEmployee;
}
get location(){
  return this.updateoffice.controls.location;
}
get officeType(){
  return this.updateoffice.controls.officeType;
}
get id(){
  return this.updateoffice.controls.id;
}

}
