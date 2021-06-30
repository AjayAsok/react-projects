import React, { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: "#3333",
        // maxWidth: 300
    },
    head: {
        background: "White"
    },
    content: {
        background: "grey"
    }
});

export const Home = () => {
    const classes = useStyles();
    const [data, setData] = useState({});
    useEffect(() => {
        getJSArrayData();
    }, [])

    const getJSArrayData = async () => {
        const response = await fetch('javascriptArray.json')
            .then((response) => { return response.json() })
            .then((mydata) => setData(mydata.data));
    }
    console.log("DATAAA")
    console.log(data)
    return (
        <>
            <div>
                {data ? data.title : ""}
                {/*data ? data.topics.map((topic) => {
                    <Card className={classes.root}>
                        LL
                        <CardActionArea>
                            <CardContent>
                                <Typography className={classes.head} gutterBottom variant="h5" component="h2">
                                    Heading
                                </Typography>
                                <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                                    Total description
                                </Typography>
                                <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                                    Example Code
                                </Typography>
                                <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                                    Example Answer
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                }) : ""} */}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography className={classes.head} gutterBottom variant="h5" component="h2">
                                Heading
                            </Typography>
                            <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                                Total description
                            </Typography>
                            <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                                Example Code
                            </Typography>
                            <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                                Example Answer
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}

// export default Home;