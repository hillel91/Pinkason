import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtempComponent } from './chtemp.component';

describe('ChtempComponent', () => {
  let component: ChtempComponent;
  let fixture: ComponentFixture<ChtempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChtempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
