import Link from "next/link";
import ImageCard from '@/components/ImageCard';
import Paginate from '@/components/Pagination';
import { imageItems } from '@/types';
import { getImageData } from '@/utils';
import styles from '../../page.module.css';

type paramsProps = {
  posts: string
}
type postProps = {
  params: paramsProps;
};

const Posts = async ( {params}: postProps ) => {
  const {totalPage, characterList} = await getImageData(parseInt(params.posts))

  const renderImages = () => {
    return characterList?.map((elem: imageItems, index: number) => (
      <ImageCard elem={elem} index={index} key={`${elem.id}-${index}`}/>
    ))
  }
  
  return (
    <main className={styles.main}>
      <Link href="/">
        <h1 className={styles.title}>Rick and Morty Images</h1>
      </Link>
      <div className={styles.container}>
        {characterList && renderImages()}
      </div>
      {totalPage && <Paginate totalPage={totalPage} activePage={parseInt(params.posts)-1} />}
    </main>
  )
}

export default Posts