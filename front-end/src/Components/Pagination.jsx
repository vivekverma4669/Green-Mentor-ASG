 const Pagination =function({ currentPage, tasksPerPage, totalTasks, setCurrentPage, setTasksPerPage }) {
  const totalPages = Math.ceil(totalTasks / tasksPerPage);
  console.log(totalTasks)

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination" style={{ display: 'flex', margin: "auto", width: '220px', marginTop: '20px', justifyContent: "space-around", border: '5px solid green', padding: '10px', borderRadius: '10px' }}>
      <button disabled={currentPage === 1} onClick={handlePrevious} style={{ border: "2px solid black ", borderRadius: '5px', padding: '5px' }}>PREVIOUS &lt; </button>
      <div style={{ marginTop: '2px', padding: '5px', paddingLeft: '10px', paddingRight: '10px', border: '1px solid black' }}>{currentPage}</div>
      <button disabled={currentPage === totalPages} onClick={handleNext} style={{ border: "2px solid black ", borderRadius: '5px', padding: '5px' }}> NEXT &gt;</button>
    </div>
  );
}

export default Pagination;