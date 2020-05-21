import React from 'react';
import { Container } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Jumbo2 from '../components/Project_Jumbotron';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginRight:20,
    },
    media: {
      height: 140,
    },
    content: {
        height: 200,
    },
  });


const Projects = () => {
    const classes = useStyles();

    return (
        <div>
            <Jumbo2/>
            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                // marginRight: '10px',
                // marginLeft: '0px',
            }}>
                <a href="https://github.com/Chaltyr/final-nextagram">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/next.png"
                            title="NEXTagram"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Nextagram
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                                This project was the capstone to the course at NEXT Academy. It was a mock up of the popular social 
                                app "Instagram". We had to create a database so that users could sign up, log in and post images on their 
                                profile page. *I had trouble deploying the app onto Heroku.com so it does not have a website yet.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/Chaltyr/final-nextagram">
                            Github
                            </Button>
                            <Button size="small" color="primary" disabled="true">
                            Website
                            </Button>
                        </CardActions>
                        </Card>
                </a>

                <a href="http://drop-and-go.herokuapp.com/">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/logo512.png"
                            title="Drop-n-go"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Drop-n-Go
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                                This is the final group project I participated in at NEXT Academy. It is a concept for a luggage or item storage 
                                system ala Air BnB where users can locate storage spaces on the app and then pay for the services before dropping off
                                their luggage at the location. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/Chaltyr/DropnGo">
                            Github
                            </Button>
                            <Button size="small" color="primary" href="http://drop-and-go.herokuapp.com/">
                            Website
                            </Button>
                        </CardActions>
                        </Card>
                </a>

                <a href="https://qr-coder-simple.herokuapp.com/">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/qrcoder.png"
                            title="qr-coder-simple"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                qr-coder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                                I was interested in the qr-code making component so I created a simple app that takes text and then turns it into a 
                                qr code. That's all it does.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/Chaltyr/qrcoder">
                            Github
                            </Button>
                            <Button size="small" color="primary" href="https://qr-coder-simple.herokuapp.com/">
                            Website
                            </Button>
                        </CardActions>
                        </Card>
                </a>

                <a href="https://spacex-rockets.now.sh/">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/spacex.jpg"
                            title="Space-X Rockets"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Space-X Rockets
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                                This website was a test project for another company that I had completed in 10 days. It uses next.js and graphql in order to 
                                draw information on Space-X rockets and displays them. This was a challenging project as I had to learn next.js and graphql from the ground up.
                                The website is quite informative however so do check it out!
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/Chaltyr/SpaceEx">
                            Github
                            </Button>
                            <Button size="small" color="primary" href="https://spacex-rockets.now.sh/">
                            Website
                            </Button>
                        </CardActions>
                        </Card>
                </a>
            
            </Container>
            This is the Projects page!!
        </div>
    )
}

export default Projects