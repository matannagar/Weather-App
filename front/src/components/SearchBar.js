import React from 'react'

function SearchBar({ query, setQuery, search }) {
    return (
        <div className="search-box">
            <input type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
            {/* search button */}
            {/* <button id="check"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onClick={search}>Check</button> */}
        </div>
    )
}

export default SearchBar
