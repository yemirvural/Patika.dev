import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import EventDetail from './pages/Event/EventDetail.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/:id",
    element: <EventDetail />,
    errorElement: <ErrorPage />,
  },
]);


root.render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>,
);