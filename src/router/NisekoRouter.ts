import type { TRouter } from "../utils/types";
import Home from "../pages/Home";
import Reservations from "../pages/Reservations";
import BookingDetailPage from "../pages/BookingDetailPage";
import Deals from "../pages/Deals";
import DealDetailPage from "../pages/DealDetailPage";
import Concierge from "../pages/Concierge";
import ConciergeDetailPage from "../pages/ConciergeDetailPage";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Not_Found from "../pages/Not_Found";
import Profile from "../pages/Profile";
import MyBookings from "../pages/MyBookings";
import Settings from "../pages/Settings";

export const unProtectedRoutes: TRouter = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/reservations",
    element: Reservations,
  },
  {
    path: "/reservation/:property_title",
    element: BookingDetailPage,
  },
  {
    path: "/deals",
    element: Deals,
  },
  {
    path: "/deals/:deal_title",
    element: DealDetailPage,
  },
  {
    path: "/concierge",
    element: Concierge,
  },
  {
    path: "/concierge/:concierge_title",
    element: ConciergeDetailPage,
  },
  {
    path: "/faq",
    element: FAQ,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/signup",
    element: SignUp,
  },
  {
    path: "*",
    element: Not_Found,
  },
];

export const protectedRoutes: TRouter = [
  {
    path: "/profile",
    element: Profile,
  },
  {
    path: "/profile/bookings",
    element: MyBookings,
  },
  {
    path: "/profile/settings",
    element: Settings,
  },
];
