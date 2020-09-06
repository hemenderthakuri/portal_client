import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core'

import { useFetch } from "../../infra/hooks/useFetch";

import { JobPostInfo, JobPostResponse } from '../../models/JobPost';
import JobCard from '../../components/JobCard';




interface JobSearchProps { }

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

    jobcard: {
        padding: '20px 0'
    }

}));


const JobSearch: React.FC<JobSearchProps> = () => {
    const classes = useStyles();

    const [response, requestStatus] = useFetch<JobPostResponse>(`candidate/jobs`, JobPostResponse);
    const [applyResopnse, applyRequestStatus] = useFetch<JobPostResponse>(`candidate/jobs`, JobPostResponse);
    //skipping the loading of spinner . We will implement it using useffect and requestStatus
    return (
        <div className={classes.root}>
            <div style={{ display: 'flex' }}>
                <label className={classes.title}>Search Jobs</label>
            </div>

            <Grid container>
                {response && response.jobs && response.jobs.length > 0 ?
                    (
                        response.jobs.map((item: JobPostInfo) => (
                            <Grid key={item.id} className={classes.jobcard} xs={12} item>
                                <JobCard info={item} type="candidate" />
                            </Grid>
                        ))
                    ) :
                    (<Grid className={classes.jobcard} xs={12} item>
                        <Typography paragraph>No Job available</Typography>
                    </Grid>)
                }

            </Grid>

        </div>
    );
}

export default JobSearch;