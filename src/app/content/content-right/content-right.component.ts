import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import { Observable } from 'rxjs';
import { Item } from '../../item.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrls: ['./content-right.component.css'],
})
export class ContentRightComponent implements OnInit {
  list: Observable<Item[]>;
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.list = this.listService.list.pipe(
      map((list) => list.filter((item) => item.listId === 'right'))
    );
  }

  moveItemLeft(item: Item) {
    this.listService.updateListId(item, 'left');
  }

  moveItemBottom(item: Item) {
    this.listService.updateListId(item, 'bottom');
  }

  deleteItem(item: Item) {
    this.listService.deleteItem(item);
  }
}
