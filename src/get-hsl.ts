import seedrandom from 'seedrandom';

/**
 * @example
 * const { color } = getHSL({ for: 'cjld2cjxh0000qzrmn831i7rn' });
 */
export const getHSL = (params: {
  for: string;
  hue?: number;
  saturation?: number;
  lightness?: number;
  alpha?: number;
}) => {
  // Make a predictable pseudorandom number generator
  let rng;
  if (params.for) {
    rng = seedrandom(params.for.toString());
  } else {
    throw new Error(
      'The "for" value must be a string you want to receive a unique color for'
    );
  }

  // A hue is specified as an angle within the color wheel
  let hue = Math.floor(rng() * 360);
  if (params.hue && params.hue >= 0 && params.hue <= 360) {
    hue = params.hue;
  } else if (params.hue) {
    throw new Error(
      `The "hue" value must be a number between 0 and 360, value given was ${params.hue}`
    );
  }

  // 100% is full saturation, and 0% is a shade of gray
  let saturation = Math.floor(rng() * 100);
  if (params.saturation && params.saturation >= 0 && params.saturation <= 100) {
    saturation = params.saturation;
  } else if (params.saturation) {
    throw new Error(
      `The "saturation" value must be a number between 0 and 100, value given was ${params.saturation}`
    );
  }

  // 100% lightness is white, 0% lightness is black, and 50% lightness is “normal”
  let lightness = Math.floor(rng() * 100);
  if (params.lightness && params.lightness >= 0 && params.lightness <= 100) {
    lightness = params.lightness;
  } else if (params.lightness) {
    throw new Error(
      `The "lightness" value must be a number between 0 and 100, value given was ${params.lightness}`
    );
  }

  // Alpha represents the color's transparency
  let alpha = 1;
  if (params.alpha && params.alpha >= 0 && params.alpha <= 1) {
    alpha = params.alpha;
  } else if (params.alpha) {
    throw new Error(
      `The "alpha" value must a number between 0 and 1, value given was ${params.alpha}`
    );
  }

  // The color created in HSL format
  const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;

  return { color, hue, saturation, lightness, alpha };
};
