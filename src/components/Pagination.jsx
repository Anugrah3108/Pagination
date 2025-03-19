import React from 'react'

const Pagination = ({ noOfPages, currentPage, setCurrentPage }) => {
    const handlePageChange = (n) => { setCurrentPage(n) };
    return (
        <div className='p-5 '>
            <button className='p-1 m-0.5 border rounded cursor-pointer border-transparent bg-white' onClick={() => { setCurrentPage((prev) => prev - 1) }} disabled={currentPage === 0}>◀️</button>
            {[...Array(noOfPages).keys()].map((n) => (<button key={n} className={`p-1 m-0.5 border-transparent rounded cursor-pointer hover:drop-shadow-xl hover:bg-gray-300 ${n === currentPage ? 'bg-[#2874F0]' : 'bg-white'}`} onClick={() => handlePageChange(n)}>{n}</button>))}
            <button className='p-1 m-0.5 border rounded cursor-pointer border-transparent bg-white' onClick={() => { setCurrentPage((prev) => prev + 1) }} disabled={currentPage === noOfPages - 1}>▶️</button>
        </div >
    )
}

export default Pagination
