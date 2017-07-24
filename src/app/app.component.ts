import { Component } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private dialogService: DialogService) { };

  itemsCount: number = 0;
  showAddBtn: boolean = true;
  showInputPanel: boolean = false;

  onInc() {
    this.itemsCount++;
    this.showAddBtn = false;
    this.showInputPanel = true;
  }

  onDec() {
    if (this.itemsCount > 1) {
      this.itemsCount--;
    } else {
      this.showModal();
    }
  }

  reset() {
    this.itemsCount = 0
    this.showAddBtn = true;
    this.showInputPanel = false;
  }

  showModal() {
    let disposable = this.dialogService.addDialog(ModalComponent, {
      message: 'Are you sure you want to delete this item from your cart?'
    }).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.reset();
      } else {
        // do nothing
      }
    })
  }

}
