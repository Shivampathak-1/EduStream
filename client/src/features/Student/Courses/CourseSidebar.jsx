const CourseSidebar = ({ course }) => {
  const discountedPrice =
    course.coursePrice -
    Math.round((course.coursePrice * course.discount) / 100);

  return (
    <div className="lg:sticky top-24">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={course.courseThumbnail}
          alt="thumbnail"
          className="w-full h-44 object-cover"
        />

        <div className="p-6">
          <p className="text-3xl font-bold text-gray-800">
            ₹{discountedPrice}
            <span className="text-sm line-through text-gray-400 ml-2">
              ₹{course.coursePrice}
            </span>
          </p>

          <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700">
            Enroll Now
          </button>

          <button className="mt-2 w-full border py-2.5 rounded-lg hover:bg-gray-50">
            Add to Wishlist
          </button>

          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li>✔ Lifetime access</li>
            <li>✔ Certificate of completion</li>
            <li>✔ Full HD videos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
