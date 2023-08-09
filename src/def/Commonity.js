import React from "react";

export default function Community(props){
    return(
        <>
        <div className="container-fluid my-4 text-center" style={props.mode}><h1><b>Choose Your Favourite Course</b></h1></div>
        <div className="container-fluid my-4 flex-wrap text-center" style={props.m==='light'?{color:'black', backgroundColor : '#FFF9F8', display:'flex',justifyContent:'center'}:{color:'white', backgroundColor : '#0A151F', display:'flex',justifyContent:'center'}}>
            <Line heading="Full Term Course"/>
            <Line heading="Short Course"/>
            <Line heading="Winter Camp - Event"/>
        </div>
        <div className="container-fluid my-4 text-center" style={props.mode}><h1><b>Top Teachers At Our School</b></h1></div>
        <div className="container-fluid my-4 flex-wrap text-center" style={props.m==='light'?{color:'black', backgroundColor : '#FFF9F8', display:'flex',justifyContent:'center'}:{color:'white', backgroundColor : '#0A151F', display:'flex',justifyContent:'center'}}>
            <Line heading="Harshit Nayan"/>
            <Line heading="Abhijit Kumar"/>
            <Line heading="Aditya Choudhary"/>
            <Line heading="Aakash"/>
            <Line heading="Shubham"/>
            <Line heading="Ratindra Kumar"/>
        </div>
        </>
    )
}
function Line(props){
    return(
        <>
        <div className="card my-4 mx-4" style={{width: '18rem'}}>
            <img src="/images/craft1.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div></>
    )
}