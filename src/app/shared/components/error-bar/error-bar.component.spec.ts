import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBarComponent } from './error-bar.component';
import { By } from '@angular/platform-browser';

describe('ErrorBarComponent', () => {
  let component: ErrorBarComponent;
  let fixture: ComponentFixture<ErrorBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display right error message in <p>', () => {
    // given
    const errorMessage = 'error';
    fixture.componentInstance.errorMessage = errorMessage;
    // when
    fixture.detectChanges();
    const retrivedErrorMessage = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    // then
    expect(retrivedErrorMessage).toBe(errorMessage);
  });
});
