import {imageItems} from "@/types";

export async function getImageData (pageNumber: number) {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
    .then(res => res.json())
  const totalPage = res.info.pages;
  const characterList = res.results.map((character: imageItems) => ({
    name: character.name,
    image: character.image,
    id: character.id
  }))
  return {totalPage, characterList}
}