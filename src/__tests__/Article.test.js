import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from '../components/Article';

// Ensure the toBeInTheDocument matcher is available
import '@testing-library/jest-dom/extend-expect';

describe('Article Component', () => {
  test('renders the Article component with props', () => {
    const articleProps = {
      title: 'Sample Article',
      date: '2023-10-26',
      preview: 'This is a sample article preview.',
    };

    render(<Article {...articleProps} />);

    expect(screen.getByText(articleProps.title)).toBeInTheDocument();
    expect(screen.getByText(articleProps.date)).toBeInTheDocument();
    expect(screen.getByText(articleProps.preview)).toBeInTheDocument();
  });

  test('renders the default date if no date prop is provided', () => {
    const articleProps = {
      title: 'Sample Article',
      preview: 'This is a sample article preview.',
    };

    render(<Article {...articleProps} />);

    expect(screen.getByText('January 1, 1970')).toBeInTheDocument();
  });

  test('correctly calculates "Minutes to Read" and displays emojis', () => {
    const articleProps = {
      title: 'Sample Article',
      date: '2023-10-26',
      preview: 'This is a longer article preview with more words for testing.',
    };

    render(<Article {...articleProps} />);

    const words = articleProps.preview.split(' ').length;
    const expectedMinutesToRead = Math.ceil(words / 200);

    // Define the expected emoji text
    const expectedEmojiText = `${'☕️'.repeat(Math.ceil(expectedMinutesToRead / 5))} ${expectedMinutesToRead} min read`;

    // Use the regular text matcher to find the emoji text
    expect(screen.getByText(expectedEmojiText)).toBeInTheDocument();
  });
});

  












