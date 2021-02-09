import { Component, EventEmitter, OnInit,Output } from '@angular/core';



@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    collapsed:boolean=true;
    @Output() featureSelected = new EventEmitter<string>();
    onSelect=(feature:string):void=>{
        this.featureSelected.emit(feature);
    }
    constructor() { }

    ngOnInit() { }
}