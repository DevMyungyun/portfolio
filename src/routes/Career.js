import React, { Component } from 'react';
import CareerHistory from '../components/CareerHistory';

class Career extends Component {
    render() {
        return (
            <div>
                <CareerHistory CareerHistory={this.props} />
            </div>
        );
    }
}

export default Career;