import React from "react";
import {IconBtn, Heading} from '../../Templates'
import AppHeader from '../AppHeader';
import './DetailView.scss'

const DetailView = props => {
    const backBtn = <IconBtn icon="arrow_back" handleClick={() => props.switchView("home")} />,
        heading = <Heading text={props.params.name} />;

    return (
        <div className="DetailView">
            {props.logo}
            <AppHeader leftCol={backBtn} middleCol={heading} />

            <div className="details-card-wrapper" tabIndex="1">
                <div className="details-card">
                    <div className="img-wrapper">
                        <img className="details-pic" alt="star wars" tabIndex="1" src="https://www.urbanize.com.ph/6721-big_default_2x/popsockets-star-wars-logo.jpg" />
                    </div>
                    <div className="text-wrapper">
                        <div className="details-info" tabIndex="1">
                            <ul className="attributes">
                                <li>Gender:</li>
                                <li>Age:</li>
                            </ul>
                            <ul className="values">
                                <li>{props.params.details.gender}</li>
                                <li>{props.params.details.age}</li>
                            </ul>
                        </div>
                        <div className="status">
                        <h4 className="status-label">Quotes</h4>
                        <div className="status-text">
                            {props.params.details.quote && props.params.details.quote.map( (q, id) => {
                                return <span tabIndex="1" key={id}> {q} </span>
                            } )}
                    </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailView;
