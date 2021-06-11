import React from 'react';
import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList'

const ArticlesListPage = ({articles}) => {
    return(<>
    <h1>Article List</h1>
    <ArticlesList articles={articleContent}/>
    </>
    );
}

export default ArticlesListPage;