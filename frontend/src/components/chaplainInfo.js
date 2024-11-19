// src/components/ChaplainInfo.js

import React from 'react';
import { chaplainInfo } from '../constants';
import nadaPhoto from '../assets/media/ec/2022/nada.jpg';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    chaplainContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
    bioPhotoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    biography: {
        flex: 1,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
        },
    },
    chaplainPhoto: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
        boxShadow: theme.shadows[4],
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
        },
    },
    section: {
        marginBottom: theme.spacing(2),
    },
}));

const ChaplainInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.chaplainContainer}>
            {/* Name and Role */}
            <Typography variant="h4" gutterBottom>
                {chaplainInfo.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {chaplainInfo.role}
            </Typography>

            {/* Biography and Photo */}
            <div className={classes.bioPhotoContainer}>
                <div className={classes.biography}>
                    <Typography variant="body1" paragraph>
                        {chaplainInfo.biography}
                    </Typography>
                </div>
                <img
                    src={nadaPhoto}
                    alt={`${chaplainInfo.name}`}
                    className={classes.chaplainPhoto}
                    loading="lazy"
                />
            </div>

            {/* Activities */}
            <div className={classes.section}>
                <Typography variant="h5" gutterBottom>
                    Activities and Events
                </Typography>
                {chaplainInfo.activities.map((activity, index) => (
                    <div key={index} style={{ marginBottom: '16px' }}>
                        <Typography variant="subtitle1" gutterBottom>
                            <strong>{activity.title}</strong>
                        </Typography>
                        <Typography variant="body2">
                            {activity.description}
                        </Typography>
                    </div>
                ))}
            </div>

            {/* Contact Information */}
            <div className={classes.section}>
                <Typography variant="h5" gutterBottom>
                    Contact Information
                </Typography>
                <Typography variant="body1">
                    <strong>Address:</strong> {chaplainInfo.contact.address}
                </Typography>
                <Typography variant="body1">
                    <strong>Phone:</strong> {chaplainInfo.contact.phone}
                </Typography>
                <Typography variant="body1">
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${chaplainInfo.contact.email}`}>
                        {chaplainInfo.contact.email}
                    </a>
                </Typography>
            </div>
        </div>
    );
};

export default ChaplainInfo;





