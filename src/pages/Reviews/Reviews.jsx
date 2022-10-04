import { useQuery } from '@apollo/client';
import { ReviewsList } from 'components';
import { useParams } from 'react-router-dom';
import { GET_REVIEWS } from 'apollo/qgl-queries';

export const Reviews = () => {
  const { movieId } = useParams();

  const { data } = useQuery(GET_REVIEWS, {
    variables: {
      id: +movieId,
    },
  });

  return <>{data?.reviews && <ReviewsList reviews={data.reviews} />}</>;
};
