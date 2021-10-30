import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import MyNav from "./shared/nav/Nav";
import Footer from "./shared/footer/Footer";
import AuthProvider from "./context/AuthProvider";
import Signin from "./pages/signin/Signin";
import PrivateRoute from "./shared/privateRoute/PrivateRoute";
import BookingRoom from "./pages/bookingRoom/BookingRoom";
import MyBookings from "./pages/myBookings/MyBookings";
import NotFound from "./pages/notFound/NotFound";
import ManageAllBooking from "./pages/manageAllBooking/ManageAllBooking";
import AddNewRoom from "./pages/addNewRoom/AddNewRoom";
function App() {
  return (
    <AuthProvider>
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <PrivateRoute exact path="/bookingRoom">
            <BookingRoom />
          </PrivateRoute>
          <PrivateRoute exact path="/bookings">
            <MyBookings />
          </PrivateRoute>
          <PrivateRoute exact path="/manageAllBooking">
            <ManageAllBooking />
          </PrivateRoute>
          <PrivateRoute exact path="/manageAllBooking">
            <ManageAllBooking />
          </PrivateRoute>
          <PrivateRoute exact path="/addNewRoom">
            <AddNewRoom />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
