import App from './App1.jsx';
import './App.css';
import React,{Component} from 'react';
//const Apps = () => {
    //return (
        //<div>
            
            //<h1>Hello, React App with JSX!</h1>
            //<div className='container'>
            //<img src="/example.jpeg" alt="Example" style={{ width: '300px', height: 'auto' }} />
            //</div>
            //<h1>word</h1>
        //</div>*/
        class App1 extends React.Component{
            render(){
                return(
                    <div>
                        <One/>
                        <Two/>
                        <App2/>
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
        //export default App1;

        function welcome(name){
          return<h2>Welcome to the, {name}</h2>;
        }

        class App2 extends React.Component{
            constructor(){
                super();
                this.state={
                    data:
                    [
                        {
                            "name":"Abi"
                        },
                        {
                            "name":"Sadhana"
                        },
                        {
                            "name":"Varun"
                        }
                    ]
                }
            }
            render(){
                return(
                    <div>
                        <h4>{welcome('Reactjs')}</h4>
                        <StudentName/>
                        <ul>
                            {this.state.data.map((item)=><List data={item}/>)}
                        </ul>
                        <p>{listof('Amir','Barath','charu','Mani')}</p>
                    </div>
                );
            }
        }
        class StudentName extends React.Component{
            render(){
                return(
                    <div>
                        <h1>Student Name Details</h1>
                    </div>
                );
            }
        }
        class List extends React.Component{
            render(){
                return(
                    <ul>
                        <li>{this.props.data.name}</li>
                    </ul>
    
                );
            }
        }

        function listof(w,x,y,z){
            return <ol>
                <li>{w}</li>
                <li>{x}</li>
                <li>{y}</li>
                <li>{z}</li>
            </ol>;
        }
        export default App1;
        
    //);
//};

//export default Apps;

