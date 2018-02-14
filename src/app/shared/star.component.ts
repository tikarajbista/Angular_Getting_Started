import { Component, Input, EventEmitter, Output } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
    selector: 'rs-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
   @Input() rating: number;
   @Output() starClick: EventEmitter<string> = 
        new EventEmitter<string>();
    starWidth: number;

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }
    onClick(): void{
        this.starClick.emit(`Rating is ${this.rating}`)
    }
}