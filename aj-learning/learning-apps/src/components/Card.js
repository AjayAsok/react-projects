import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    card: {
        //maxWidth: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 190,
        background: "#d5dbe3",
    },
}));

function Media(props) {
    const { loading = false } = props;
    const classes = useStyles();
    console.log("propppp")
    console.log(props)

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circle" width={40} height={40} />
                    ) : (
                        <Avatar
                            alt="Ted talk"
                            src=""
                        />
                    )
                }
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                    ) : (
                        props.data.head
                    )
                }
                subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : '5 hours ago'}
            />
            {loading ? (
                <Skeleton animation="wave" variant="rect" className={classes.media} />
            ) : (
                <CardContent className={classes.media}>
                    {loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                    ) : (
                        <Typography variant="body2" color="textSecondary" component="p">
                            {
                                props.data.exampleCode
                            }
                        </Typography>
                    )}
                </CardContent>
            )}

            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                ) : (
                    <Typography variant="body2" color="textSecondary" component="p">
                        {
                            props.data.body
                        }
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export const CardComp = (props) => {
    return (
        <div>
            {/* <Media loading /> */}
            <Media data={props.data} />
        </div>
    );
}
