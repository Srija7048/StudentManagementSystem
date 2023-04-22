import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcomponentComponent } from './studentcomponent.component';

describe('StudentcomponentComponent', () => {
  let component: StudentcomponentComponent;
  let fixture: ComponentFixture<StudentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
