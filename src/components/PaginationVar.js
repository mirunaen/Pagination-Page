import React from 'react'
import PaginationPage from './PaginationPage';
import { useState } from 'react';

function PaginationVar({ postPerPage, setCount }) {
    const pageNumbers = [];
    const apiUrl = `https://www.omdbapi.com/?s=batman&type=movie&page=${count}&apikey=7c127bc6`;

    const [count, setCount] = useState(1)

    for (let i = 0; i <= postPerPage; i++) {
        pageNumbers.push(i)
    }
    return (
        <>
            <div className="pagination">
                <a href="#">&laquo;</a>
                {pageNumbers.map(number => {
                    return (
                        <a onClick={() => setCount(count + 1)} key={number} href="!#" >{number}</a>
                    )
                })}
                <a href="#">&raquo;</a>
            </div>
        </>
    )
}

export default PaginationVar;