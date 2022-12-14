import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css'
import './CareerHistory.css';

function importAll(r) {
    let images = {};
    r
        .keys()
        .map((item, index) => {
            images[item.replace('./', '')] = r(item);
        });
    return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

function CareerHistory(props) {
    const career = props.CareerHistory.career;
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
                                <p>{el2}</p>
                            );
                        })

                    const clientsImage = [];
                    el
                        .clientsImage
                        .map(el2 => {
                            clientsImage.push(<img src={images[el2]}/>);
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
                                    Company
                                    <img className='company-logo' src={images[el.companyImage]}/></td>
                                <td rowSpan={2}>
                                    <div className="panel-content">
                                        <div className='description'>
                                            {contents}
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </table>
                        {clientsImage.length !== 0
                            ? <div>
                                    Clients
                                    <div className='clients-banner'>
                                        {clientsImage}
                                    </div>
                                </div>

                            : null}
                    </TabPanel>
                })
}

            </Tabs>
        </div>
    );
}

export default CareerHistory;