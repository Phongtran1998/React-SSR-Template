import React from "react";
import { Button, Container } from "semantic-ui-react";
const Home = () => {
  return (
    <Container>
      <div>I am the best home component</div>
      <Button onClick={() => console.log("click me")}>Click me</Button>
      <img src={require("../assets/Untitled1.png")} />
    </Container>
  );
};

export default Home;
