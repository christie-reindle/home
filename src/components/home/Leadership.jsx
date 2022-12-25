import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message }) => {
  return (
    <Jumbotron
      id="portfolio"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div style={{
          position: "relative",
          width: "100%",
          paddingTop: "53%",
          overflow: "hidden",
          textAlign:"center",
        }}>
      <iframe style={{
        position: "absolute",
        top: "-1%",
        left: "1%",
        width: "100%",
        height: "107%",
      }}
      src="https://docs.google.com/presentation/d/e/2PACX-1vSfLduvSOeT2Q1VzKxLAQUU1pBxEUpIg5I1qBRtAX1HTJHz9c2det6UGlrwsPqSGQ/embed?start=true&loop=true&delayms=3000&amp;rm=minimal" width="1270" height="750"></iframe>
      </div>
      <p className="lead">{message}</p>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
