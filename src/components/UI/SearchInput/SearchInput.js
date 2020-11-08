import React from 'react'
import './SearchInput.scss'
import { connect } from 'react-redux'
import { ReactComponent as MagGlass } from '../../../assets/images/icons/magnifying-glass.svg';

function SearchInput(props) {
    return (
        <div className="search-field">
            <input className="search" onChange={(event) => props.onInputChange(event)} type="text" placeholder="Search" />
            <MagGlass className="mag-glass icon" />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (event) => dispatch({ type: 'SEARCH', event })
    };
}

export default connect(null, mapDispatchToProps)(SearchInput)
