import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import { Item } from '../../item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content-left',
  templateUrl: './content-left.component.html',
  styleUrls: ['./content-left.component.css'],
})
export class ContentLeftComponent implements OnInit {
  list: Observable<Item[]>;
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.list = this.listService.list.pipe(
      map((list) => list.filter((item) => item.listId === 'left'))
    );
  }

  moveItemBottom(item: Item) {
    this.listService.updateListId(item, 'bottom');
  }

  moveItemRight(item: Item) {
    this.listService.updateListId(item, 'right');
  }

  deleteItem(item: Item) {
    this.listService.deleteItem(item);
  }
}
