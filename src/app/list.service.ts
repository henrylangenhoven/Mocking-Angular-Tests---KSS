import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  counter = 0;

  list = new BehaviorSubject<Item[]>([]);

  constructor(private http: HttpClient) {}

  addToList(value: string, list: 'left' | 'right' | 'bottom') {
    const item: Item = {
      text: value,
      id: this.counter++,
      listId: list,
      timeCreated: new Date().getTime(),
    };
    this.list.next(this.list.getValue().concat(item));

    this.http
      .get('assets/config.json')
      .pipe(take(1))
      .subscribe((value) => {
        console.log(value);
      });
  }

  updateListId(item: Item, newList: 'left' | 'right' | 'bottom') {
    const index = this.list.getValue().indexOf(item);
    this.list.getValue()[index].listId = newList;
    this.list.next(this.list.getValue());
  }

  deleteItem(item: Item) {
    const index = this.list.getValue().indexOf(item);
    this.list.getValue().splice(index, 1);
    this.list.next(this.list.getValue());
  }
}
