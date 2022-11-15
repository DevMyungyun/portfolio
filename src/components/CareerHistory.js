import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './CareerHistory.css';

function CareerHistory(props) {
    console.log(props);
    const career = props.CareerHistory.career;
    const tab = career.tab;
    const tabPanel = career.tabPanel;
    return (
        <div className="App">
      <Tabs>
        <TabList>
            {
                tab.map(el => {
                return <Tab><p>{el}</p></Tab>
})     
            }
        </TabList>
{
    tabPanel.map(el => {
        return <TabPanel>
        <div className="panel-content">
          {el.description}<br></br>
        </div>
      </TabPanel>
    })
}
       
      </Tabs>
      </div>
    );
}

export default CareerHistory;