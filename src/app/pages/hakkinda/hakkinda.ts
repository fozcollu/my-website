import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'Hakkinda',
    templateUrl: './hakkinda.html'
})

export class HakkindaComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log("Hakkinda sayfasındasın!!");
    }
}