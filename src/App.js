import {Box} from "@chakra-ui/react";
import {Route, Switch} from "wouter";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";

import {getProducts} from "./redux/productsSlice";
import Home from "./views/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./views/cart";
import Details from "./views/details/components/ProductDetails";

function App() {
  //const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
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
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;
