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
        var filename = "/assets/" + "visitor.json" ;
        // return this.httpclient.get(filename).pipe(catchError(this.formatErrors);
        return this.httpclient.get(filename);   
    }
}