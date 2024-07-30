import Link from "next/link";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationBar({
  currentPage,
  totalPages,
}: PaginationBarProps) {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 5));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberredPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page++) {
    numberredPageItems.push(
      <Link
        href={"?page=" + page}
        key={page}
        className={
          'join-item btn ${currentPage === page ? "btn-active pointer-events-none" : ""}'
        }
      >
        {page}
      </Link>
    );
  }

  return (
    <>
      <div className="join hidden sm:block">{numberredPageItems}</div>
      <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link href={"?pages" + (currentPage - 1)} className="btn join-item">
            «
          </Link>
        )}
        <button className="join-item btn pointer-events-none">
          Page {currentPage}{" "}
        </button>
        {currentPage < totalPages && (
          <Link href={"?pages" + (currentPage - 1)} className="btn join-item">
            »
          </Link>
        )}
      </div>
    </>
  );
}
