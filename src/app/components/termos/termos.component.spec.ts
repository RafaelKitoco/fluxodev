import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosComponent } from './termos.component';

describe('TermosComponent', () => {
  let component: TermosComponent;
  let fixture: ComponentFixture<TermosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermosComponent]
    });
    fixture = TestBed.createComponent(TermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
