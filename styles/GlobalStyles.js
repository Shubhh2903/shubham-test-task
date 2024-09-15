import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  :root {
    // declare V2 CSS
    --border-transparent: rgba(29, 44, 67, 0.12);
    --transparents-opacity-8: rgba(20, 20, 31, 0.08);
    --transparents-opacity-12: rgba(20, 20, 31, 0.12);
    --transparents-opacity-48: rgba(20, 20, 31, 0.48);
    --text: #1d2c43;
    --primary: #ff6f5b;

    //Border colors
    --border-blue: #0866F5;
    --border-green:#37B982;
    --border-teal:#00B8D9;
    --border-purple:#855AEA;
    --border-steel:#A1B6E3;
    --border-orange:#FFAB00;

    //Chip colors
    --chip-purple: #F6F2FF;
    --chip-blue: #EDF4FF;
    --chip-yellow: #FFF7E9;
    --chip-gray: #ECECED;
    --chip-green: #DDFFF1;

    //additional    
    --additional-colors-purple: #855AEA;
    --additional-colors-blue: #00B8D9;
    --additional-colors-green: #E6FCFF;
    --neutral-values-gray-dark: #8c98aa;
    --neutral-values-gray-light: #aebacc;
    --light-values-light-regular: #e2e8f1;
    --light-values-light-medium: #ecf1f7;
    --light-values-light-extra: #f5f8fc;
    --light-values-white: #ffffff;
    --dark-values-dark-extra: #2e3d54;
    --dark-values-dark-regular: #4f5e75;
    --dark-values-dark-medium: #3e4d64;
    --additional-colors-purple: #855aea;
    --additional-colors-blue: #428eff;
    --additional-colors-green: #27cfb1;
    --additional-colors-green-box: #19CCA3;
    --additional-colors-yellow: #ffc666;
    --additional-colors-red: #f25773;
    --additional-colors-pink: #FFF1F4;
    --additional-colors-orange: #FFF7E9;
    --additional-colors-light-purple: #FBF9FF;
    --additional-colors-steel: #A1B6E3;
    --additional-colors-pink-old: #ff9cae;
    --light-values-white: #ffffff;
    --mid-values-gray-light: #c4c4c7;
    --dark-values-black: #14141f;
    --primary-dark-b500: #0043A6;
    --primary-default-b400: #0050C7;
    --primary-b300: #096AFF;
    --primary-b200: #378EFF;
    --primary-b100: #69AAFF;
    --primary-b75: #C8E0FF;
    --primary-b50:#F1F7FF;
    --secondary-dark-g500: #006F4A;
    --secondary-default-g400: #008B5D;
    --secondary-g300: #37B982;
    --secondary-g200: #5DDFA9;
    --secondary-g100: #83F8C7;
    --secondary-g75: #ADFADA;
    --secondary-g50: #E4FFF4;
    --grayscale-n800: #272731;
    --grayscale-n700: #3A3A43;
    --grayscale-n500: #595964;
    --grayscale-n400: #A1A1A5;
    --grayscale-n300: #C4C4C7;
    --grayscale-n200: #E3E3E4;
    --grayscale-n100: #ECECED;
    --grayscale-n50: #F6F6F6;
    --alerts-warning-light: #FFF7E9;
    --additional-colors-light-blue: #F3F8FF;
    --neutral-values-gray-dark: #8c98aa;
    --neutral-values-gray-light: #aebacc;
    --dark-values-dark-regular: #4c4c55;
    --light-values-light-regular: #e3e3e4;
    --dark-values-dark-extra: #272731;
    --dark-values-dark-medium: #3a3a43;
    --light-values-light-extra: #f6f6f6;
    --light-values-light-regular-v1: #e2e8f1;
    --light-values-light-medium-v1: #ecf1f7;
    --light-values-light-extra-v1: #f5f8fc;
    --dark-values-dark-extra-v1: #2e3d54;
    --dark-values-dark-regular-v1: #4f5e75;
    --dark-values-dark-medium-v1: #3e4d64;
    --black: #000;
  }
  body{
  }
  * {
    box-sizing: border-box;
    outline: none !important;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    font-weight: normal;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body,html {
      margin: 0;
  }
  body {
      font-family: 'Articulatcf', sans-serif;
      min-height: 100vh;
      background: #fff;
  }
html,
body {
  padding: 0;
  margin: 0;


}
  .modal-open {
    overflow: hidden;
  }

* {
  box-sizing: border-box;
}

`;

export default GlobalStyles;
