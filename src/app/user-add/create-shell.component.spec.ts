import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShellComponent } from './create-shell.component';

describe('CreateShellComponent', () => {
  let component: CreateShellComponent;
  let fixture: ComponentFixture<CreateShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
