import ImageCard from '@/components/ImageCard';
import Pagination from '@/components/Pagination';
import {imageItems} from '@/types';
import {getImageData} from '@/utils'
import styles from './page.module.css'

export default async function Home() {
  const {totalPage, characterList} = await getImageData(1);
  const renderImages = () => {
    return characterList?.map((elem: imageItems, index: number) => (
      <ImageCard elem={elem} index={index} key={elem.id}/>
    ))
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Rick and Morty Image Feeder</h1>
      <div className={styles.container}>
        {characterList ? renderImages() : <p>Loading..</p>}
      </div>
      {totalPage && <Pagination totalPage={totalPage} activePage={0} />}
    </main>
  )
}
