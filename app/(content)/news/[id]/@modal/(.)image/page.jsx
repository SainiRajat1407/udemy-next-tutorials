import ModalBackdrop from "@/components/modal-backdrop";
import { getAllNews } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.id;
  const newsItem = await getAllNews(newsItemSlug);
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
