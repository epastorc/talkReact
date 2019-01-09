import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import photo from './photo.jpg';

const styles = {
    card: {
      maxWidth: 345,
      margin: '0 auto',
      marginBottom: '5px',
    },
    media: {
      height: 140,
    },
  };
export default  function Item(props) {
  
    return (
        <Card style={styles.card} >
      <CardActionArea>
        <CardMedia
        style={styles.media}
          image={photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.onClick}>
          Share
        </Button>
        <Button size="small" color="primary" onClick={props.onClickMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    );   
};