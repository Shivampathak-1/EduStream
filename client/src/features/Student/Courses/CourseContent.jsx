const CourseContent = ({ courseContent }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Course Content</h2>

      {courseContent.map((chapter) => (
        <div key={chapter.chapterId} className="mb-4 border rounded-lg">
          <div className="px-4 py-3 font-semibold bg-gray-50">
            {chapter.chapterOrder}. {chapter.chapterTitle}
          </div>

          {chapter.chapterContent.map((lecture) => (
            <div
              key={lecture.lectureId}
              className="px-4 py-2 text-sm flex justify-between border-t"
            >
              <span>{lecture.lectureTitle}</span>
              <span className="text-gray-500">
                {lecture.lectureDuration} min
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
