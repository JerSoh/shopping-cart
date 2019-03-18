import { Component, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartList: CartItem[] = [];
  itemReturned = new EventEmitter<string>();

  onItemTransferred(name: string) {
    for (let {entry, index} of this.cartList.map((entry, index) => 
      ({ entry, index }))) {
      if (name === entry.name) {
        this.cartList[index].amount++;
        return;
      }; 
    };
    this.cartList.push(new CartItem(
      name, 1));
  }

  onItemRemoved(name: string) {
    this.itemReturned.emit(name);
  }
}
