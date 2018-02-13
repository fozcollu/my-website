import { Component,OnInit,TemplateRef } from '@angular/core';
import { DataService } from 'app/dataService';
import { Observable } from 'rxjs/Observable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditComponent } from 'app/pages/project/edit';
import { Console } from '@angular/core/src/console';
 

@Component({
    selector: 'project',
    templateUrl: 'project.html'
})

export class ProjectComponent implements OnInit {    
    modalRef: BsModalRef;

    
    ProjectList:Observable<ProjectModel[]>;
    constructor(private dataService:DataService,private modalService: BsModalService) { 
        // this.ProjectList=dataService.getList();
    }  
    getObservableData()
    {
      this.ProjectList=this.dataService.getObservable();
    }
    ngOnInit()
    {
     this.getObservableData();
    }

   
    openEdit(project) 
    {
        const initialState = {
          model: project,
          model2:"proje",         
          title: 'Edit Project',
          animated: true,
          keyboard: true,
          backdrop: false
        
        };
        
        this.modalRef = this.modalService.show(EditComponent, Object.assign({}, {initialState},{ class: 'gray modal-lg' }));
        this.modalRef.content.closeBtnName = 'Close';
      }
   
  }
  export class ProjectModel
  {
  constructor(name:string,description:string,duration:number){}
  
  }  
  