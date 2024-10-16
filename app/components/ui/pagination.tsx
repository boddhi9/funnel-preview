interface PaginationProps {
  currentPage: number
  totalPages: number
  handleNext: () => void
  handlePrev: () => void
}

const Pagination = ({ currentPage, totalPages, handleNext, handlePrev }: PaginationProps) => {
  return (
    <div className="flex justify-left mt-6 space-x-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 0}
        className={`px-4 py-2 rounded-lg text-white ${currentPage === 0 ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-600'}`}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        className={`px-4 py-2 rounded-lg text-white ${currentPage === totalPages - 1 ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-600'}`}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
