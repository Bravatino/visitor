import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from "./apiservice";

@Injectable()
export class DataService {
    
    private apiservice = null;
    private allVisitorJsonSubject = new BehaviorSubject<JSON>({} as JSON);
    public allVisitorJson = this.allVisitorJsonSubject.asObservable().pipe(distinctUntilChanged());
    

    constructor(apiService: ApiService){
        this.apiservice = apiService;
    }

    getAllVisitors(){

        this.apiservice.getAllVisitors().subscribe(
            data => {
                this.setallVisitorJsonS(data.data);
            },
            err =>{
                console.log("got error", err);
            }
        );
    }

    setallVisitorJsonS(json: JSON) 
    { 
      // console.log("response from server", json);
      this.allVisitorJsonSubject.next(json);
    }
  



    getVisitor(searchValue: Array<string>){

    }
}