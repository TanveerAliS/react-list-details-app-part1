import React from "react";
import {Heading} from '../../Templates'
import AppHeader from '../AppHeader/';
import ListView from '../ListView/';

const HomeView = props => {
    const heading = <Heading text={props.data.headings.characterList} />;

    return (
        <div className="HomeView">
            {props.logo}
            <AppHeader middleCol={heading} />
            <ListView
                collection={props.data.characters}
                titleField={"name"}
                isLinkItem={true}
                handleClick={ params => props.displayDetails(params)}
            />
        </div>
    );
};

export default HomeView;