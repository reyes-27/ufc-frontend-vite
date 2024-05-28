import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EventDetail from './pages/EventDetail.jsx';
import EventsPage from './pages/Events.jsx';
import RankingPage from './pages/RankingPage.jsx';
import FighterPage from './pages/FighterPage.jsx';
import FeedListPage from './pages/FeedListPage.jsx';
import FeedDetailPage from './pages/FeedDetailPage.jsx';
import Root from './routes/root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedListPage />
  },
  {
    path: "/event/:id/",
    element: <EventDetail />,
  },
  {
    path: "/events/",
    element: <EventsPage />,
  },
  {
    path: "/events/:q/",
    element: <EventsPage />,
  },
  {
    path:"/fighter/:slug/",
    element: <FighterPage />,
  },
  {
    path:"/rankings/",
    element: <RankingPage />,
  },
  // {
  //   path:"/feed/",
  //   element: <FeedListPage />,
  // },
  {
    path:"/post/:id/",
    element: <FeedDetailPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
