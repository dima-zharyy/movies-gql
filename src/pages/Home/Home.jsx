import { MoviesList } from 'components';
import { Title, Container } from './Home.styled';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from 'apollo/qgl-queries';

export const Home = () => {
  const { data } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Title>Trending today</Title>
      {data?.movies && <MoviesList movies={data.movies} />}
    </Container>
  );
};
