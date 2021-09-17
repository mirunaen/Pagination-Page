import React from 'react'

function PaginationPage({ movieList }) {

    return (
        <div>
            <table >
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Release date</th>
                    </tr>
                    {movieList && movieList.map(movie => {
                        return (
                            <tr key={movie.imdbID}>
                                <td> {movie.Title}</td>
                                <td > {movie.Year}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default PaginationPage;