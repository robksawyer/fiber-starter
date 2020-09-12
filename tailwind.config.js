/**
 * tailwind.config.js
 *
 * Plugins
 * - TailwindCSS Transitions / https://github.com/benface/tailwindcss-transitions
 */
const { colors } = require('tailwindcss/defaultTheme')

const fontBaseSize = 14
/**
 * convertPxToEms
 * Handles converting the px to ems
 * @param {int} val is the value to be calculated
 * @param {int} baseSize is base size to base the calculations from
 */
const convertPxToEms = (val, baseSize = 14) => `${val / baseSize}em`

/**
 * @param {int} totalSizes is the total number of fonts to generate
 * @param {int} fontBaseSize is font base size to start the calculations from
 * @param {int} startingValue is the starting value (or the font sizes to skip)
 *                            ex. Not typically important to have a font size of 1px
 */
function getFontSizes(totalSizes = 330, fontBaseSize = 14, startingValue = 8) {
  // The following generates an array of increasing values from the totalSizes above.
  const fontSizeArray = Array.from(Array(startingValue + totalSizes + 1).keys())
  const fontSizeArraySliced = fontSizeArray.slice(
    startingValue,
    fontSizeArray.length
  )
  // Traverse the array and generate font sizes in ems based on the base pixel value.
  const sizes = fontSizeArraySliced.map((i, x) =>
    convertPxToEms(x, fontBaseSize)
  )
  const sizeObj = Object.assign({}, sizes)
  return sizeObj
}

