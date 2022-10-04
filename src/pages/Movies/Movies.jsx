import { useSearchParams } from 'react-router-dom';
import { SearchBar, MoviesList, notify } from 'components';
import { Container } from './Movies.styled';
import { useQuery } from '@apollo/client';
import { SEARCH_MOVIES } from 'apollo/qgl-queries';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data } = useQuery(SEARCH_MOVIES, {
    variables: { query },
    skip: !query,
    onCompleted: data => {
      if (data?.searchMovies?.length === 0) {
        notify(`There is no result on query: ${query}`);
      }
    },
  });

  const handleSubmit = query => {
    setSearchParams({ query });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {data?.searchMovies && data?.searchMovies?.length > 0 && (
        <MoviesList movies={data.searchMovies} />
      )}
    </Container>
  );
};
