import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBottomComponent } from './content-bottom.component';
import { ListService } from '../../list.service';
import { EMPTY, of } from 'rxjs';

describe('ContentBottomComponent', () => {
  let component: ContentBottomComponent;
  let fixture: ComponentFixture<ContentBottomComponent>;
  let listService: ListService; // TODO Example 1: Properly mocked service

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentBottomComponent],
      providers: [
        {
          provide: ListService,
          useValue: jasmine.createSpyObj('ListService', {
            list: of(EMPTY),
            updateListId: () => {},
            deleteItem: () => {},
          }),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBottomComponent);
    component = fixture.componentInstance;
    listService = TestBed.inject(ListService as any);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