// const fontSizes = getFontSizes(330, fontBaseSize, 8)

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './errors/**/*.{js,jsx,ts,tsx}',
    ],
  },
  theme: {
    screens: {
      xs: '320px',
      sm: '414px',
      md: '768px',
      mdv: {
        raw: '(orientation: portrait)',
      },
      lg: '1024px',
      lgx: '1280px',
      xl: '1440px',
      xxl: '1800px',
      xxxl: '1920px',
      xxxxl: '2560px',
    },
    scale: {
      0: '0',
      10: '.10',
      20: '.20',
      25: '.25',
      40: '.40',
      50: '.5',
      60: '.5',
      70: '.70',
      75: '.75',
      80: '.80',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      120: '1.2',
      125: '1.25',
      130: '1.3',
      140: '1.4',
      150: '1.5',
      160: '1.6',
      170: '1.7',
      175: '1.75',
      200: '2',
      480: '480px',
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      20: '20px',
      40: '40px',
      60: '60px',
      80: '80px',
      100: '100px',
      125: '125px',
      150: '150px',
      175: '175px',
      250: '250px',
      350: '350px',
      480: '480px',
      720: '720px',
      full: '100%',
    },
    maxHeight: {
      900: '900px',
    },
    textIndent: {
      // defaults to {}
      1: '0.25rem',
      2: '0.5rem',
    },
    transitionProperty: {
      // defaults to these values
      none: 'none',
      all: 'all',
      color: 'color',
      bg: 'background-color',
      border: 'border-color',
      colors: ['color', 'background-color', 'border-color'],
      opacity: 'opacity',
      transform: 'transform',
    },
    transitionDuration: {
      // defaults to these values
      default: '250ms',
      0: '0ms',
      50: '50ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      250: '250ms',
      300: '300ms',
      350: '350ms',
      400: '400ms',
      450: '450ms',
      500: '500ms',
      550: '550ms',
      600: '600ms',
      750: '750ms',
      1000: '1000ms',
    },
    transitionTimingFunction: {
      // defaults to these values
      default: 'ease',
      linear: 'linear',
      ease: 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: {
      // defaults to these values
      default: '0ms',
      0: '0ms',
      100: '100ms',
      250: '250ms',
      500: '500ms',
      750: '750ms',
      1000: '1000ms',
    },
    willChange: {
      // defaults to these values
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      opacity: 'opacity',
      transform: 'transform',
    },
    extend: {
      opacity: {
        70: '0.7',
      },
      colors: {
        transparent: 'transparent',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent0: '#d94532',
        accent1: '#f6c04d',
        accent2: '#010120',
        accent3: '#8ee8f8',
        accent4: '#f6c04d',
        brand1: '#FF4632',
        brand2: '#F573A0',
        brand3: '#1ED760',
        brand4: '#C3F0C8',
        brand5: '#FAE62D',
        brand6: '#2D46B9',
        gray: {
          ...colors.gray,
          f0: '#f0f0f0',
          f2: '#f2f2f2',
          f3: '#f3f3f3',
          f4: '#f4f4f4',
          f6: '#f6f6f6',
          fb: '#FBFBFB',
          c0: '#C0C5D2',
          c4: '#C4C4C4',
          cd: '#CDCDCD',
          d7: '#d7d7d7',
          e4: '#E4E4E4',
          e5: '#E5E5E5',
          '00': '#000000',
          '01': '#010120',
          '0e': '#0e1826',
          11: '#111111',
          13: '#132134',
          19: '#191515',
          '2e': '#2e2e2e',
          '2f': '#2f2f2f',
          31: '#313131',
          44: '#444444',
          '5a': '#5a5a5a',
          63: '#637280',
          71: '#717171',
          '9f': '#9f9f9f',
          91: '#919191',
          94: '#949494',
        },
        blue: {
          ...colors.blue,
          '00': '#003DD0',
          17: '#178EFF',
          18: '#1880e7',
          '8e': '#8ee8f8',
        },
        purple: {
          ...colors.purple,
          '1c': '#1c2137',
          37: '#37447c',
          '4b': '#4b5d9e',
          77: '#e6e6ff',
          86: '#860DFF',
          '2B': '#2B3A71',
          e6: '#e6e6ff',
        },
        orange: {
          ...colors.orange,
          f6: '#f6c04d',
          ff: '#FFCAC1',
          fc: '#FCB3A7',
        },
        red: {
          ...colors.red,
          d9: '#d94532',
          fe: '#FE0000',
          '8b': '#8b0000',
        },
        pink: {
          ...colors.pink,
          ff: '#ff4181',
          f0: '#ff004d',
        },
        green: {
          ...colors.green,
          '3b': '#3B6278',
          '5a': '#5A7E72',
          '5b': '#5BAD6F',
          be: '#BEE073',
        },
      },
      // fontFamily: {
      //   sans: ['CircularBook', 'Helvetica', 'Arial', 'sans-serif'],
      //   circular: [
      //     'Circular',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-italic': [
      //     'CircularBookItalic',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-light': [
      //     'CircularLight',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-light-italic': [
      //     'CircularLightItalic',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-book': [
      //     'CircularBook',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-book-italic': [
      //     'CircularBookItalic',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-medium': [
      //     'CircularMedium',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-medium-italic': [
      //     'CircularMediumItalic',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-bold': [
      //     'CircularBold',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-bold-italic': [
      //     'CircularBoldItalic',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-black': [
      //     'CircularBlack',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'circular-black-italic': [
      //     'CircularBlackItalic',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'udsg-bold': [
      //     'UDSGHybridBold',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'dharma-gothic': [
      //     'dharma-gothic-c',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'udshin-light': [
      //     'UDShinGoProLight',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'udshin-medium': [
      //     'UDShinGoProMedium',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      //   'udshin-regular': [
      //     'UDShinGoProRegular',
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     '"Noto Sans"',
      //     'sans-serif',
      //   ],
      // },
      borderWidth: {
        default: '1px',
        0: '0',
        '05': '.5px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.25em',
        1.4: '-1.4px',
        1.8: '-1.8px',
        14.6: '14.6px',
      },
      zIndex: {
        '-1': -1,
        0: 0,
        1: 1,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
      },
      width: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        6: '6px',
        12: '12px',
        24: '24px',
        25: '25px',
        69: '69px',
        87: '87px',
        100: '100px',
        110: '110px',
        120: '120px',
        130: '130px',
        142: '142px',
        169: '169px',
        192: '192px',
        200: '200px',
        216: '216px',
        266: '266px',
        275: '275px',
        240: '240px',
        255: '255px',
        260: '260px',
        280: '280px',
        300: '300px',
        312: '312px',
        325: '325px',
        380: '380px',
        400: '400px',
        500: '500px',
        530: '530px',
        606: '606px',
        780: '780px',
        800: '800px',
        1024: '1024px',
        1080: '1080px',
        1169: '1169px',
        1200: '1200px',
        full: '100%',
        screen: '100vw',
      },
      height: {
        '1/4': '25%',
        '3/4': '75%',
        '1/2': '50%',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        20: '20px',
        22: '22px',
        24: '24px',
        25: '25px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
        42: '42px',
        45: '45px',
        46: '46px',
        48: '48px',
        49: '49px',
        50: '50px',
        52: '52px',
        55: '55px',
        60: '60px',
        62: '62px',
        63: '63px',
        65: '65px',
        68: '68px',
        70: '70px',
        71: '71px',
        72: '72px',
        74: '74px',
        80: '80px',
        82: '82px',
        84: '84px',
        90: '90px',
        92: '92px',
        98: '98px',
        100: '100px',
        110: '110px',
        120: '120px',
        122: '122px',
        130: '130px',
        140: '140px',
        144: '144px',
        150: '150px',
        160: '160px',
        170: '170px',
        180: '180px',
        190: '190px',
        200: '200px',
        210: '210px',
        216: '216px',
        220: '220px',
        230: '230px',
        240: '240px',
        250: '250px',
        266: '266px',
        270: '270px',
        275: '275px',
        280: '280px',
        290: '290px',
        312: '312px',
        380: '380px',
        420: '420px',
        480: '480px',
        630: '630px',
        650: '650px',
        720: '720px',
        750: '750px',
        1080: '1080px',
        1200: '1200px',
        full: '100%',
        screen: '100vh',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
        '1/5': '15%',
        '1/6': '16.67%',
        '1/7': '14.285714%',
        '1/8': '12.5%',
        '3/4': '75%',
        '3/5': '60%',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        24: '24px',
        25: '25px',
        26: '26px',
        27: '27px',
        28: '28px',
        29: '29px',
        30: '30px',
        32: '32px',
        35: '35px',
        38: '38px',
        40: '40px',
        42: '42px',
        45: '45px',
        46: '46px',
        48: '48px',
        49: '49px',
        50: '50px',
        52: '52px',
        55: '55px',
        56: '56px',
        60: '60px',
        61: '61px',
        62: '62px',
        63: '63px',
        64: '64px',
        65: '65px',
        66: '66px',
        67: '67px',
        68: '68px',
        69: '69px',
        70: '70px',
        71: '71px',
        72: '72px',
        73: '73px',
        74: '74px',
        75: '75px',
        80: '80px',
        82: '82px',
        84: '84px',
        90: '90px',
        92: '92px',
        96: '96px',
        100: '100px',
        110: '110px',
        115: '115px',
        120: '120px',
        125: '125px',
        130: '130px',
        140: '140px',
        150: '150px',
        160: '160px',
        170: '170px',
        180: '180px',
        190: '190px',
        200: '200px',
        210: '210px',
        220: '220px',
        230: '230px',
        240: '240px',
        245: '245px',
        250: '250px',
        260: '260px',
        270: '270px',
        275: '275px',
        280: '280px',
        290: '290px',
        300: '300px',
        325: '325px',
        340: '340px',
        350: '350px',
        375: '375px',
        400: '400px',
        425: '425px',
        450: '450px',
        475: '475px',
        500: '500px',
        600: '600px',
        700: '700px',
        750: '750px',
        800: '800px',
        900: '900px',
      },
      lineHeight: {
        89: '.89',
        91: '.91',
      },
      inset: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        80: '80',
      },

      fontSize: {
        base: `${fontBaseSize}px`,
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        8: '8px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        25: '25px',
        30: '30px',
        31: '31px',
        32: '32px',
        35: '35px',
        38: '38px',
        40: '40px',
        42: '42px',
        45: '45px',
        48: '48px',
        50: '50px',
        53: '53px',
        58: '58px',
        60: '60px',
        65: '65px',
        68: '68px',
        70: '70px',
        75: '75px',
        76: '76px',
        78: '78px',
        80: '80px',
        89: '89px',
        90: '90px',
        95: '95px',
        100: '100px',
        110: '110px',
        115: '115px',
        120: '120px',
        130: '130px',
        140: '140px',
        160: '160px',
        190: '190px',
        250: '250px',
        275: '275px',
        300: '300px',
        330: '330px',
        340: '340px',
        350: '350px',
        400: '400px',
        420: '420px',
        490: '490px',
        520: '520px',
        600: '600px',
        730: '730px',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    fontStyle: ['responsive', 'focus', 'hover', 'active'],
    textColor: ['responsive', 'focus', 'hover', 'active'],
    borderColor: ['responsive', 'focus', 'hover', 'active'],
    willChange: ['responsive'],
  },
  plugins: [],
}
