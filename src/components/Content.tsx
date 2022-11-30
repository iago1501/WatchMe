import { MovieCard } from "./MovieCard";
import { GenreResponseProps, MovieProps } from "../App";

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">          
          {movies.map( movie => {
            const movieValues = {...movie}
            return(
              <MovieCard key={movie.imdbID} movie={movieValues}
            />
            )            
          })}
        </div>
      </main>
    </div>
  );
}
