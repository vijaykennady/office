import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../office.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from '../office';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  constructor(private offser:OfficeService, private active:ActivatedRoute, private route:Router){}
  
  ngOnInit(): void {
    this.id=this.active.snapshot.params['id'];
this.getOffice();
  }
  id:number;
  getoffice:Office= new Office;

getOffice(){
this.offser.getoffice(this.id).subscribe((off)=>{
  console.log(off);
  this.getoffice=off;
})
}
tolist(){
this.route.navigate(['list']);
}
}
