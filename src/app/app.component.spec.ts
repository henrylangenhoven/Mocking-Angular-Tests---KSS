import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, Input } from '@angular/core';
import { Item } from './item.model';

// example of a standard mocked component // add to declarations
@Component({ selector: 'app-header', template: '<div></div>' })
class MockHeaderComp {
  @Input() item: Item;
}

@Component({ selector: 'app-content', template: '<div></div>' })
class MockContentComp {
  @Input() item: Item;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mocks-kss'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mocks-kss');
  });
});
