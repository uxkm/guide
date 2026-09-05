import SignupPage from './pages/SignupPage.jsx';
import ThemeToggle from './demo/ThemeToggle.jsx';
import { Router } from './router/index.jsx';
import HomePage from './pages/HomePage.jsx';
import ComponentsPage from './pages/ComponentsPage.jsx';
import BasicPage from './pages/components/BasicPage.jsx';
import LayoutPage from './pages/components/LayoutPage.jsx';
import FormPage from './pages/components/FormPage.jsx';
import NavigationPage from './pages/components/NavigationPage.jsx';
import DataDisplayPage from './pages/components/DataDisplayPage.jsx';
import FeedbackPage from './pages/components/FeedbackPage.jsx';
import MiscellaneousPage from './pages/components/MiscellaneousPage.jsx';

const routes = {
  '/': HomePage,
  '/signup': SignupPage,
  '/components': ComponentsPage,
  '/components/basic': BasicPage,
  '/components/layout': LayoutPage,
  '/components/form': FormPage,
  '/components/navigation': NavigationPage,
  '/components/data-display': DataDisplayPage,
  '/components/feedback': FeedbackPage,
  '/components/miscellaneous': MiscellaneousPage,
};

export default function App() {
  return (
    <>
      <ThemeToggle />
      <Router routes={routes} fallback={HomePage} />
    </>
  );
}
