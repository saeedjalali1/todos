import React,{Component} from 'react';
import '../styles/App.css';
import AppBar from 'material-ui/AppBar';

export default class TodoApp extends Component {
    render(){
        return (
            <AppBar
                className="rtl"
                title="لیست کارها"
            />
        )
    }
}