
import NewsList from "@/components/news-llst";

export default async function NewsPage() {
    const response = await fetch("http://localhost:8080/news");
    const news = await response.json();
  if(!response.ok){
    throw new Error("Something went wrong while fetching news")
  }

  let newsContent ;

  if(news){
    newsContent = <NewsList news={news}/>
  }
  return (
    <div id="news">
      <h1>News Page</h1>
      {newsContent}
    </div>
  );
}
