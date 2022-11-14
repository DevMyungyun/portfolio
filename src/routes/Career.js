import React, { Component } from 'react';
import CareerHistory from '../components/CareerHistory';

class Career extends Component {
    render() {
        return (
            <div>
                <h1>This is Career Page</h1>
                <CareerHistory CareerHistory={this.props} />
            </div>
        );
    }
}

export default Career;