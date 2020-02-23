import { getHSL } from '../src';

describe('getHSL', () => {
  it('returns an object', () => {
    const value = getHSL({ for: 'hello' });
    expect(value).toHaveProperty('color');
    expect(value).toHaveProperty('hue');
    expect(value).toHaveProperty('saturation');
    expect(value).toHaveProperty('lightness');
    expect(value).toHaveProperty('alpha');
  });

  describe('with custom `hue`', () => {
    it('returns custom `hue` value', () => {
      const customHue = 50;
      const { hue } = getHSL({ for: 'hello', hue: customHue });
      expect(hue).toBe(customHue);
    });

    it('throws error with bad `hue` value', () => {
      const customHue = 500;
      expect(() => {
        getHSL({ for: 'hello', hue: customHue });
      }).toThrow();
    });
  });

  describe('with custom `saturation`', () => {
    it('returns custom `saturation` value', () => {
      const customSaturation = 50;
      const { saturation } = getHSL({
        for: 'hello',
        saturation: customSaturation,
      });
      expect(saturation).toBe(customSaturation);
    });

    it('throws error with bad `saturation` value', () => {
      const customSaturation = 500;
      expect(() => {
        getHSL({ for: 'hello', saturation: customSaturation });
      }).toThrow();
    });
  });

  describe('with custom `lightness`', () => {
    it('returns custom `lightness` value', () => {
      const customLightness = 50;
      const { lightness } = getHSL({
        for: 'hello',
        lightness: customLightness,
      });
      expect(lightness).toBe(customLightness);
    });

    it('throws error with bad `lightness` value', () => {
      const customLightness = 500;
      expect(() => {
        getHSL({ for: 'hello', lightness: customLightness });
      }).toThrow();
    });
  });

  describe('with custom `alpha`', () => {
    it('returns custom `alpha` value', () => {
      const customAlpha = 0.5;
      const { alpha } = getHSL({ for: 'hello', alpha: customAlpha });
      expect(alpha).toBe(customAlpha);
    });

    it('throws error with bad `alpha` value', () => {
      const customAlpha = 500;
      expect(() => {
        getHSL({ for: 'hello', alpha: customAlpha });
      }).toThrow();
    });
  });
});
