import { BtnFlatDirective } from './btn-flat.directive';
import { TestBed, async } from '@angular/core/testing';

describe('BtnFlatDirective', () => {
  it('should create an instance', () => {
    const directive = new BtnFlatDirective(undefined, undefined);
    expect(directive).toBeTruthy();
  });
});
