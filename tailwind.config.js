/** @type {import('tailwindcss').Config} */

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  fontSize: {
    xs: ['12px', '20px'],
    sm: ['14px', '24px'],
    base: ['16px', '24px'],
    lg: ['18px', '30px'],
    xl: ['20px', '28px'],
    '2xl': ['24px', '38px'],
    '3xl': ['30px', '36px'],
    '4xl': ['36px', '52px'],
    '5xl': ['48px', '60px'],
    '6xl': ['60px', '1'],
    '7xl': ['72px', '90px'],
    '8xl': ['96px', '1'],
    '9xl': ['128px', '1'],
    '10xl': ['192px', '1'],
    '11xl': ['256px', '1'],
  },
  extend: {
    fontFamily: {
      distant: ['SF Distant Galaxy', 'sans-serif']
    },
    screens: {
      '3xl': '2160px',
      '4xl': '3000px',
      '5xl': '4096px',
    },
  },
};
export const plugins = [];
