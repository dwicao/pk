import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../actions/mainActions';
import TopBar from './TopBar';
import CardList from './CardList';

class Home extends Component {  
  render() {
    return (
      <div className="home-container">
        <TopBar />
        <CardList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokelist: state.pokelist
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
