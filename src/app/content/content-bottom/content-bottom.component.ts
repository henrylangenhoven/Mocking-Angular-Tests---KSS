import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../../list.service';
import { Item } from '../../item.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content-bottom',
  templateUrl: './content-bottom.component.html',
  styleUrls: ['./content-bottom.component.css'],
})
export class ContentBottomComponent implements OnInit {
  list: Observable<Item[]>;
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.list = this.listService.list.pipe(
      map((list) => list.filter((item) => item.listId === 'bottom'))
    );
  }

  moveItemLeft(item: Item) {
    this.listService.updateListId(item, 'left');
  }

  moveItemRight(item: Item) {
    this.listService.updateListId(item, 'right');
  }

  deleteItem(item: Item) {
    this.listService.deleteItem(item);
  }
}
