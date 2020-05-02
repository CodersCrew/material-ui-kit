import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

type InsiteItemProps = {
  title: string;
  description: string;
  image: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
  },
  media: {
    paddingTop: '56.25%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  description: {},
}));

const InsideItem = ({ title, description, image }: InsiteItemProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia className={classes.media} image={image} title={title} />
      <Divider />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography className={classes.description} variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InsideItem;
