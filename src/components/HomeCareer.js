import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css'
import './CareerHistory.css';

function HomeCareer(props) {
    console.log(props);
    const career = props.HomeCareer;
    const tab = career.tab;
    const tabPanel = career.tabPanel;
    return (
        <div>
            <Tabs>
                <TabList>
                    {tab.map(el => {
                        return <Tab>
                            <p>{el}</p>
                        </Tab>
                    })
}
                </TabList>
                {tabPanel.map(el => {
                    const contents = [];
                    el
                        .description
                        .map(el2 => {
                            contents.push(
                                <p>{el2.indexOf("•") !== -1 || el2.indexOf("In my position") !== -1 ? el2 : null}</p>
                            );
                        })

                    return <TabPanel>
                        <table>
                            <tr>
                                <td>
                                    <span>{el.period}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>@{el.company}</span>
                                </td>
                                <td rowSpan={2}>
                                    <div className="panel-content">
                                        <div className='description'>
                                            {contents}
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </table>
                    </TabPanel>
                })
}

            </Tabs>
        </div>
    );
}

export default HomeCareer;