import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrls: ['./restcall.component.css']
})
export class RestcallComponent implements OnInit {
  
  finalData:any[];
  constructor(private dataService: DataService) { 
    console.log("in constructor");
  }


  ngOnInit(): void {
    console.log("in oninit");
    this.dataService.sendGetRequest().subscribe((res:any[])=>{
      console.log(res['status']);
      console.log(res['data']);
      this.finalData=res['data'];
    });
  }

}
