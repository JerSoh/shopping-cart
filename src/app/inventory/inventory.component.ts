import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Output() itemWasSelected = new EventEmitter<string>();
  @Input() return: EventEmitter<string>;

  inventory: Item[] = [
    new Item(
      'Orange',
      8,
      'https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
    new Item(
      'Red Grapes',
      10,
      'https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
    new Item(
      'Watermelon',
      3,
      'https://images.pexels.com/photos/8331/watermelon-theme-layers.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
    new Item(
      'Kiwi',
      7,
      'https://images.pexels.com/photos/1557276/pexels-photo-1557276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
    new Item(
      'Banana',
      5,
      'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
  ];

  ngOnInit() {
    this.return.subscribe(
      (item) => {
        for (let i of this.inventory)
          if (i.name == item) {
            i.amount++;
          }
      }
    );
  }

  onItemSelected(item: Item, index: number) {
    if (item.amount > 0) {
      this.itemWasSelected.emit(item.name);
      this.inventory[index].amount--;
    }
  }

}
