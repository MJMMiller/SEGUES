import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarBPage } from './confirmar-b.page';

describe('ConfirmarBPage', () => {
  let component: ConfirmarBPage;
  let fixture: ComponentFixture<ConfirmarBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmarBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
