import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    if (suggestions.length === 0) {
      this.setState({
        query: value,
        suggestions:[],
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
      });
    }
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="CitySearch" >
        <h3>Find a City</h3>
        <input 
          type="text"
          className="city"
          placeholder='Search'
          value={this.state.query}
          onChange={this.handleInputChanged}
          />
        <ul className="suggestions" style={(this.state.showSuggestions) ? {}: { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onMouseDown={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
        </ul>
          <h4 key='all' onClick={() => this.handleItemClicked("all")}>
            See all cities
          </h4>
      </div>
    );
  }
}

export default CitySearch;