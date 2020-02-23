import seedrandom from 'seedrandom';

/**
 * @example
 * const { color } = getRGB({ for: 'cjld2cyuq0000t3rmniod1foy' });
 */
export const getRGB = (params: {
  for: string;
  red?: number;
  green?: number;
  blue?: number;
  alpha?: number;
}) => {
  // Make a predictable pseudorandom number generator
  let rng;
  if (params.for) {
    rng = seedrandom(params.for.toString());
  } else {
    throw new Error(
      `The "for" value must be a string you want to receive a unique color for`
    );
  }

  // The amount of red in the color
  let red = Math.floor(rng() * 255);
  if (params.red && params.red >= 0 && params.red <= 255) {
    red = params.red;
  } else if (params.red) {
    throw new Error(
      `The "red" value must be a number between 0 and 255, value given was ${params.red}`
    );
  }

  // The amount of green in the color
  let green = Math.floor(rng() * 255);
  if (params.green && params.green >= 0 && params.green <= 255) {
    green = params.green;
  } else if (params.green) {
    throw new Error(
      `The "green" value must be a number between 0 and 255, value given was ${params.green}`
    );
  }

  // The amount of blue in the color
  let blue = Math.floor(rng() * 255);
  if (params.blue && params.blue >= 0 && params.blue <= 255) {
    blue = params.blue;
  } else if (params.blue) {
    throw new Error(
      `The "blue" value must be a number between 0 and 255, values given was ${params.blue}`
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

  // The color created in RGB format
  const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return { color, red, green, blue, alpha };
};
