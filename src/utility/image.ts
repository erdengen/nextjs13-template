export const toBase64 = (str: string) => Buffer.from(str).toString('base64');
export const fromBase64 = (str: string) => Buffer.from(str, "base64");

export const solidImage = (color: string) => `
  <svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="1" height="1" style="fill:rgb(0,0,0);stroke-width:3;stroke:rgb(0,0,0)" />
  </svg>
`;

export const base64SolidImage = (color: string) => toBase64(solidImage(color));