import React from "react";

function Home (props) {
    const contents = props.home;    
    return (
        <div>
            <div className="Intro">
            { contents.intro.map((el, i) => 
                <p key={i}>{el}</p>
            )}
            </div>
            <div className="Positions">
            { contents.positions.map((el, i) => 
                <p key={i}>{el}</p>
            )}
            </div>
            <div className="Description">
            { contents.description.map((el, i) => 
                <p key={i}>{el}</p>
            )}
            </div>
            {/* <span>Hello!</span><br />
            <span>I am Joseph Cho</span> */}
        </div>
    );
}

export default Home;