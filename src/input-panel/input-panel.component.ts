import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'input-panel',
    templateUrl: './input-panel.html',
    styleUrls: ['./input-panel.scss']
})

export class InputPanel {
    @Input() count;
    @Output() onInc = new EventEmitter();
    @Output() onDec = new EventEmitter();

    inc(){
        this.onInc.emit();
    }

    dec(){
        this.onDec.emit();
    }

}