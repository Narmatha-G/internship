import App from './App.jsx';
import Header from './Header';
import './App.css';
import Component from './Example.jsx';
const Apps = () => {
    return (
        <div>
            <Header />
            <h1>Hello, React App with JSX!</h1>
            <div className='container'>
            <img src="/example.jpeg" alt="Example" style={{ width: '300px', height: 'auto' }} />
            </div>
            <Component />
            <h1>word</h1>
        </div>
    );
};

export default Apps;
