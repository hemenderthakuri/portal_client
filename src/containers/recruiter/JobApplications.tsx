import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core'

import { useFetch } from "../../infra/hooks/useFetch";
import { useApiRequest } from "../../infra/hooks/useApiRequest";
import { JobPostResponse, JobPostInfo } from '../../models/JobPost';
import { ApplicationInfo, ApplicationResponse } from '../../models/Application';

import ApplicationCard from '../../components/ApplicationCard';
import JobCard from '../../components/JobCard';


interface JobApplicationsProps { }

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


const JobApplications: React.FC<JobApplicationsProps> = () => {
  const classes = useStyles();

  let state = JSON.stringify(useLocation().state);
  let jobId = JSON.parse(state).jobId;

  const [response, action, requestStatus] = useApiRequest<ApplicationResponse>("GET", `recruiter/jobs/application/${jobId}`, ApplicationResponse);
  const [jobResponse, jobRequestStatus] = useFetch<JobPostResponse>(`recruiter/jobs/${jobId}`, JobPostResponse);

  const handleRefresh = () => {
    action.makeRequest();
  }

  useEffect(() => {
    action.makeRequest();
  }, [])

  //skipping the loading of spinner . We will implement it using useffect and requestStatus
  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        <label className={classes.title}>Take Action on Applications for this Job</label>
      </div>
      {jobResponse.job ?
        <div style={{ margin: '20px 0' }}>
          <JobCard info={jobResponse.job} /></div> : null}

      {response.applications ?
        <h2>Total Applications received ({response.applications.length})</h2> : null}

      <Grid container>

        {response.applications && response.applications.length > 0 ?
          (
            response.applications.map((item: ApplicationInfo) => (
              <Grid key={item.id} className={classes.appCard} xs={12} item>
                <ApplicationCard info={item} type="recruiter" onUpdate={handleRefresh} />
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

export default JobApplications;