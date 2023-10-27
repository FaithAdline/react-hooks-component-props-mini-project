// src/components/Article.js

import React from 'react';

function Article(props) {
  const { title, date, preview } = props;
  
  // Calculate minutes to read and determine the emoji
  const minutesToRead = Math.ceil(preview.split(' ').length / 200); // Assuming 200 words per minute
  const coffeeCups = '☕️'.repeat(Math.ceil(minutesToRead / 5));
  const bentoBoxes = '🍱'.repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview}</p>
      {minutesToRead <= 30 ? (
        <span>{coffeeCups} {minutesToRead} min read</span>
      ) : (
        <span>{bentoBoxes} {minutesToRead} min read</span>
      )}
    </article>
  );
}

export default Article;



