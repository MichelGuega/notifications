import React from 'react';
import { theme } from '@styles/default.theme';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

const customRender = (ui, { ...renderOptions } = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);

export * from '@testing-library/react-native';

export { customRender as render };
