import React from 'react';
import { render, screen } from '@testing-library/react';
import EditInput from '.';

describe('EditInput', () => {
  it('should have subtitle', () => {
    render(<EditInput subtitle="Document" />);
    expect(screen.getByText('Document')).toHaveTextContent('Document');
  });
});
