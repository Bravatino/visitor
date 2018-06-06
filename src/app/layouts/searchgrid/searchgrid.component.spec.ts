import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchgridComponent } from './searchgrid.component';

describe('SearchgridComponent', () => {
  let component: SearchgridComponent;
  let fixture: ComponentFixture<SearchgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
