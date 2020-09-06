import React, { useEffect } from "react";
import { useToasts } from 'react-toast-notifications'

import { makeStyles, Theme } from "@material-ui/core";

import {
    Card, CardActionArea, CardContent, CardActions,
    Typography, Stepper, Step, StepLabel, Button
} from '@material-ui/core';

import { useApiRequest } from '../infra/hooks/useApiRequest';
import { ApplicationInfo, ApplicationResponse } from "../models/Application";


interface ApplicationCardProps {
    info: ApplicationInfo,
    type?: 'candidate' | 'recruiter',
    onUpdate?: () => void
}

const steps = ["APPLICATION_SUBMITTED", "APPLICATION_VIEWED", "APPLICANT_CONTACTED", "APPLICATION_PROCCESSED", "APPLICATION_APPROVED"]

const action = ["None", "View Application", "Contact Candidate", "Process Application", "Approve Application"];

function getActiveStep(status: string) {
    return steps.indexOf(status);
}

function getLabel(d: Date, posted: boolean) {
    var diff = Math.floor((new Date().getTime() - new Date(d).getTime()) / (1000 * 3600 * 24));
    if (diff === 0) {
        return posted ? "Applied Today" : "Last Updated Today";
    } else if (diff === 1) {
        return posted ? "Applied Yesterday" : "Last Updated Yesterday";
    } else {
        return posted ? "Applied " + diff + " days ago" : "Last Updated " + diff + " days ago";
    }
}

function getActionLabel(status: string) {
    let index = steps.indexOf(status);
    if (index < action.length - 1) {
        return action[index + 1];
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        maxWidth: 850,
    },

    btn: {
        height: 36,
        paddingRight: 20
    },

    rejected: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        border: '1px solid red',
        padding: 10,
        borderRadius: 5
    }

}));



const ApplicationCard: React.FC<ApplicationCardProps> = ({ info, type = "candidate", onUpdate }) => {
    const classes = useStyles();
    const { addToast } = useToasts();

    const [response, action, requestStatus] = useApiRequest("POST", `recruiter/application/status/${info.id}`, ApplicationResponse);


    const handleStatus = () => {
        action.makeRequest({ status: steps[getActiveStep(info.status) + 1] });
    }

    const handleReject = () => {
        action.makeRequest({ status: "APPLICATION_REJECTED" });
    }

    useEffect(() => {
        if (!requestStatus.isPending) {
            if (requestStatus.message !== "" && requestStatus.hasError) {
                addToast(requestStatus.message, { appearance: 'error' });
            } else if (requestStatus.message !== "" && !requestStatus.hasError) {
                addToast(requestStatus.message, { appearance: 'success' });
                if (onUpdate) {
                    onUpdate();
                }
            }
        }
    }, [requestStatus]);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {type === "candidate" ? info.job.title : (info.candidate.firstName + " " + info.candidate.lastName)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {type === "candidate" ? info.job.description : info.candidate.email}
                    </Typography>

                    <Stepper activeStep={getActiveStep(info.status)}>
                        <Step>
                            <StepLabel >Submitted</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel >Viewed</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel >Contacted</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel >Processed</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel >Approved</StepLabel>
                        </Step>
                    </Stepper>

                    {info.status === "APPLICATION_REJECTED" ?
                        <div>
                            <span className={classes.rejected}>Rejected</span>
                        </div> : null}

                    <Typography style={{ float: 'right', marginLeft: 20 }} variant="body2" color="textSecondary" component="p">
                        {getLabel(info.updatedOn, false)}
                    </Typography>

                    <Typography style={{ float: 'right' }} variant="body2" color="textSecondary" component="p">
                        {getLabel(info.createdOn, true)}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                {type === "recruiter" && info.status !== "APPLICATION_REJECTED" && getActiveStep(info.status) < 5 ?
                    <>
                        <Button className={classes.btn} variant="contained" color="primary"
                            onClick={handleStatus}>{getActionLabel(info.status)}</Button>


                        <Button className={classes.btn} variant="outlined" color="secondary"
                            onClick={handleReject}>Reject Application</Button>
                    </> : null}
            </CardActions>
        </Card>
    )
}
export default ApplicationCard;
