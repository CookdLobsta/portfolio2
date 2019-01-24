import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Face from '../images/Profile Pic FB.jpg';
import {List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
  state = {}
  render() {
    return (
      <div className='main-page contact-body'>
      	<Grid className='contact-grid'>
          <Cell col={6}>
            <h2>CW</h2>
            <img className='img' alt='img' src={Face} style={{height: '250px'}}/>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em', textAlign: 'justify'}}>Really cool stuff coming soon</p>
          </Cell>
      	  <Cell col={6}>
          	<h2>Contacts</h2>
            <hr/>
		        <List className='contact-list'>
              <ListItem>
    	          <ListItemContent icon="phone" style={{fontSize: '25px', fontFamily: 'Anton', color: 'white'}}>(801)-430-8551</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="email" style={{fontSize: '25px', fontFamily: 'Anton', color: 'white'}}>ConnorMWilson@gmail.com</ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
	  );
  }
};

export default Contact;