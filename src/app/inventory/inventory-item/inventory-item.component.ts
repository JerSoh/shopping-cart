import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/item.model';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent {
  @Input() item: Item;
  @Output() itemSelected = new EventEmitter<void>();


  onSelected() {
    this.itemSelected.emit();
  }
}