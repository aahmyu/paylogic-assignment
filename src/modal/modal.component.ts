import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  message:string;
}

@Component({
    selector: 'modal',
    templateUrl: './modal.html',
    styleUrls: ['./modal.scss']
})

export class ModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
    message: string;
    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    confirm() {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
    }
}