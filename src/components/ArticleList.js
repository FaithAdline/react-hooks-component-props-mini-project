// ArticleList.js
import React from 'react';
import Article from './Article';

function ArticleList(props) {
  return (
    <main>
      {props.articles.map((article, index) => (
        <Article key={index} title={article.title} date={article.date} preview={article.preview} />
      ))}
    </main>
  );
}

export default ArticleList;






