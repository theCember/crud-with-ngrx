import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudShellComponent } from './crud-shell.component';

describe('CrudShellComponent', () => {
  let component: CrudShellComponent;
  let fixture: ComponentFixture<CrudShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
