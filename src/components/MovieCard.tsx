import { Star, Clock } from "react-feather";
import { MovieProps } from "../App";

import "../styles/movie-card.scss";

interface MovieCardProps {
  movie: MovieProps;
}

export function MovieCard({ movie }: MovieCardProps) {
  
  const {
    Poster: poster,
    Ratings: ratings,
    Runtime: runtime,
    Title: title,
  } = movie;

  const rating = ratings[0].Value

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
