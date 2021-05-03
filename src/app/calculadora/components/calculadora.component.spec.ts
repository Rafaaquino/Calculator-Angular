import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'calculadora works'`, () => {
    const fixture = TestBed.createComponent(CalculadoraComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('calculadora works!');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
