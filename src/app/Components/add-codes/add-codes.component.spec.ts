import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCodesComponent } from './add-codes.component';

describe('AddCodesComponent', () => {
  let component: AddCodesComponent;
  let fixture: ComponentFixture<AddCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
