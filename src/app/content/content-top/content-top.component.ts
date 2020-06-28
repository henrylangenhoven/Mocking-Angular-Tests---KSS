import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.css'],
})
export class ContentTopComponent implements OnInit {
  itemText: any;
  selectedRadioButtonValue: 'left' | 'right' | 'bottom' = 'left';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  add() {
    this.listService.addToList(this.itemText, this.selectedRadioButtonValue);
  }
}
