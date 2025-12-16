import React from "react";

const CourseSidebar = () => {
  const categories = ["Programming", "Design", "Marketing"];
  const levels = ["Beginner", "Intermediate", "Advanced"];
  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 sticky top-20 h-fit">
      <h3 className="text-lg font-semibold mb-4">Filter Courses</h3>

      {/* Sort */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">Sort By</h4>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">Category</h4>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">Level</h4>
        <ul className="space-y-2">
          {levels.map((category) => (
            <li key={category}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CourseSidebar;
