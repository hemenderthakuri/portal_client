import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core'

import { useFetch } from "../../infra/hooks/useFetch";

import { ApplicationInfo, ApplicationResponse } from '../../models/Application';
import ApplicationCard from '../../components/ApplicationCard';


interface CandidateApplicationsProps { }

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },

  title: {
    fontSize: 26,
    lineHeight: '46px',
    color: '#3E3E3E',
    fontWeight: 'bold',
    letterSpacing: 0.39

  },
  btn: {
    marginLeft: 10,
    height: 36,
    paddingRight: 20
  },

  appCard: {
    padding: '20px 0'
  }

}));


const CandidateApplications: React.FC<CandidateApplicationsProps> = () => {
  const classes = useStyles();

  const [response, requestStatus] = useFetch<ApplicationResponse>(`candidate/applications`, ApplicationResponse);
  //skipping the loading of spinner . We will implement it using useffect and requestStatus

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        <label className={classes.title}>Track your Applications</label>
      </div>

      <Grid container>

        {response.applications && response.applications.length > 0 ?
          (
            response.applications.map((item: ApplicationInfo) => (
              <Grid key={item.id} className={classes.appCard} xs={12} item>
                <ApplicationCard info={item} />
              </Grid>
            ))
          ) :
          (<Grid className={classes.appCard} xs={12} item>
            <Typography paragraph>No Job Application found. Apply on Jobs to start</Typography>
          </Grid>)
        }

      </Grid>

    </div>
  );
}

export default CandidateApplications;