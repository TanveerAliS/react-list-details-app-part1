import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHandPointRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);
library.add(faHandPointRight);

const IconBtn = ({handleClick, title, icon}) => (
    <button onClick={handleClick} title={title} alt={title} className="icon-btn btn-dflt-size">
        <FontAwesomeIcon icon="arrow-left" className="icons"/>
    </button>
);

const RightIcon = () => <FontAwesomeIcon icon="hand-point-right" className="icons"/>

const StarWarsLogo = ({image}) => (
    <img
        src={image}
        className="star-wars-logo"
        alt="Star Wars"
        title="Star Wars"
    />
);

const Heading = ({ level = "h1", text}) => React.createElement( level, { className: "helper-full-width helper-centered" }, text);

const TextBlock = ({text}) => <p className="helper-full-width helper-centered">{text}</p>

const Loading = () => <div className="loader">Loading...</div>;

const ContentBlock = ({contentReady, content}) => !contentReady ? content : <Loading />;

export { ContentBlock, Loading, TextBlock, Heading, StarWarsLogo, IconBtn, RightIcon}
