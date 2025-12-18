import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPlayCircle } from "react-icons/fa";

const CourseContent = ({ courseContent }) => {
  const [openSections, setOpenSections] = useState({});
  const [expanded, setExpanded] = useState(false);

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen = {};
    courseContent.forEach((c) => {
      allOpen[c.chapterId] = true;
    });
    setOpenSections(allOpen);
    setExpanded(true);
  };

  const collapseAll = () => {
    setOpenSections({});
    setExpanded(false);
  };

  // helper
  const getTotalDuration = (lectures) =>
    lectures.reduce((sum, l) => sum + Number(l.lectureDuration), 0);

  const totalLectures = courseContent.reduce(
    (sum, chapter) => sum + chapter.chapterContent.length,
    0
  );

  const totalCourseMinutes = courseContent.reduce(
    (sum, chapter) =>
      sum +
      chapter.chapterContent.reduce(
        (chapterSum, lecture) => chapterSum + Number(lecture.lectureDuration),
        0
      ),
    0
  );

  const totalHours = Math.floor(totalCourseMinutes / 60);
  const remainingMinutes = totalCourseMinutes % 60;

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Course content</h2>
        <button
          onClick={expanded ? collapseAll : expandAll}
          className="text-sm text-blue-500 font-semibold hover:underline"
        >
          {`${expanded ? "Collapse" : "Expand"} all sections`}
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {courseContent.length} sections • {totalLectures} lectures •{" "}
        {totalHours}hr {remainingMinutes}min total length
      </p>

      {/* Sections */}
      {courseContent.map((chapter) => {
        const isOpen = openSections[chapter.chapterId];
        const totalDuration = getTotalDuration(chapter.chapterContent);

        return (
          <div
            key={chapter.chapterId}
            className="border rounded-lg mb-3 overflow-hidden"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(chapter.chapterId)}
              className="w-full px-4 py-4 bg-gray-50 flex justify-between items-center hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                <span className="font-semibold">{chapter.chapterTitle}</span>
              </div>

              <span className="text-sm text-gray-600">
                {chapter.chapterContent.length} lectures •{" "}
                {Math.floor(totalDuration / 60)}hr {totalDuration % 60}min
              </span>
            </button>

            {/* Lectures */}
            {isOpen && (
              <div className="bg-white">
                {chapter.chapterContent.map((lecture) => (
                  <div
                    key={lecture.lectureId}
                    className="px-6 py-3 flex justify-between items-center border-t text-sm hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <FaPlayCircle className="text-gray-500" />
                      <span>{lecture.lectureTitle}</span>
                    </div>

                    <span className="text-gray-500">
                      {lecture.lectureDuration} min
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseContent;
