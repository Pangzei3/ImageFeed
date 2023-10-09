export interface imageItems {
  name: string;
  image: string;
  id: number;
}
export interface pagiEvents {
  selected: number;
}
export interface imageCardProps {
  elem: imageItems;
  index: number;
}

export interface getImageProps {
  pageNumber: number; 
}