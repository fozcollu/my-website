import { Component} from '@angular/core';



@Component({
    selector: 'map',
    templateUrl: 'map.html'
})


export class MapComponent {

    centerLat:number = 38.436434 ;
    centerLng:number =  27.145486;
    infoText:string="infoText"
    constructor() { }

 
}
