import React, { Component } from 'react';
import List from './components/List';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = { 
      titlePage: 'Listado de Música',
      comments : [
        {
          title: ' Comment 1',
          comment: 'Description 1'
        },
        {
          title: ' Comment 2',
          comment: 'Description 2'
        },
        {
          title: ' Comment 3',
          comment: 'Description 3'
        }
      ]
    }
  }
  addItem(titlePage) {
    let copyComments = [...this.state.comments];
    copyComments.unshift(
      {
        title: 'Se viene Bruselas',
        comment: 'Carlos ponte las pilas'
      }
    )
    this.setState({comments: copyComments});
  }
  changeTitle(titlePage) {
    this.setState({titlePage});
  }
  render() {
    let { comments, titlePage } = this.state;

    return (
      <div className="App">
        <Header title={titlePage} />
        <Grid container spacing={24}>
        <Grid item xs={3} sm={3} />
        <Grid item xs={6} sm={6}>
          <List data={comments} onClickItem={this.changeTitle} onClickMore={this.addItem}/>       
        </Grid>
        <Grid item xs={3} sm={3}/>
      </Grid>
      </div>
    );
  }
}

export default App;
