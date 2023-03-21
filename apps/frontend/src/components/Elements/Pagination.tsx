import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import React from "react";
import { Icon } from "./Icon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  maxPageNumbers?: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  maxPageNumbers = 5,
  onPageChange,
}: PaginationProps): JSX.Element => {
  // TODO: リファクタリング
  // 実際に表示するページ番号の数を決定する
  const pagesToShow = Math.min(totalPages, maxPageNumbers);
  // 表示するページ番号の半分を求める
  const halfOfPagesToShow = Math.floor(pagesToShow / 2);

  // 最初に表示するページ番号と最後に表示するページ番号を求める
  let firstPageToShow = currentPage - halfOfPagesToShow;
  let lastPageToShow = currentPage + halfOfPagesToShow;

  // ページ番号の表示上限を超える場合の処理
  if (pagesToShow < totalPages) {
    // 最初に表示するページ番号が1より小さい場合は、最後に表示するページ番号を修正する
    if (firstPageToShow < 1) {
      console.log(Math.abs(firstPageToShow));

      lastPageToShow += Math.abs(firstPageToShow) + 1;
      firstPageToShow = 1;
    }
    // 最後に表示するページ番号が合計ページ数より大きい場合は、最初に表示するページ番号を修正する
    else if (lastPageToShow > totalPages) {
      firstPageToShow -= lastPageToShow - totalPages;
      lastPageToShow = totalPages;
    }
  }
  // 合計ページ数以下の場合は、最初に表示するページ番号を1、最後に表示するページ番号を合計ページ数とする
  else {
    firstPageToShow = 1;
    lastPageToShow = totalPages;
  }

  // 実際に表示するページ番号のリストを作成する
  const pageNumbers = [];

  for (let i = firstPageToShow; i <= lastPageToShow; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center">
      <span>
        {currentPage !== 1 && (
          <Icon
            icon={faChevronLeft}
            className="cursor-pointer mr-2"
            onClick={() => onPageChange(currentPage - 1)}
          />
        )}
      </span>

      <ul className="flex">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={clsx(
              pageNumber === currentPage
                ? "bg-primary rounded-full text-secondary"
                : "",
              "w-7 h-7 text-center cursor-pointer mx-1"
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            <span className="text-lg">{pageNumber}</span>
          </li>
        ))}
      </ul>

      <span>
        {currentPage !== totalPages && (
          <Icon
            icon={faChevronRight}
            className="cursor-pointer ml-2"
            onClick={() => onPageChange(currentPage + 1)}
          />
        )}
      </span>
    </div>
  );
};
