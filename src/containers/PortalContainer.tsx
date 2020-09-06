import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import RecruiterDashboard from './recruiter/RecruiterDashboard';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import JobSearch from './candidate/JobSearch';
import CandidateApplications from './candidate/CandidateApplications';
import JobApplications from './recruiter/JobApplications';
import { useApplicationState } from '../infra/applicationState/ApplicationState';


interface PortalContainerProps { }

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },

  content: {
    flexGrow: 1,
    padding: '24px 48px'
  },


}));


const PortalContainer: React.FC<PortalContainerProps> = () => {
  const classes = useStyles();
  const { globalState } = useApplicationState();

  // We will make the routes secure by creating HOC of SecuredRoute in future
  return (
    <div className={classes.root}>
      <Router>
        <SideBar type={globalState.type} />
        <div style={{ width: '100%' }}>
          <Header />
          <main className={classes.content}>
            <Switch>
              <Route path="/applications">
                <CandidateApplications />
              </Route>
              <Route path="/dashboard">
                <RecruiterDashboard />
              </Route>
              <Route path="/jobsearch">
                <JobSearch />
              </Route>
              <Route path="/jobdetails">
                <JobApplications />
              </Route>

              <Route path="/">
                {globalState.type === "CANDIDATE" ?
                  <JobSearch /> :
                  globalState.type === "RECRUITER" ?
                    <RecruiterDashboard /> : null}
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default PortalContainer;