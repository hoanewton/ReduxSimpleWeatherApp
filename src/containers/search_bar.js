import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    // go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return ( 
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


// by dispatching fetchWeather Action Creator and mapping it to props (export - line 50) will give us access to this.props.fetchWeather inside of our component above.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null as the first argument tell redux that we don't need to maintain any state for this container
// mapDispatchToProps always comes in as second argument in this function
export default connect(null, mapDispatchToProps)(SearchBar);





