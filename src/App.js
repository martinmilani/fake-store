import {Box, Container} from "@chakra-ui/react";

import Title from "./components/Title";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box background="gray.50">
      <NavBar />
      <Container maxW="container.lg">
        <Title />
        <ProductList />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
