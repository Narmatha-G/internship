import React from "react";
class Apps extends React.Component{
    render(){
        return(
            <div>
                <One/>
                <Two/>
            </div>

        );
    }
}
class One extends React.Component{
    render(){
        return(
            <div>
                <h1>Top Tech Developers</h1>
                <h2>toptechdevelopers.in</h2>
                <p>Quality Digital Internship Services You Really Needed!</p>
            </div>
        );
    }
}
class Two extends React.Component{
    render(){
        return(
            <div>
                <h3>IT Software Companies</h3>
                <p>Class components are more complex than functional components. It requires you to extend from React.</p>
            </div>
        );
    }
}
export default Apps;