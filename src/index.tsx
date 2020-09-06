import 'reflect-metadata'
import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider } from 'react-toast-notifications';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from "./Theme/theme";
import { ApplicationStateProvider } from './infra/applicationState/ApplicationState';
import globalState from './globalState';

ReactDOM.render(
    <ApplicationStateProvider state={globalState}>
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ToastProvider autoDismiss={true} autoDismissTimeout={3000} placement="bottom-right">
                    <CssBaseline />
                    <App />
                </ToastProvider>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    </ApplicationStateProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
