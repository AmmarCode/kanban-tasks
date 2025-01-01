export const darkTheme = {
  colors: {
    primary: {
      purple: '#635FC7',
      purpleHover: '#A8A4FF',
      red: '#EA5555',
      redHover: '#FF9898'
    },
    neutral: {
      black: '#000112',
      veryDarkGrey: '#20212C',    // Main background
      darkGrey: '#2B2C37',        // Sidebar, header, cards
      mediumGrey: '#828FA3',
      linesDark: '#3E3F4E',
      linesLight: '#E4EBFA',
      white: '#FFFFFF'
    },
    text: {
      dark: '#FFFFFF',
      medium: '#828FA3',
      light: '#000112'
    },
    gradients: {
      newColumn: 'linear-gradient(180deg, rgba(43, 44, 55, 0.25), rgba(43, 44, 55, 0.125))'
    }
  },
  typography: {
    heading: {
      xl: {
        fontSize: '24px',
        lineHeight: '30px',
        fontWeight: 'bold'
      },
      l: {
        fontSize: '18px',
        lineHeight: '23px',
        fontWeight: 'bold'
      },
      m: {
        fontSize: '15px',
        lineHeight: '19px',
        fontWeight: 'bold'
      }
    },
    body: {
      l: {
        fontSize: '13px',
        lineHeight: '23px',
        fontWeight: 'medium'
      },
      m: {
        fontSize: '12px',
        lineHeight: '15px',
        fontWeight: 'medium'
      }
    }
  },
  borderRadius: {
    s: '4px',
    m: '6px',
    l: '8px',
    full: '24px'
  },
  spacing: {
    xs: '4px',
    s: '8px',
    m: '12px',
    l: '16px',
    xl: '24px',
    xxl: '32px'
  }
};

export const lightTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    neutral: {
      ...darkTheme.colors.neutral,
      veryDarkGrey: '#F4F7FD',  // Main background
      darkGrey: '#FFFFFF',      // Sidebar, header, cards
      linesDark: '#E4EBFA',
    },
    text: {
      ...darkTheme.colors.text,
      dark: '#000112',
      medium: '#828FA3',
      light: '#FFFFFF'
    },
    gradients: {
      ...darkTheme.colors.gradients,
      newColumn: 'linear-gradient(180deg, rgba(99, 95, 199, 0.05), rgba(99, 95, 199, 0.02))'
    }
  }
};
