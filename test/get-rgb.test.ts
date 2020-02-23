import { getRGB } from '../src';

describe('getRGB', () => {
  it('returns an object', () => {
    const value = getRGB({ for: 'hello' });
    expect(value).toHaveProperty('color');
    expect(value).toHaveProperty('red');
    expect(value).toHaveProperty('green');
    expect(value).toHaveProperty('blue');
    expect(value).toHaveProperty('alpha');
  });

  describe('with custom `red`', () => {
    it('returns custom `red` value', () => {
      const customRed = 50;
      const { red } = getRGB({ for: 'hello', red: customRed });
      expect(red).toBe(customRed);
    });

    it('throws error with bad `red` value', () => {
      const customRed = 500;
      expect(() => {
        getRGB({ for: 'hello', red: customRed });
      }).toThrow();
    });
  });

  describe('with custom `green`', () => {
    it('returns custom `green` value', () => {
      const customGreen = 50;
      const { green } = getRGB({ for: 'hello', green: customGreen });
      expect(green).toBe(customGreen);
    });

    it('throws error with bad `green` value', () => {
      const customGreen = 500;
      expect(() => {
        getRGB({ for: 'hello', green: customGreen });
      }).toThrow();
    });
  });

  describe('with custom `blue`', () => {
    it('returns custom `blue` value', () => {
      const customBlue = 50;
      const { blue } = getRGB({ for: 'hello', blue: customBlue });
      expect(blue).toBe(customBlue);
    });

    it('throws error with bad `blue` value', () => {
      const customBlue = 500;
      expect(() => {
        getRGB({ for: 'hello', blue: customBlue });
      }).toThrow();
    });
  });

  describe('with custom `alpha`', () => {
    it('returns custom `alpha` value', () => {
      const customAlpha = 0.5;
      const { alpha } = getRGB({ for: 'hello', alpha: customAlpha });
      expect(alpha).toBe(customAlpha);
    });

    it('throws error with bad `alpha` value', () => {
      const customAlpha = 500;
      expect(() => {
        getRGB({ for: 'hello', alpha: customAlpha });
      }).toThrow();
    });
  });
});
