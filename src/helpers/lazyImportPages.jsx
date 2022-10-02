import { lazy } from 'react';

export const Home = lazy(() =>
  import('../pages/Home/Home.jsx').then(module => ({
    ...module,
    default: module.Home,
  }))
);

export const Movies = lazy(() =>
  import('../pages/Movies/Movies.jsx').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

export const Cast = lazy(() =>
  import('../pages/Cast/Cast.jsx').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

export const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.jsx').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);

export const Reviews = lazy(() =>
  import('../pages/Reviews/Reviews.jsx').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const NotExist = lazy(() =>
  import('../pages/NotExist/NotExist.jsx').then(module => ({
    ...module,
    default: module.NotExist,
  }))
);
