import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229444.6560225639!2d-98.43628884455707!3d26.031175568491687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866509e70b1ab591%3A0x4568c85f5cba4884!2sReynosa%2C%20Tamaulipas!5e0!3m2!1sen!2smx!4v1660778232070!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
