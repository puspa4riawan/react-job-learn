import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Jobs from './pages/Jobs';
import AddJob from './pages/AddJob';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<Jobs />} />
      {/* <Route path="add-job" element={<AddJob />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
)
);

function App() {
  return <RouterProvider router={router} />
}

export default App