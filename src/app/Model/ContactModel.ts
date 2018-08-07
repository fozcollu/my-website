export class ContactModel{
    fullName:string;
    email:string;
    comment:string;
    yazilimciMi:boolean;
    language:string;


 constructor(FullName:string,Email:string,Comment:string,YazilimciMi:boolean,Language:string="default"){
        this.fullName=FullName;
        this.email=Email;
        this.comment=Comment;
        this.yazilimciMi=YazilimciMi;
        this.language=Language;        
    }

}