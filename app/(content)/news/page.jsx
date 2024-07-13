
import NewsList from "@/components/news-llst";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  //   const response = await fetch("http://localhost:8080/news");
  //   const news = await response.json();
  // if(!response.ok){
  //   throw new Error("Something went wrong while fetching news")
  // }
  const news = await getAllNews();
  return (
    <div id="news">
      <h1>News Page</h1>
      <NewsList news={news}/>
    </div>
  );
}
