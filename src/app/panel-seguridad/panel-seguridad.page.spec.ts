import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelSeguridadPage } from './panel-seguridad.page';

describe('PanelSeguridadPage', () => {
  let component: PanelSeguridadPage;
  let fixture: ComponentFixture<PanelSeguridadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PanelSeguridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
