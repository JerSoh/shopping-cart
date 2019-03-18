import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartItems: CartItem[];
  @Output() itemWasRemoved = new EventEmitter<string>();

  onRemove(item: CartItem, index: number) {
    this.itemWasRemoved.emit(item.name);
    this.cartItems[index].amount--;
    if (this.cartItems[index].amount === 0) {
      this.cartItems.splice(index, 1);
    }
  }

}
