import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function DateAndTimePickers(props) {
    const classes = useStyles();
    const [time, setTime] = useState("");
    useEffect(() => {
        props.onTimeChange(time)
    })

    return (
        <form className={classes.container} noValidate>
            <TextField
                onChange={(e) => setTime(e.target.value)}
                id="datetime-local"
                type="datetime-local"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}