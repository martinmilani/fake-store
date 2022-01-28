import {Container} from "@chakra-ui/react";

import Title from "./components/Title";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Container centerContent maxW="container.sm">
      <Title />
      <ProductList />
    </Container>
  );
}

export default App;
