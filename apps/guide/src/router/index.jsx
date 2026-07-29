import { Route, Routes } from 'react-router-dom';
import GuideLayout from '@/layouts/GuideLayout.jsx';
import DocView from '@/views/DocView.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GuideLayout />}>
        <Route index element={<DocView />} />
        <Route path="getting-started" element={<DocView />} />
        <Route path="design-tokens" element={<DocView />} />
        <Route path="components/:slug" element={<DocView />} />
      </Route>
    </Routes>
  );
}
