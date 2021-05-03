import { invalid } from '@angular/compiler/src/render3/view/util';
import { TestBed, inject } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should ...', inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service).toBeTruthy();
  }))

  it('Deve garantir que 1 + 4 = 5', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
  }))

  it('Deve gatantir que 5 - 3 = 2', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(5, 3, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(2);
  }))

  it('Deve garantir que 12 / 2 = 6',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(12, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(6);
  }))   

  it('Deve garantir que 5 * 5 = 25', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(5, 5, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(25);
  }))

  it('Deve retornar 0 para operação invalida', 
    inject([CalculadoraService], (service: CalculadoraService) => {
        let opInvalida = service.calcular(2, 3, '%');
        expect(opInvalida).toEqual(0);
    }))
  
});
