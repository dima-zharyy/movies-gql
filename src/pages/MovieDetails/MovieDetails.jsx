import { Details, Loader } from 'components';
import { Suspense } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { Container } from './MovieDetails.styled';
import { GET_DETAILS } from 'apollo/qgl-queris';
import { useQuery } from '@apollo/client';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(GET_DETAILS, {
    variables: { id: +movieId },
    onError: error => {
      if (error) {
        navigate('/', { replace: true });
      }
    },
  });

  return (
    <main>
      <Container>
        {data?.details && <Details movieDetails={data?.details} />}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};
