import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazUserPage } from './interfaz-user.page';

describe('InterfazUserPage', () => {
  let component: InterfazUserPage;
  let fixture: ComponentFixture<InterfazUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterfazUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
