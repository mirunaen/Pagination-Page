import React from 'react'
import PaginationPage from './PaginationPage';
import { useState } from 'react';



function PaginationVar({ postPerPage, pagination, setPagination }) {
    const pageNumbers = [];

    const prevClick = () => {

        if (pagination === 0) {
            return;
        }
        setPagination(pagination - 1)
    }

    const nextClick = () => {
        setPagination(pagination + 1)
    }
    for (let i = 0; i <= postPerPage; i++) {
        pageNumbers.push(i)
    }
    const firstPage = () => {
        let pagination = 1;
        setPagination(pagination)
    }

    const lastPage = () => {
        let pagination = 37;
        setPagination(pagination)
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setPagination(pageNumber)
    }

    return (
        <>
            <div className="pagination">
                <button onClick={firstPage}>First</button>
                <a onClick={prevClick} href="#">Prev</a>
                {pageNumbers.map(number => {
                    return (
                        <a onClick={changePage} key={number} href="!#" >{number}</a>
                    )
                })}
                <a onClick={nextClick} href="#">Next</a>
                <button onClick={lastPage}>Last</button>
            </div>
        </>
    )
}

export default PaginationVar;