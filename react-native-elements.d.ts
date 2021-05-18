type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
  export interface Colors {
    primary: string;
    light: string;
    background: string;
    border: string;
    text: string;
    altText: string;
    danger: string;
    accentGreen: string;
  }

  export interface Typography {
    fontFamily: string;
    thin: string;
    regular: string;
    bold: string;
  }

  export interface layout {
    container: object;
    absolutePos: object;
  }
}
