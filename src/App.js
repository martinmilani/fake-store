import {Box, Container} from "@chakra-ui/react";

import Title from "./components/Title";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Box background="gray.50">
      <Container maxW="container.lg">
        <Title />
        <ProductList />
      </Container>
    </Box>
  );
}

export default App;
