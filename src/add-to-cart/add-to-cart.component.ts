import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-to-cart',
    templateUrl: './add-to-cart.html',
    styleUrls: ['./add-to-cart.scss']
})

export class AddToCart {
    @Output() onInc = new EventEmitter();

    inc(){
        this.onInc.emit();
    }
}