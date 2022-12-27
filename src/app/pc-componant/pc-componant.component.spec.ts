import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcComponantComponent } from './pc-componant.component';

describe('PcComponantComponent', () => {
  let component: PcComponantComponent;
  let fixture: ComponentFixture<PcComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
