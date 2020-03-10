import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { Directive, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

/* @Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()' }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
} */

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  const USERS = [
    {
      id: 1,
      userName: 'newUser',
      emailAddress: 'filgr@gmail.com',
      birthDate: new Date('2020-02-29T23:00:00.000Z')
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.componentInstance.users = USERS;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
