import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };
        
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    className="form-control"
                    type="search"
                    value={this.state.term}
                    placeholder="Поиск"
                    onChange={this.onInputChange} />
            </div>
        );
    }
    
    onInputChange(e) {
        const term = e.target.value;
        
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
