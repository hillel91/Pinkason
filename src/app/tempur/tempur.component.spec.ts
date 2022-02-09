import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempurComponent } from './tempur.component';

describe('TempurComponent', () => {
  let component: TempurComponent;
  let fixture: ComponentFixture<TempurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
