import React from "react";
import {ContentBlock} from '../../Templates';
import HomeView from '../HomeView/';
import ListView from '../ListView/';
import DetailView from '../DetailView/';
import './AppViews.scss'

const AppViews = props => {
    const logo = (
        <div className="AppViews helper-full-width helper-centered">
            <img
            tabIndex="1"
            src={props.data.images.logo}
            className="logo"
            alt="star wars"
            title="star wars"
            />
        </div>
        ),
    displayView = view => {
      const contentList = (
          <ListView
            collection={props.contentData}
            titleField={"title"}
            isShowDate={true}
            isSortList={true}
            {...props}
          />
        ),
        detailContent = (
          <ContentBlock contentReady={props.dataReady} content={contentList} />
        ),
        views = {
          home: <HomeView {...props} logo={logo} />,
          details: (
            <DetailView
              {...props}
              content={detailContent}
              logo={logo}
            />
          )
        };
      return views[view];
    };

  return displayView(props.view);
};

export default AppViews;