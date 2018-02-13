import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

@Component({
    selector: 'edit',
    templateUrl: 'edit.html'   

})

export class EditComponent implements OnInit {
    project:ProjectModel;
    deneme:string;
    
    constructor(public bsModalRef: BsModalRef) { }


    ngOnInit() { }
}

export class ProjectModel
{
constructor(name:string,description:string,duration:number){}

}