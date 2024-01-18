
import React from 'react';
import { MovieList } from '../../page1/components/movies';
import { SelectedMovie } from '../../page2/component/selectedMoviePage';

const ParentComponent = () => {
  const nav = (
    <nav className='navListElements'>
      <img
        className='movieLogo'
        src="https://th.bing.com/th?id=OIP.HYkwHkkaBsGSnIsLJFZ79QHaFf&w=290&h=215&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
        alt=""
      />
      <ul>
        <li>All Shows</li>
        <li>Movies</li>
        <li>TV shows</li>
        <li>People</li>
      </ul>
    </nav>
  );

  return (
    <>
      <MovieList nav={nav} />
      <SelectedMovie nav={nav}/>
      {/* other components or routes */}
    </>
  );
};

export default ParentComponent;
