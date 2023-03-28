const ArticlesList=({articlesProp}) => {
return (
    <div>
        {articlesProp.map((article) =>(
            <div>
                <h2>{article.title}</h2>
            </div>
        ))}
    </div>
)
}

export default ArticlesList;