export interface Movie {
  _id?: string;
  title: string;
  imageUrl: string;
  genre: string;
  director: string;
}

export interface MovieItemProps {
  movie: Movie;
  showSelectedMovieDetails: (title: string) => void;
}
