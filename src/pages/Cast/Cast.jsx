import { useParams } from 'react-router-dom';
import { Container } from './Cast.styled';
import { CastList } from 'components';
import { GET_CAST } from 'apollo/qgl-queris';
import { useQuery } from '@apollo/client';

export const Cast = () => {
  const { movieId } = useParams();
  const { data } = useQuery(GET_CAST, {
    variables: { id: +movieId },
  });

  return (
    <Container>
      {data?.credits && <CastList castInfo={data.credits} />}
    </Container>
  );
};
