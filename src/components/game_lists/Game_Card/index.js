import React from 'react';
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
        margin: 10,

        borderRadius: '20px'
      },
      media: {
        height: '300px',
        paddingTop: '100%', // 16:9
        borderTopRadius: '25px'
      },
});

export default function GameCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`//images.igdb.com/igdb/image/upload/t_cover_big/${props.item.image_id}.jpg`}
          title={props.item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="p">
            {props.item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color={"secondary"} style={{borderRadius: '20px'}} variant="outlined" href={`/game_details/?id=${props.item.id}`}>Game Details</Button>
      </CardActions>
    </Card>
  );
}
