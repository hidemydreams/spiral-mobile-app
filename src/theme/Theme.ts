const theme = {
  colors: {
    primary: 'rgb(215, 51, 116)',
    black: 'rgb(41,41,41)',
    background: 'rgb(247,248,252)',
    accentGreen: 'rgb(86,180,129)',
    light: 'rgba(255, 255, 255)',
    grey: 'rgb(183, 188, 193)',
  },
  typography: {
    fontFamily: 'Sf Pro Rounded',
    thin: '200',
    regular: '400',
    bold: '500',
  },
  layout: {
    container: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'rgb(247,248,252)',
    },
    absolutePos: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    Button: {
      titleStyle: {
        fontFamily: 'Sf Pro Rounded',
      },
      Style: {
        borderRadius: 10,
        backgroundColor: 'black',
      },
    },
  },
};

export default theme;
