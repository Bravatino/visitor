import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/dataservices';

@Component({
  selector: 'app-searchgrid',
  templateUrl: './searchgrid.component.html',
  styleUrls: ['./searchgrid.component.css']
})
export class SearchgridComponent implements OnInit {

  private allVisitors: JSON = null;
  private allcolumns:any = [];

  constructor(private dataservice: DataService) { 
    // this.dataservice = dataservicein;
  }
  searchList:any = [];

  ngOnInit() {
    this.searchList = ["visitor name", "visitor id", "date time", "reason"];
    this.dataservice.getAllVisitors();

    this.dataservice.allVisitorJson.subscribe(
      (data) =>{
        this.allVisitors = data;
        this.allcolumns = this.getAllColumns();
      },
      (err) => {
        console.log("error in getting visitors", err );
      } 
    );

    // console.log(this.searchList);
    // console.log(this.allcolumns);
  }
  getAllColumns(){
    var columns = [];
    for(var vindex in this.allVisitors){
      // columns.push(visitor);
      // console.log("getAllColumns", this.allVisitors[vindex]);
      var rowdict = this.allVisitors[vindex];
      for (var key in rowdict) {
        if (rowdict.hasOwnProperty(key)) {
          columns.push(key);
        }
      }
      break;
    }

    return columns;
  }
  onSubmit(){
    console.log("submit");
  }
  newEntry(e){
    console.log("new entry", e);
  }
  onExit(e){
    console.log("exit");
  }  
}
