import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/dataservices';


@Component({
  selector: 'app-searchgrid-items',
  templateUrl: './searchgrid-items.component.html',
  styleUrls: ['./searchgrid-items.component.css']
})
export class SearchgridItemsComponent implements OnInit { 
  
  private allVisitors: JSON = null;
  private allcolumns:any = [];
  searchList:any = [];


  constructor(private dataservice: DataService) { }

  ngOnInit() {

    this.searchList = ["visitor name", "visitor id", "date time", "reason"];
    this.dataservice.getAllVisitors();

    this.dataservice.allVisitorJson.subscribe(
      (data) =>{
        this.allVisitors = data;
        this.allcolumns=  this.getAllColumns();
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

}
