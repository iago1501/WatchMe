export {memo} from 'react'
import { Button } from './Button';
import { GenreResponseProps } from '../App'
import { memo } from 'react';

interface SidebarProps{
  genres: GenreResponseProps[]
  selectedGenreId: number
  handleClickButton(genreId: number): void
}

const SideBar = ({genres, selectedGenreId, handleClickButton}: SidebarProps) => {
  
  
  return(
  
  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
)
}

export default memo(SideBar, (prevProps, nextProps) => {
  return prevProps.selectedGenreId !== nextProps.selectedGenreId
})