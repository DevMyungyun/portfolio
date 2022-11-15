import React, {Component} from 'react';
import {Responsive, WidthProvider} from "react-grid-layout";
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import styled from "styled-components";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridItemWrapper = styled.div `
  background: #f5f5f5;
`;

const GridItemContent = styled.div `
  padding: 8px;
`;

const layout = [
    {
        i: "about",
        x: 0,
        y: 0,
        w: 2.5,
        h: 1.5,
        minW: 1,
        maxW: 3
    }, {
        i: "picture",
        x: 3,
        y: 0,
        w: 2.5,
        h: 1.5,
        minW: 1,
        maxW: 3
    }, {
        i: "career",
        x: 0,
        y: 1,
        w: 2,
        h: 1,
        minW: 1,
        maxW: 2
    }, {
        i: "portfolio",
        x: 2,
        y: 1,
        w: 2,
        h: 1,
        minW: 1,
        maxW: 2
    }, {
        i: "contact",
        x: 4,
        y: 2,
        w: 1,
        h: 1
    }
];

class Home extends Component {
    render() {
        console.log(this.props);
        const contents = this.props.home;
        return (
            <div style={{"position": "relative"}}>
                <ResponsiveGridLayout
                    layouts={{
                    lg: layout
                }}
                    breakpoints={{
                    lg: 1200,
                    md: 996,
                    sm: 768,
                    xs: 480,
                    xxs: 0
                }}
                    cols={{
                    lg: 5,
                    md: 4,
                    sm: 3,
                    xs: 2,
                    xxs: 1
                }}
                    rowHeight={300}
                    width={1000}>
                    <GridItemWrapper key="about">
                        <GridItemContent>
                            {contents
                                .intro
                                .map(el => <div>
                                    <span>{el}</span><br/></div>)
}
                            {contents
                                .positions
                                .map(el => <span>{el + " / "}</span>)
}
                            {contents
                                .description
                                .map(el => <div>
                                    <span>{el}</span><br/></div>)
}
                        </GridItemContent>
                    </GridItemWrapper>
                    <GridItemWrapper key="picture">
                        <GridItemContent>picture</GridItemContent>
                    </GridItemWrapper>
                    <GridItemWrapper key="career">
                        <GridItemContent>career</GridItemContent>
                    </GridItemWrapper>
                    <GridItemWrapper key="portfolio">
                        <GridItemContent>portfolio</GridItemContent>
                    </GridItemWrapper>
                    <GridItemWrapper key="contact">
                        <GridItemContent>contact</GridItemContent>
                    </GridItemWrapper>
                </ResponsiveGridLayout>
            </div>
        );
    }
}

export default Home;