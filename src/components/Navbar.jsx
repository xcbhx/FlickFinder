import { useState } from "react";

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm)
      setSearchTerm("")
    }
  };

  return (
      <nav className="w-full bg-slate-800 text-white shadow-md fixed top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo/Title */}
        <h1 className="text-xl font-semibold text-gray-200">🎬 FlickFinder</h1>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="flex">
          <input 
            type="text"
            placeholder="Search Movies..."
            className="px-3 py-1 rounded-l-md text-gray-100 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-500 hover:bg-blue-800 text-white px-4 py-1 rounded-r-md"
          >
            Search
          </button>
        </form>
        </div>
      </nav>
  )
}



export default Navbar;