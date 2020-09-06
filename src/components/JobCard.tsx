import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications'

import { makeStyles, Theme } from "@material-ui/core";

import {
    Card, CardActionArea, CardContent, CardActions,
    Typography, IconButton, Button, Chip, Snackbar
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import WorkIcon from '@material-ui/icons/Work';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShareIcon from '@material-ui/icons/Share';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { JobPostInfo } from '../models/JobPost';
import { useApiRequest } from "../infra/hooks/useApiRequest";
import { ApplicationResponse } from "../models/Application";


interface JobCardProps {
    info: JobPostInfo,
    type?: 'candidate' | 'recruiter' | 'none'
}


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        maxWidth: 850,
    },

    btn: {
        height: 36,
        paddingRight: 20
    },

    chip: {
        margin: 5,
        height: 25,
        minWidth: 60
    },

    iconTitle: {
        lineHeight: '24px',
        marginLeft: 15,
        marginRight: 25
    }


}));

function getPostedDate(d: Date) {
    var diff = Math.abs(Math.floor((new Date().getTime() - new Date(d).getTime()) / (1000 * 3600 * 24)));
    if (diff === 0) {
        return "Posted Today";
    } else if (diff === 1) {
        return "Posted Yesterday";
    } else {
        return "Posted " + diff + " days ago";
    }
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const JobCard: React.FC<JobCardProps> = ({ info, type = 'none' }) => {
    const classes = useStyles();
    const { addToast } = useToasts();
    const routerHistory = useHistory();

    const [applyResponse, applyAction, applyRequestStatus] = useApiRequest("GET", `candidate/apply/${info.id}`, ApplicationResponse);

    const handleJobApply = () => {
        applyAction.makeRequest();
    }

    const handleViewApplications = () => {
        routerHistory.push('/jobdetails', { jobId: info.id });
    }

    useEffect(() => {
        if (!applyRequestStatus.isPending) {
            if (applyRequestStatus.message !== "" && applyRequestStatus.hasError) {
                addToast(applyRequestStatus.message, { appearance: 'error' });
            } else if (applyRequestStatus.message !== "" && !applyRequestStatus.hasError) {
                addToast(applyRequestStatus.message, { appearance: 'success' });
            }
        }
    }, [applyRequestStatus]);

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {info.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {info.description}
                        </Typography>
                        <div style={{ marginTop: 10 }}>
                            {
                                info.keywords.split(",").map((skill: string) => (
                                    <Chip key={skill} className={classes.chip} label={skill} />
                                ))
                            }
                        </div>
                        <div style={{ display: 'flex', marginTop: 20 }}>
                            <WorkIcon />
                            <div className={classes.iconTitle}>{`${info.experienceMin} - ${info.experienceMax} Years`}</div>
                            <AttachMoneyIcon />
                            <div className={classes.iconTitle}>{`${formatter.format(info.salaryMin)} - ${formatter.format(info.salaryMax)}`}</div>
                            <LocationOnIcon />
                            <div className={classes.iconTitle}>{`${info.location}`}</div>
                        </div>

                        <Typography style={{ float: 'right' }} variant="body2" color="textSecondary" component="p">
                            {getPostedDate(info.createdOn)}
                        </Typography>


                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1 }}></div>
                    {type === 'candidate' ?
                        <Button className={classes.btn} variant="contained" color="primary" onClick={handleJobApply}>Apply for Job</Button> : null}
                    {type === "recruiter" ?
                        <Button className={classes.btn} variant="contained" color="primary" onClick={handleViewApplications}>View Applications</Button> : null}
                </CardActions>
            </Card>
        </>
    )
}
export default JobCard;
