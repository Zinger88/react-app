import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {
	const articleElements = articles.map((article, index) =>
			<li style={{listStyle:"none", marginBottom: "30px"}} key = {article.id}><Article article= {article} defaultOpen = {index === 0}/></li>
		)
	return(
		<ul>
			{articleElements}
		</ul>
	)
}