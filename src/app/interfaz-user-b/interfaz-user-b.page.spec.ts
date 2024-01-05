import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazUserBPage } from './interfaz-user-b.page';

describe('InterfazUserBPage', () => {
  let component: InterfazUserBPage;
  let fixture: ComponentFixture<InterfazUserBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterfazUserBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
