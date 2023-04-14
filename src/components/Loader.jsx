import React from "react";
import { Loader, Image, Segment } from "semantic-ui-react";

const LoaderMain = () => (
  <Segment
    style={{ border: "1px solid grey", padding: "2rem", borderRadius: "1rem" }}
  >
    <Loader active disabled />

    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    <div style={{ margin: "16px 0" }} />
    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);

export default LoaderMain;
