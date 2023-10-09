'use client'
import ReactPaginate from 'react-paginate';
import styles from "@/app/page.module.css";
import { pagiEvents } from '@/types';
import { useRouter } from 'next/navigation';

type paginateProps = {
  totalPage: number;
  activePage: number
}

function Pagination({totalPage, activePage}: paginateProps) {
  const router = useRouter();
  async function handlePagination(e: pagiEvents) {
    const page = e.selected +1;
    router.push(`/pages/${page}`)
  }
  return (
    <>
      <ReactPaginate 
          pageCount={totalPage}
          previousLabel={'< prev'}
          nextLabel={'next >'}
          onPageChange={handlePagination}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          forcePage={activePage}

          containerClassName={styles.paginateContainer}
          pageClassName={styles.paginateBtn}
          activeClassName={styles.paginateActive}
          previousClassName={styles.prevBtn}
          nextClassName={styles.nextBtn}
          breakClassName={styles.ellipsis}
        />
    </>
  )
}

export default Pagination