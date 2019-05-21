import React,{ Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText : ''
        };

        this.handleInput =  this.handleInput.bind(this);
        this.search =  this.search.bind(this);
    }

    handleInput(e) {
        this.setState({searchText: e.target.value})
    }

    search() {
        this.props.search(this.state.searchText)
    }

    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
            <div className="search__wrap">
                <input
                    className="search__bar"
                    onChange={this.handleInput}
                    placeholder='Enter Search Terms'
                />
                <button
                    className='search__bar__button'
                    onClick={this.search}
                >
                    Search
                </button>
            </div>
            </div>
        )
    }


}
