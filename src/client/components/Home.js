import React from "react";
import { Button, Container, Header } from "semantic-ui-react";
const Home = () => {
  return (
    <Container>
      <Header color="blue" as="h1">
        I am the best home component
      </Header>
      <Button onClick={() => console.log("click me")}>Click me</Button>
    </Container>
  );
};

export default Home;
