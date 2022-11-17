import React, { Component } from 'react';
import axios from 'axios';
import PortfolioList from '../components/PortfolioList';


class Portfolio extends Component {
    state = {
        isLoding: true,
        portfolios: []
    };
    getPortfolios = async () => {
        const {
            data: {
                data: {portfolios}
            }
        } = await axios.get(
            "https://github.com/DevMyungyun"
        );
        this.setState({ portfolios, isLoading: false });
    };
    componentDidMount()  {
        this.getPortfolios();
    }
    render() {
        return (
            <div>
                {this.getPortfolios}
                <h1>This is Portfolio Page</h1>
                <PortfolioList PortfolioList={this.props} />
            </div>
        );
    }  
}

export default Portfolio;