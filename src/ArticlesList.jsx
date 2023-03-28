const ArticlesList=({articlesProp}) => {
    const handleClick = (article) => {
        console.log(article.content);
    };




    return (
        <div>
            {articlesProp.map((article) =>(
                <div>
                    <h2>{article.title}</h2>
                    <button onClick={() => handleClick(article)}>Voir le contenu</button>
                </div>
            ))}
        </div>
    )
}

export default ArticlesList;