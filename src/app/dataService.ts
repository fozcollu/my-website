import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
   
    Project: ProjectModel[];


    constructor(private http: Http) {
        // http.request('./app/data.json')
        //     .map((response: Response) => <ProjectModel[]>response.json())
        //     .subscribe(response => this.Project = response,
        //     err => console.log(err),
        //     () => console.log('Ok')
        //     );
    }

    getObservable()
    {
       return this.http.request('./app/data.json')
        .map((response:Response)=><ProjectModel[]>response.json());
    }

    getPeople(){
       return this.Project;
   }  
}
export class ProjectModel
{
constructor(name:string,description:string,duration:number){}

}