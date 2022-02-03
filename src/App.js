import {Box} from "@chakra-ui/react";
import {Route, Switch} from "wouter";

import Home from "./views/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Details from "./views/details/components/ProductDetails";

function App() {
  return (
    <Box background="gray.50">
      <NavBar />
      <Switch>
        <Route path="/details/:id">{(params) => <Details id={params.id} />}</Route>
        <Route component={Home} path="/" />
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;
