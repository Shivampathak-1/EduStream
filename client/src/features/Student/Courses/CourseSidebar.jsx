import { useState } from "react";
import { FaHeart, FaCheckCircle, FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../../context/AuthProvider";

const getEmbedUrl = (url) => {
  if (!url) return "";

  // youtu.be/<id>
  if (url.includes("youtu.be")) {
    return `https://www.youtube.com/embed/${url.split("/").pop()}`;
  }

  // youtube.com/watch?v=<id>
  if (url.includes("watch?v=")) {
    return `https://www.youtube.com/embed/${url.split("watch?v=")[1]}`;
  }

  return url;
};

const CourseSidebar = ({ course }) => {
  const { accessToken } = useAuth(); // dummy auth
  const userId = "user_2qjlgkAqIMpiR2flWIRzvWKtE0w_sdfsd"; // dummy user id

  const isEnrolled = course.enrolledStudents.includes(userId);

  const discountAmount = Math.round(
    (course.coursePrice * course.discount) / 100
  );
  const discountedPrice = course.coursePrice - discountAmount;

  const [showPreview, setShowPreview] = useState(false);

  // Find first free preview lecture
  const previewLecture =
    course.courseContent
      .flatMap((c) => c.chapterContent)
      .find((l) => l.isPreviewFree) || null;

  return (
    <div className="lg:sticky top-24">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
        {/* Thumbnail */}
        <div
          className="relative cursor-pointer group"
          onClick={() => setShowPreview(true)}
        >
          <img
            src={course.courseThumbnail}
            alt="thumbnail"
            className="w-full h-44 object-cover"
          />

          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
              <FaPlay className="text-black ml-1" />
            </div>
          </div>

          {/* Discount badge */}
          {course.discount > 0 && (
            <span className="absolute top-3 left-3 bg-white text-gray text-xs font-semibold px-3 py-1 rounded-full">
              {course.discount}% OFF
            </span>
          )}
        </div>

        <div className="p-6">
          {/* Price */}
          {!isEnrolled && (
            <>
              <div className="flex items-end justify-items-start gap-3">
                <p className="text-3xl font-bold text-gray-900">
                  ₹{discountedPrice}
                </p>
                <p className="text-sm line-through text-gray-500">
                  ₹{course.coursePrice}
                </p>
              </div>

              {course.discount > 0 && (
                <p className="text-xs text-red-500 mt-1">
                  ⏰ Limited time offer
                </p>
              )}
            </>
          )}

          {/* Enroll Button */}
          <button
            disabled={isEnrolled}
            className={`mt-4 w-full py-2.5 rounded-lg font-semibold transition
              ${
                isEnrolled
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }
            `}
          >
            {isEnrolled ? "Already Enrolled" : "Enroll Now"}
          </button>

          {!isEnrolled && (
            <button className="mt-2 w-full border py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <FaHeart className="text-gray-500" />
              Add to Wishlist
            </button>
          )}

          {/* Includes */}
          <div className="mt-6">
            <p className="font-semibold text-sm mb-2">This course includes:</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Lifetime access
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Certificate of completion
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Full HD video lectures
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🔥 Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white max-w-2xl w-full rounded-xl overflow-hidden relative">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <IoClose size={22} />
            </button>

            <div className="aspect-video bg-black">
              {previewLecture ? (
                <iframe
                  src={getEmbedUrl(previewLecture.lectureUrl)}
                  title="Preview"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={course.courseThumbnail}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg">Course Preview</h3>
              <p className="text-sm text-gray-500 mt-1">
                {previewLecture?.lectureTitle || "Preview not available"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSidebar;
