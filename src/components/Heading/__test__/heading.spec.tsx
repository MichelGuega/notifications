import React from 'react';
import { render } from '@utils/test-utils';
import Heading from '..';

describe('Heading', () => {
  it('Should render Heading correctly', () => {
    const { getByTestId } = render(
      <Heading testID="heading">any_text</Heading>
    );

    const heading = getByTestId('heading');

    expect(heading).not.toBeNull();
    expect(heading.props.style[0].fontSize).toEqual(32);
    expect(heading.props.style[0].color).toEqual('#000000');
  });

  it('Should render Heading correctly with another color', () => {
    const { getByTestId } = render(
      <Heading testID="heading" color="#ffffff">
        any_text
      </Heading>
    );

    const heading = getByTestId('heading');

    expect(heading.props.style[0].color).toEqual('#ffffff');
  });
});
