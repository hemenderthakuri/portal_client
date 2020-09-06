import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Typography, Grid } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import { useFetch } from "../../infra/hooks/useFetch";

import { JobPostInfo, JobPostResponse } from '../../models/JobPost';
import JobCard from '../../components/JobCard';

interface RecruiterDashboardProps { }

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

  jobcard: {
    padding: '20px 0'
  }

}));


const RecruiterDashboard: React.FC<RecruiterDashboardProps> = () => {
  const classes = useStyles();

  const [response, requestStatus] = useFetch<JobPostResponse>(`recruiter/jobs`, JobPostResponse);
  //skipping the loading of spinner . We will implement it using useffect and requestStatus
  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        <label className={classes.title}>Manage Job Posts created by you</label>
        <div style={{ flexGrow: 1 }}></div>
        <Button variant="contained" className={classes.btn} color="primary"
          startIcon={<AddOutlinedIcon />}>Job</Button>
      </div>

      <Grid container>

        {response.jobs && response.jobs.length > 0 ?
          (
            response.jobs.map((item: JobPostInfo) => (
              <Grid key={item.id} className={classes.jobcard} xs={12} item>
                <JobCard info={item} type='recruiter'/>
              </Grid>
            ))
          ) :
          (<Grid className={classes.jobcard} xs={12} item>
            <Typography paragraph>No Job Posts created by you yet. Cick Add to start</Typography>
          </Grid>)
        }

      </Grid>

    </div>
  );
}

export default RecruiterDashboard;