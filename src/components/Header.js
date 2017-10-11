
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';

import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';

import { Info } from 'material-ui-icons';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Header extends Component {
  static propTypes = {

  }

  handleTouchTap() {
    alert('onClick triggered on the title component');
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" className={classes.flex}>
              <span style={{cursor: 'pointer'}}>Readable</span>
            </Typography>
            <IconButton color="contrast" aria-label="Info">
              <Info />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
    classes: ownProps.classes
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
