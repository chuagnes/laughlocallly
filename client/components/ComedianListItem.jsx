import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ContentSearch from 'material-ui/svg-icons/action/search';
import ContentMap from 'material-ui/svg-icons/maps/map';
import Avatar from 'material-ui/Avatar';
import {
  cyan500
} from 'material-ui/styles/colors';

const styles = {
  margin: '0 auto',
  width: '200px'
}

const ComedianListItem = ({item}) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={item.name} 
        subtitle={item.address} />}
    >
      <img src={item.photo_url} height = {250} width = 'auto'/>
    </CardMedia>
    <CardHeader
      title={item.bio}
      titleStyle={{'fontSize':'10px', 'fontWeight':'light'}}
      subtitle={'Rating: ' + item.rating}
      
    />
    <CardActions>
      <div style={styles}>
        <a href={"https://www.google.com/search?q=" + item.name}>
          <FlatButton 
            icon={<ContentSearch/>}
            rippleColor= {cyan500}
          />
        </a>
        <a href={"https://www.twitter.com/" + item.twitter}>
          <FlatButton 
            icon={<ContentMap/>}
            rippleColor= {cyan500}
          />
        </a>
      </div>
    </CardActions>
  </Card>
)

export default ComedianListItem;

// avatar={<Avatar
//         backgroundColor = {cyan500} >
//         {item.name.charAt(0)}</Avatar>}