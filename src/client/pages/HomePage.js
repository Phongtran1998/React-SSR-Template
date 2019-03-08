import React from "react";
import { Header } from "semantic-ui-react";
const Home = () => {
  return (
    <div style={{ marginTop: "200px", textAlign: "center" }}>
      <Header color="blue" as="h1">
        Welcome
      </Header>
      <p>Checkout our awesome feature</p>
    </div>
  );
};

export default { component: Home };
