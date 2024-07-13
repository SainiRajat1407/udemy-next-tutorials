import Link from "next/link";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/news-llst";
import { Suspense } from "react";

async function FilterHeader({year, month}){
const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (month && year) {
    links = [];
  }
  if (
    (year && !availableYears.includes(year)) ||
    (month &&
      !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("invalid filter");
  }
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year
              ? `/archive/${year}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}


async function FilteredNews({ year, month }) {
  let news;

  if(year && !month
  ){
    news = await getNewsForYear(year);
  }
  else if(year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }
  
  let newsContent = <p>No news found</p>; // setting up fallback content

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
 return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<>Loading filter...</>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      
      <Suspense fallback={<><h1>Fetching data....</h1></>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
      
    </>
  );
}
