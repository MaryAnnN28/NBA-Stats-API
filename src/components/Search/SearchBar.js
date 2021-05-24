import React from 'react';
import './SearchBar.css'
import { Card } from 'react-bootstrap';


class SearchBar extends React.Component {
  state = { term: '' };
  
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term); 
  }
  
  render() {
    return (
      <div className="search-bar">
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div class="ui fluid icon input">
                <input
                  type="text"
                  value={this.state.term}
                  placeholder="Search team or player..."
                  onChange={e => this.setState({ term: e.target.value })}
                />
                <i class="search icon"></i>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SearchBar; 