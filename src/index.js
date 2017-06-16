import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/routers.js';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    isRtl:true,
    darkBaseTheme
});
const Layout = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Routes />
    </MuiThemeProvider>
);

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
