import ArticlesList from "./ArticlesList";
import HighlightArticle from "./HighlightArticle";

const message="hello"


function App() {


    const articles = [
      {
        title: "React Hooks",
        content: "React Hooks are awesome!",
      },
      {
        title: "React Context",
        content: "React Context is awesome!",
      },
      {
        title: "React Router",
        content: "React Router is awesome!",
      },
    ];

    return (
      <div>
        {message}
        <p> coucou</p>
        <ArticlesList articlesProp={articles}/>
        <HighlightArticle firstArticleProp={articles[0]}/>
      </div>
  );
}

export default App;
