const { gql } = require('@apollo/client');

export const GET_MOVIES = gql`
  query {
    movies {
      id
      poster_path
      title
    }
  }
`;

export const SEARCH_MOVIES = gql`
  query searchMovies($query: String!) {
    searchMovies(query: $query) {
      id
      poster_path
      title
    }
  }
`;

export const GET_DETAILS = gql`
  query details($id: Int!) {
    details(id: $id) {
      title
      overview
      vote_average
      genres {
        id
        name
      }
      poster_path
    }
  }
`;

export const GET_CAST = gql`
  query credits($id: Int!) {
    credits(id: $id) {
      id
      profile_path
      name
      character
    }
  }
`;

export const GET_REVIEWS = gql`
  query reviews($id: Int!) {
    reviews(id: $id) {
      id
      author
      updated_at
      content
    }
  }
`;
