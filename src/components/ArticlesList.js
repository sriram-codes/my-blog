import React from 'react'
import { Link } from 'react-router-dom'

const ArticlesList = ({articles}) =>  (
        <>
            {articles.map((article,key) => (
            <Link key={key} className="article-list-item" to={`/article/${article.name}`}>
            <h4>{article.title}</h4>
            <p>{article.content[0].substring(0, 120)}...</p>
        </Link>
        
    ))}
        </>
    );

export default ArticlesList;
