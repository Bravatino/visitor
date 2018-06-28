import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import { ErrorObservable } from "rxjs/observable/ErrorObservable";
// import { catchError } from "rxjs/operators";

@Injectable()
export class ApiService {
    constructor(private httpclient: HttpClient){}
    // private formatErrors(error: any){
    //     return new ErrorObservable(error.error);
    // }

    getAllVisitors(){
        // var endpoint = "https://localhost:44319/api/visitor/get_all"
        // return this.httpclient.get(endpoint);
        var filename = "/assets/" + "visitor.json" 
        return this.httpclient.get(filename);   
    }

    getAllItems(){
        var filename = "/assets/" + "items.json" ;
        // return this.httpclient.get(filename).pipe(catchError(this.formatErrors);
        return this.httpclient.get(filename);   
    }
}