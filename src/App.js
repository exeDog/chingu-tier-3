import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import { Table } from './components/Table'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
    };

    this.search =  this.search.bind(this);
  }

  componentDidMount() {
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
        .then( res => res.json() )
        .then( payload => {
          this.setState({data: payload},()=>{
            this.originalState = [...this.state.data];
          });
        });
  }

  search(text) {
    if(!text) {
      debugger;
      this.setState({data: this.originalState});
    } else{
      const result = this.state.data.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
      this.setState({data: result});
    }
  }

  render() {
    return(
        <div className="app__main-wrap">
          <h1 className="app__heading">Meteorite Explorer</h1>
            <Search search={this.search} />
            <Table data={this.state.data} />
        </div>
    )
  }
}

