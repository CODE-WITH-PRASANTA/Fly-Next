import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EventIcon from '@mui/icons-material/Event';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import CreateBlog from '../../Components/CreateBlog/CreateBlog';
import EditBlog from '../../Components/EditBlog/EditBlog';
import AddBookingDetails from '../../Components/AddBookingDeatils/AddBookingDeatils';
import EditBookingDetails from '../../Components/EditBookingDetails/EditBookingDetails';
import AddLuxuryDeals from '../../Components/AddLuxuryDeals/AddLuxuryDeals';
import ViewLuxuryDeals from '../../Components/ViewLuxuryDeals/ViewLuxuryDeals';
import CreateUpdate from '../../Components/CreateUpdate/CreateUpdate';
import ManageUpdates from '../../Components/ManageUpdates/ManageUpdates';
import ClientsBookingDetails from '../../Components/ClientsBookingDetails/ClientsBookingDetails';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon style={{ color: '#1976d2' }} />, 
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Blog Management',
  },
  {
    segment: 'create-blog',
    title: 'Create Blog',
    icon: <CreateIcon style={{ color: '#43a047' }} />, 
  },
  {
    segment: 'edit-blog',
    title: 'Manage Blog',
    icon: <EditIcon style={{ color: '#ffa726' }} />, 
  },
  {
    segment: 'view-blogs',
    title: 'View Blogs',
    icon: <VisibilityIcon style={{ color: '#d32f2f' }} />, 
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Manage Booking Info',
  },
  {
    segment: 'add-booking',
    title: 'Add Booking Details',
    icon: <EventIcon style={{ color: '#673ab7' }} />, 
  },
  {
    segment: 'edit-booking',
    title: 'Edit Booking Details',
    icon: <EditIcon style={{ color: '#ff5722' }} />, 
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Manage Luxury Deals',
  },
  {
    segment: 'add-luxury-deals',
    title: 'Add Luxury Deals',
    icon: <LocalOfferIcon style={{ color: '#9c27b0' }} />, 
  },
  {
    segment: 'view-luxury-deals',
    title: 'View Deals Data',
    icon: <VisibilityIcon style={{ color: '#00bcd4' }} />, 
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Give Updates',
  },
  {
    segment: 'create-updates',
    title: 'Create Updates',
    icon: <AnnouncementIcon style={{ color: '#ff9800' }} />, 
  },
  {
    segment: 'manage-updates',
    title: 'Manage Updates',
    icon: <EditIcon style={{ color: '#4caf50' }} />, 
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Clients Booking Data',
  },
  {
    segment: 'clients-booking-data',
    title: 'Clients Booking Data',
    icon: <EventIcon style={{ color: '#3f51b5' }} />, 
  },
  {
    kind: 'divider',
  },
];

const demoTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '100% !important',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        .css-t3xolk {
          width: auto !important;
        }
      `,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
    matches: (path) => pathname === path,
  }), [pathname]);

  return router;
}

export default function DashboardLayoutBasic({ window }) {
  const router = useDemoRouter('/dashboard');
  const demoWindow = typeof window !== "undefined" ? window() : undefined;

  return (
    <ThemeProvider theme={demoTheme}>
      <div className="dashboard-wrapper">
        <AppProvider
          navigation={NAVIGATION}
          router={router}
          theme={demoTheme}
          window={demoWindow}
        >
          <DashboardLayout>
            <PageContainer>
              {router.pathname === '/dashboard' && <AdminDashboard />}
              {router.pathname === '/create-blog' && <CreateBlog />}
              {router.pathname === '/edit-blog' && <EditBlog /> }
              {router.pathname === '/view-blogs' && <div>View Blogs Section</div>}
              {router.pathname === '/add-booking' && <AddBookingDetails />}
              {router.pathname === '/edit-booking' && <EditBookingDetails />}
              {router.pathname === '/add-luxury-deals' && <AddLuxuryDeals />}
              {router.pathname === '/view-luxury-deals' && <ViewLuxuryDeals />}
              {router.pathname === '/create-updates' && <CreateUpdate />}
              {router.pathname === '/manage-updates' && <ManageUpdates />}
              {router.pathname === '/clients-booking-data' && <ClientsBookingDetails />}
            </PageContainer>
          </DashboardLayout>
        </AppProvider>
      </div>
    </ThemeProvider>
  );
}
