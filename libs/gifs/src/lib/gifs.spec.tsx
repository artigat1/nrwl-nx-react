import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Gifs from './gifs';

describe(' Gifs', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Gifs />);
    expect(baseElement).toBeTruthy();
  });
});
