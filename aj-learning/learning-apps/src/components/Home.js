import React, { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardComp } from './Card';

const useStyles = makeStyles({
    root: {
        background: "#3333",
        // maxWidth: 300
        padding: 1,
        margin: 10
    },
    head: {
        background: "White",
        textAlign: "left"
    },
    desc: {
        background: "white",
        textAlign: "justify",
        fontFamily: "arial"
    },
    code: {
        fontFamily: "monospace",
        background: "Black",
        color: "blue",
        textAlign: "left",
        padding: "2rem"
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
            {data.topics ? data.topics.map((topic, index) => {
                return (
                    <CardComp key={index} data={topic} />)
            }
            ) : "loading"}
            {/* <div>
                {data ? <h2>{data.title}</h2> : "loading!!"}
                {data.topics ? data.topics.map((topic, index) => {
                    return (<Card key={index} className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography className={classes.head} gutterBottom variant="h5" component="h2">
                                    {topic.head}
                                </Typography>
                                <Typography className={classes.desc} variant="body2" color="textSecondary" component="p">
                                    {topic.body}
                                </Typography>
                                <Typography className={classes.code} variant="body2" color="textSecondary" component="p">
                                    {topic.exampleCode}
                                </Typography>
                                <Typography className={classes.result} variant="body2" color="textSecondary" component="p">
                                    {topic.result}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>)
                }) : ""}
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
            </div> */}
        </>
    )
}

// export default Home;