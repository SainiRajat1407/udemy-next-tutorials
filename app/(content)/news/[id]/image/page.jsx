import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
  const newsItemSlug = params.id;
  const newsItem = await getNewsItem(newsItemSlug);
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
