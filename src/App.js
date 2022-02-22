import {Box} from "@chakra-ui/react";
import {Route, Switch} from "wouter";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";

import {auth} from "./firebase";
import {getProducts} from "./redux/productsSlice";
import {saveUser} from "./redux/userSlice";
import Home from "./views/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./views/cart";
import Details from "./views/details/";
import NotFound from "./views/notFound";
import Register from "./views/register";
import Login from "./views/login";
import Checkout from "./views/checkout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            dispatch(
              saveUser({
                email: currentUser.email,
                uid: currentUser.uid,
              }),
            );
          } else {
            dispatch(saveUser(null));
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box background="gray.50">
      <NavBar />
      <Switch>
        <Route path="/details/:id">{(params) => <Details id={params.id} />}</Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;
