import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazUserAPage } from './interfaz-user-a.page';

describe('InterfazUserAPage', () => {
  let component: InterfazUserAPage;
  let fixture: ComponentFixture<InterfazUserAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterfazUserAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
