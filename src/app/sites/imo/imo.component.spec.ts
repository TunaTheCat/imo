import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoComponent } from './imo.component';

describe('ImoComponent', () => {
  let component: ImoComponent;
  let fixture: ComponentFixture<ImoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
