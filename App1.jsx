import App from './App1.jsx';
import './App.css';
import React, { Component } from 'react'; 
//FUNCTIONAL COMPONENT
//const Apps = () => {
    //return (
        //<div>
            //<Header />
            //<h1>Hello, React App with JSX!</h1>
            //<div className='container'>
          //  <img src="/example.jpeg" alt="Example" style={{ width: '200px', height: '200px' }} />
        //    </div>
      //      <Component />
        //
        //</div>
  //  );
//};
//class Apps extends React.Component{
    //render(){
        //return(
            //<div>
                //<One/>
                //<Two/>
            //</div>

        //);
    //}
//}
//class One extends React.Component{
    //render(){
        //return(
            //<div>
                //<h1>Top Tech Developers</h1>
                //<h2>toptechdevelopers.in</h2>
                //<p>Quality Digital Internship Services You Really Needed!</p>
            //</div>
        //);
    //}
//}
//class Two extends React.Component{
    //render(){
        //return(
            //<div>
                //<h3>IT Software Companies</h3>
                //<p>Class components are more complex than functional components. It requires you to extend from React.</p>
            //</div>
        //);
    //}
//}
//export default Apps;

//CLASS COMPONENT
//class App1 extends React.Component {  
    //constructor() {  
        // super();  
         //this.state = {  
           // data:   
            //[  
              // {             
                //  "name":"Abhi"             
               //},  
               //{            
                 // "name":"Sahana"             
               //},  
               //{    
                 // "name":"Arun"          
               //}  
            //]  
         //}  
      //}  
      //render() {  
        // return (  
          //  <div>  
            //    <h1>Class Components</h1>
              // <StudentName/>  
               //<ul>            
                 //  {this.state.data.map((item) => <List data = {item} />)}           
               //</ul>  
            //</div>  
         //);  
      //}  
   //}  
   //class StudentName extends React.Component {  
     // render() {  
       //  return (  
         //   <div>  
           //    <h1>Student Name Details</h1>  
            //</div>  
         //);  
      //}  
   //}  
   //class List extends React.Component {  
     // render() {  
       //  return (  
         //   <ul>            
           //    <li>{this.props.data.name}</li>   
            //</ul>  
         //);  
      //}  
   //}  
   //export default App1;

   // REACT STATE
   class App2 extends React.Component {  
    constructor() {  
         super();        
         this.state = { displayBio: true };  
         }  
         render() {  
             const bio = this.state.displayBio ? (  
                <div>  
                     <p><h3>ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community. ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application.</h3></p>   
               </div>  
                 ) : null;  
                 return (  
                     <div>  
                         <h1> Welcome to React Js!! </h1>  
                         { bio }   
                         <App3 />
                     </div>  
                 );  
        }  
   }  
   class App3 extends React.Component{
    constructor() {  
        super();        
        this.state = { displayLink: true };  
        }  
        render() {  
            const link = this.state.displayLink ? (  
                <div>  
                    <p><h3>
                        <a href='toptechdevelopers.in'>toptechdevelopers.in</a></h3></p>   
              </div>  
                ) : null;  
                return (  
                    <div>  
                        <h1> Welcome to Top Tech Developers!! </h1>  
                        { link }   
                    </div>  
                );  
       }
   }
   export default App2;  
   //class App4 extends React.Component{
    //constructor(){
      //super();
      //this.state={displayBio:false};
      //console.log('Component this',this);
      //this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    //}
    //toggleDisplayBio(){
      //this.setState({displayBio:!this.state.displayBio});
    //}
    //render(){
      //return(
        //<div>
          //<h1>Welcome to ReactJs...</h1>
          //{
            //this.state.displayBio?(
              //<div>
                //<p>
                  //<h4>Recatjs is one of the most popular Javascript libraray, that is used to build the User Interface.ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application.</h4>
                //</p>
                //<button onClick={this.toggleDisplayBio}>Show less</button>
              //  </div>
            //):(
              //<div>
                //<button onClick={this.toggleDisplayBio}>Show More</button>
                //   </div>
           // )
         // }
        //  <App5 />
       // </div>
        // )
    //}
   //}
   //class App5 extends React.Component{
    //constructor(){
      //super();
      //this.state={discom:false};
      //this.toggleDiscom=this.toggleDiscom.bind(this);
    //}
    //toggleDiscom(){
      //this.setState({discom:!this.state.discom});
    //}
    //render(){
      //return(
        //<div>
          //<h2>Components in ReactJs</h2>
          //{
            //this.state.discom?(
              //<div>
              //<p>
                //<h5><ol><li>Function based Component</li><li>Class based Component</li></ol></h5>
              //</p>
              //<button onClick={this.toggleDiscom}>Minimize</button>
              //</div>
            //):(
              //<button onClick={this.toggleDiscom}>Maximize</button>
            //)
          //}
        //</div>
      //)
    //}
   //}
   
   //export default App4;