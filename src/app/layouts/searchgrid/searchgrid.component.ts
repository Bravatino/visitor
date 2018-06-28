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

  constructor(private dataservice: DataService) { }
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

  }
  getAllColumns(){
    var columns = [];
    for(var vindex in this.allVisitors){
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
  onSubmit(event){
    event.preventDefault();
    var search1 = <HTMLInputElement>document.getElementById("searchentry1");
    var search2 = <HTMLInputElement>document.getElementById("searchentry2");
    var search3 = <HTMLInputElement>document.getElementById("searchentry3");
    var search4 = <HTMLInputElement>document.getElementById("searchentry4");
    console.log("value1=", search1.value, search2.value, search3.value);
  }
  newEntry(e){
    console.log("new entry", e);
  }
  onExit(e){
    console.log("exit");
  }  
}
