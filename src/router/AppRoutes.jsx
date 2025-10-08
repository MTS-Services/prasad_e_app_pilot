import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/common/Layout';
import { DashboardLayout } from '../components/common/DashboardLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotAuthorizedPage from '../pages/NotAuthorizedPage';
import NotFoundPage from '../pages/NotFoundPage';

// Dashboard Components
import AdminDashboard from '../components/dashboards/AdminDashboard';
import EmployeeDashboard from '../components/dashboards/EmployeeDashboard';
import FieldAgentDashboard from '../components/dashboards/FieldAgentDashboard';
import MarketingDashboard from '../components/dashboards/MarketingDashboard';

// Admin Components
import Complaints from '../components/admin/components/Complaints';
import DroneOperators from '../components/admin/components/DroneOperators';
import Employees from '../components/admin/components/Employees';
import FieldAgents from '../components/admin/components/FieldAgents';
import Jobs from '../components/admin/components/Jobs';
import Payments from '../components/admin/components/Payments';
import Reports from '../components/admin/components/Reports';
import Users from '../components/admin/components/Users';

// Employee Components
import EmployeeProfile from '../components/employee/Profile';
import EmployeeReports from '../components/employee/Reports';
import EmployeeSchedule from '../components/employee/Schedule';
import EmployeeTraining from '../components/employee/Training';
import EmployeeMessages from '../components/employee/Messages';
import MyTasks from '../components/employee/MyTasks';

// Field Agent Components
import FieldAgentReports from '../components/fieldAgent/Reports';
import MyAssignments from '../components/fieldAgent/MyAssignments';
import LocationTracking from '../components/fieldAgent/LocationTracking';
import PhotoCapture from '../components/fieldAgent/PhotoCapture';
import RouteOptimization from '../components/fieldAgent/RouteOptimization';
import VehicleManagement from '../components/fieldAgent/VehicleManagement';

// Marketing Components
import Analytics from '../components/marketing/Analytics';
import Campaigns from '../components/marketing/Campaigns';
import ContentManagement from '../components/marketing/ContentManagement';
import EmailMarketing from '../components/marketing/EmailMarketing';
import SocialMedia from '../components/marketing/SocialMedia';
import Audience from '../components/marketing/Audience';

// Private Route Components
import {
  PrivateRoute,
  PrivateAdminRoute,
  PrivateEmployeeRoute,
  PrivateFieldAgentRoute,
  PrivateMarketingRoute,
} from './PrivateRoute';
import { RoleBasedRedirect } from './RoleBasedRedirect';

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/unauthorized',
        element: <NotAuthorizedPage />,
      },
      {
        path: '/dashboard',
        element: <RoleBasedRedirect />,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <PrivateAdminRoute>
        <DashboardLayout />
      </PrivateAdminRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: 'complaints',
        element: <Complaints />,
      },
      {
        path: 'drone-operators',
        element: <DroneOperators />,
      },
      {
        path: 'employees',
        element: <Employees />,
      },
      {
        path: 'field-agents',
        element: <FieldAgents />,
      },
      {
        path: 'jobs',
        element: <Jobs />,
      },
      {
        path: 'payments',
        element: <Payments />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/employee',
    element: (
      <PrivateEmployeeRoute>
        <DashboardLayout />
      </PrivateEmployeeRoute>
    ),
    children: [
      {
        index: true,
        element: <EmployeeDashboard />,
      },
      {
        path: 'profile',
        element: <EmployeeProfile />,
      },
      {
        path: 'reports',
        element: <EmployeeReports />,
      },
      {
        path: 'schedule',
        element: <EmployeeSchedule />,
      },
      {
        path: 'training',
        element: <EmployeeTraining />,
      },
      {
        path: 'messages',
        element: <EmployeeMessages />,
      },
      {
        path: 'tasks',
        element: <MyTasks />,
      },
    ],
  },
  {
    path: '/field-agent',
    element: (
      <PrivateFieldAgentRoute>
        <DashboardLayout />
      </PrivateFieldAgentRoute>
    ),
    children: [
      {
        index: true,
        element: <FieldAgentDashboard />,
      },
      {
        path: 'reports',
        element: <FieldAgentReports />,
      },
      {
        path: 'assignments',
        element: <MyAssignments />,
      },
      {
        path: 'location-tracking',
        element: <LocationTracking />,
      },
      {
        path: 'photo-capture',
        element: <PhotoCapture />,
      },
      {
        path: 'route-optimization',
        element: <RouteOptimization />,
      },
      {
        path: 'vehicle-management',
        element: <VehicleManagement />,
      },
    ],
  },
  {
    path: '/marketing',
    element: (
      <PrivateMarketingRoute>
        <DashboardLayout />
      </PrivateMarketingRoute>
    ),
    children: [
      {
        index: true,
        element: <MarketingDashboard />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'campaigns',
        element: <Campaigns />,
      },
      {
        path: 'content-management',
        element: <ContentManagement />,
      },
      {
        path: 'email-marketing',
        element: <EmailMarketing />,
      },
      {
        path: 'social-media',
        element: <SocialMedia />,
      },
      {
        path: 'audience',
        element: <Audience />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export { AppRoutes };
