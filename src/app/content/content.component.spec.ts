import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { ContentTopComponent } from './content-top/content-top.component';
import { ContentLeftComponent } from './content-left/content-left.component';
import { ContentRightComponent } from './content-right/content-right.component';
import { ContentBottomComponent } from './content-bottom/content-bottom.component';
import { FormsModule } from '@angular/forms';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent,

        ContentTopComponent, // THESE ARE NOT MOCKED OUT!! Use MockComponent instead
        ContentLeftComponent,
        ContentRightComponent,
        ContentBottomComponent,
      ],
      imports: [FormsModule], // THIS IS BAD! Mock out the dependencies
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
