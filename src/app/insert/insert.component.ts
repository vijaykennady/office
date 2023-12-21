import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Office } from '../office';
import { OfficeService } from '../office.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
constructor(private offser:OfficeService){}

  insertdata = new FormGroup({
    id: new FormControl(),
    name: new FormControl("",[Validators.required]),
    noOfEmployee: new FormControl("",[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    location: new FormControl('',[Validators.required]),
    officeType: new FormControl('',[Validators.required])
    
  });
  newOffice:Office= new Office;
insert(){
  this.newOffice={id:Number(this.id.value),name: this.name.value?.toString(),noOfEmployee:Number(this.noOfEmployee.value),location:this.location.value?.toString(),officeType:this.officeType.value?.toString()}
console.log(this.newOffice);
this.offser.insertdata(this.newOffice).subscribe((newo)=>{
  console.log(newo);
  this.newOffice=newo;
  
})
}

  get name(){
    return this.insertdata.controls.name;
  }
  get noOfEmployee(){
    return this.insertdata.controls.noOfEmployee;
  }
  get location(){
    return this.insertdata.controls.location;
  }
  get officeType(){
    return this.insertdata.controls.officeType;
  }
  get id(){
    return this.insertdata.controls.id;
  }

  
}
