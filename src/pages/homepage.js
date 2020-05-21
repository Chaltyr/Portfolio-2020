import React from 'react';
import { useHistory } from "react-router-dom";
import { Container } from 'reactstrap';
import Jumbo from '../components/Jumbotron'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
			maxWidth: 345,
			marginRight:20,
    },
    media: {
      height: 140,
    },
  });

const HomePage = () => {
		const classes = useStyles();
		const history = useHistory();

    return (
        <div>
            <Jumbo/>
            <Container style={{
							display:'flex',
							justifyContent:'center'
						}}>
							<Card className={classes.root} onClick={() => history.push('/about')
						}>
                <CardActionArea >
									<CardMedia
									className={classes.media}
									image="/static/images/programming.png"
									title="profile_avatar"
									/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												Who's this guy?
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												I am a graduate Full-stack web developer with a degree in Robotics and Mechatronics. Click here to to 
											</Typography>
										</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary" onClick={() => history.push('/about')
						}>
										Learn More About Me!
									</Button>
								</CardActions>
							</Card>

							<Card className={classes.root}>
                <CardActionArea>
									<CardMedia
									className={classes.media}
									image="/static/images/coffee.jpg"
									title="project"
									/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												Projects
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												These are the projects that I have worked on. They are mostly quite simple apps but do take a look!
											</Typography>
										</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary" onClick={() => history.push('/projects')
						}>
										Check out my past projects!
									</Button>
								</CardActions>
							</Card>

							{/* <Card className={classes.root}>
                <CardActionArea>
									<CardMedia
									className={classes.media}
									image="/static/images/cards/contemplative-reptile.jpg"
									title="Contemplative Reptile"
									/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												Lizard
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
												across all continents except Antarctica
											</Typography>
										</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary" >
										Look at some cats
									</Button>
								</CardActions>
							</Card> */}
            </Container>
            This is the homepage!!
        </div>
    )
}

export default HomePage