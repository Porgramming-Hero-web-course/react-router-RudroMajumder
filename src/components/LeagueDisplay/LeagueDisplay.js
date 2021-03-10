import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import './LeagueDisplay.css';  
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  Card: {
    width: 400
  },
  media: {
    height: 400,
    width: 400
  },
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
const LeagueDisplay = (props) => {
    const {id} = props;
    const [league,setLeague] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    },[id]);
    const {strLeague,strSport,strBadge} = league;

    const classes = useStyles();

    return (
        <div>
            <Grid container  spacing={2} direction="column" alignItems="center"
          justify="center" >
            <Grid item >
            <Card className={classes.root} justifyContent="center">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={strBadge} 
                />
                <CardContent className="grid" mt={2}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {strLeague}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {strSport}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions display='flex' justifyContent='center'>
                <Link to={"/leagueId/"+id}> 
                  <Button  variant="contained" color="primary" >
                  Explore <FontAwesomeIcon icon={faHandPointRight} />
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          </Grid>
        </div>
        
    );
};

export default hot(LeagueDisplay);