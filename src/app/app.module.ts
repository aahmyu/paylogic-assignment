import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { AddToCart } from '../add-to-cart/add-to-cart.component';
import { ShoppingCart } from '../shopping-cart/shopping-cart.component';
import { InputPanel } from '../input-panel/input-panel.component';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToCart,
    ShoppingCart,
    InputPanel,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
