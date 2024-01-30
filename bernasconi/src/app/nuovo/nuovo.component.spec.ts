import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoComponent } from './nuovo.component';

describe('NuovoComponent', () => {
  let component: NuovoComponent;
  let fixture: ComponentFixture<NuovoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuovoComponent]
    });
    fixture = TestBed.createComponent(NuovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
