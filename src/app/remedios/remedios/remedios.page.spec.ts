import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemediosPage } from './remedios.page';

describe('RemediosPage', () => {
  let component: RemediosPage;
  let fixture: ComponentFixture<RemediosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RemediosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
