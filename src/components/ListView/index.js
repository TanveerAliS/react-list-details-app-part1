import React from "react";
import { orderBy } from 'lodash';
import {RightIcon} from '../../Templates'
import './ListView.scss';

const ListView = ({isLinkItem = false, isShowDate=false, isSortList, chronOrder=false, episodePrefix, collection, titleField, dateField, dateLabel, handleClick, sortField }) => {

    const sortList = sortField => orderBy(collection, [sortField], ["asc"])

    const linkItem = item => {
            const params = {
                details: item.details,
                name: item.name,
                id: item.id
            };
            return <a href="#" onClick={() => handleClick(params)}>{item[titleField]} </a>
        };

    const itemDate = item => (
        <p className="list-item-content secondary-text">
            {dateLabel}{" "}
        </p>
    )

    const collectionData = isSortList ? sortList(sortField) : collection;

    const displayList = collectionData.map((item, index) => {
        let heading = item[titleField];

        if (isLinkItem) {
            heading = linkItem(item);
        } else if (episodePrefix) {
            heading = <span> {item.episode_prefix}: {item[titleField]}</span>
        }

        return (
            <li key={index} className="List helper-centered flex-row flex-centered flex-vertical-middle">
                <div className="flex-main-content">
                <h2 className="list-item-header"><RightIcon/>{heading}</h2>
                {isShowDate ? itemDate(item) : null}
                </div>
            </li>
        );
    });

    return <ul className="listView">{displayList}</ul>;
};

export default ListView;

