import React from 'react'

const SearchInput = () => {
    return (
        <form>
            <input
                type="text"
                id="header-search"
                placeholder="Search All Quizzes"
                name="s"
            />
            <button>Search</button>
        </form>
    )
}

export default SearchInput
