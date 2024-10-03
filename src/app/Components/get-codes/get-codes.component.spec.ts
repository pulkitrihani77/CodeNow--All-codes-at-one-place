import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCodesComponent } from './get-codes.component';

describe('GetCodesComponent', () => {
  let component: GetCodesComponent;
  let fixture: ComponentFixture<GetCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
