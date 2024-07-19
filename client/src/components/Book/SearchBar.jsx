import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ setSuggestions }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length > 1) {
                const { data } = await axios.get(`http://localhost:4000/api/book?search=${query}`);
                setSuggestions(data);
            }
        };

        fetchSuggestions();
    }, [query, setSuggestions]);

    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books..."
        />
    );
};

export default SearchBar;
