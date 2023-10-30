//react testing
import React from 'react';
import { ReactDOM } from 'react';
class Gruss extends React.Component{

    render(){
        
        return <h1>Hello world</h1>
        
    }
};
ReactDOM.render(<Gruss/>,document.getElementById('taskForm'));
