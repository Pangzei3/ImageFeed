import Image from 'next/image'
import styles from '@/app/page.module.css'
import {imageCardProps} from '@/types'

function ImageCard({elem, index}: imageCardProps) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.imageCard} >
        <Image src={elem.image} alt={elem.name} width={250} height={250} className={styles.image} priority/>
      </div>
      <p className={styles.name}>{elem.name} </p>
    </div>
  )
}

export default ImageCard