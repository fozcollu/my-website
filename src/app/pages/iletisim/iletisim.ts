import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ContactModel } from '../../Model/ContactModel';


@Component({
    selector: 'iletisim',
    templateUrl: './iletisim.html'
})

export class IletisimComponent implements OnInit {
    constructor() { }
    hasLanguageError:boolean=true;
    model=new ContactModel("","","",false);
    Languages=["Turkish","English","French","Deutsche","Other"]
    submitForm(form:NgForm)
    {
    
    }

    validateLanguage(lang:string)
    {
     if(lang=="default") this.hasLanguageError=true;
     else this.hasLanguageError=false;
    }
    ngOnInit() { }
}