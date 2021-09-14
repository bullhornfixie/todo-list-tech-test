const sizes = {
  xs: 12,
  sm: 14,
  base: 16,
  md: 24,
  lg: 36,
  xl: 42,
  xxl: 48,
  xxxl: 64,
}

const breakpoints = {
  largeDesktop: 1200,
  desktop: 992,
  tablet: 767,
  phablet: 480,
  phone: 320,
}

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  blue: '#3137fd',
  purple: '#B431FF',
  yellow: '#FFFF00',
  grey: '#d3d3d3',
  turquoise: '#40E0D0',
  transparent: 'rgba(255,255,255,0)',
  overlay: 'rgba(00,00,00,0.5)',
}

const easing = {
  hover: 'all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s',
  default: '0.6s ease-in 0s',
  bezier: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
}

const transitions = {
  offset: '100',
  delay: '300',
}

const coverImage = {
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const font = {
  family: {
    body: 'DM Sans, Arial, sans-serif',
    heading: 'DM Sans, Arial, sans-serif',
    mono: 'Inconsolata, monospace',
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineheights: {
    body: 1.5,
    heading: 1.1,
  },
}

const spacing = {
  xs: '3vh',
  sm: '5vh',
  md: '7vh',
  lg: '9vh',
  xl: '11vh',
}

export { 
  breakpoints, 
  colors, 
  coverImage, 
  easing, 
  font, 
  sizes, 
  transitions,
  spacing,
}
