import React, { useState, useEffect } from 'react';
import { useGlobalStyles } from './Theme/globalStyles';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Login from './containers/Login';
import PortalContainer from './containers/PortalContainer';
import { useApiRequest } from './infra/hooks/useApiRequest';
import { useApplicationState } from './infra/applicationState/ApplicationState';
import { UserResponse } from './models/Users';


interface AppProps { }

const useStyles = makeStyles((theme: Theme) => ({
  root: {},

  logo: {
    position: 'absolute',
    fontSize: 100,
    fontWeight: 'bold',
    padding: 30,
    color: '#3e3e3e',
    zIndex: -1
  }

}));


const App: React.FC<AppProps> = () => {
  useGlobalStyles();
  const classes = useStyles();
  const [authenticated, setAuthenticated] = useState(false);
  const [response, action, requestStatus] = useApiRequest("GET", `auth/me`, UserResponse);

  const { globalState } = useApplicationState();
  const handleSuccess = () => {
    action.makeRequest();
  }

  useEffect(() => {
    if (!requestStatus.isPending && response instanceof UserResponse) {

      globalState.firstName = response.user.firstName;
      globalState.lastName = response.user.lastName;
      globalState.type = response.user.type;
      setAuthenticated(true);
    }
  }, [response, requestStatus]);

  useEffect(() => {
    action.makeRequest();
  }, []);

  return (
    <div>
      {!authenticated && localStorage.getItem('accessToken') == null ?
        <div style={{ margin: 50 }}>
          <span className={classes.logo}>l o G o</span>
          <Login onSuccess={handleSuccess} />
        </div>
        : <PortalContainer />}

    </div>
  );
}

export default App;