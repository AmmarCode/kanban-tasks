import { css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: ${props => props.theme.colors.neutral.veryDarkGrey};
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #FFFFFF;
    line-height: 1.5;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  #root {
    height: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.neutral.darkGrey};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.neutral.linesDark};
    border-radius: ${props => props.theme.borderRadius.s};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary.purple};
  }
`;

export default globalStyles;
