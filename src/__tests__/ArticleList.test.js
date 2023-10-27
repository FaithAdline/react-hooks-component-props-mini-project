import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from '../components/ArticleList';

// Ensure the toBeInTheDocument matcher is available
import '@testing-library/jest-dom/extend-expect';

describe('ArticleList Component', () => {
  test('renders a list of articles with correct props', () => {
    const articles = [
      {
        title: 'Article 1',
        date: '2023-10-26',
        preview: 'This is a sample article preview 1.',
      },
      {
        title: 'Article 2',
        date: '2023-10-27',
        preview: 'This is a sample article preview 2.',
      },
      // Add more articles as needed
    ];

    render(<ArticleList articles={articles} />);

    // Assert that each article title, date, and preview is rendered
    articles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
      expect(screen.getByText(article.date)).toBeInTheDocument();
      expect(screen.getByText(article.preview)).toBeInTheDocument();
    });
  });
});








