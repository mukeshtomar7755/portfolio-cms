import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrivetComponent } from './login-privet.component';

describe('LoginPrivetComponent', () => {
  let component: LoginPrivetComponent;
  let fixture: ComponentFixture<LoginPrivetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPrivetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPrivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
