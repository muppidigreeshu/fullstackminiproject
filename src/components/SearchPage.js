import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchPage() {
    const query = useQuery();
    const searchQuery = query.get('query');

    return (
    <div>
        <h2>Search Page</h2>
        <p>Search Query: {searchQuery}</p>
    </div>
    );
}

export default SearchPage;
