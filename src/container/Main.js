import React, { useState } from 'react';
import AppViews from '../components/AppViews/';
import Data from '../mockData';

const Main = () => {
    
    let [ view, setView] = useState('home');
    let [ params, setParams] = useState(null);
    let [ dataReady, setDataReady] = useState(true);
  
    const switchView = view => setView(view);

    const displayDetails = params => {
        setView('details');
        setDataReady(false);
        setParams(params);
    }
     
    return <AppViews
                displayDetails={displayDetails}
                dataReady={dataReady}
                switchView={switchView}
                view={view}
                params={params}
                data={Data}
            />  
}

export default Main;