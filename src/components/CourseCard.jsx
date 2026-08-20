function CourseCard({ course, onSelect }) {
 return (
<div className="course-card">
<div className="course-icon">
       {course.icon}
</div>
<div className="course-content">
<span
         className={
           course.status === "Completed"
             ? "status completed"
             : "status active"
         }
>
         {course.status}
</span>
<h2>{course.name}</h2>
<p className="instructor">
         👨‍🏫 {course.instructor}
</p>
<div className="progress-label">
<span>Progress</span>
<span>{course.progress}%</span>
</div>
<div className="progress-bar">
<div
           className="progress"
           style={{ width: `${course.progress}%` }}
></div>
</div>
<button
         className="view-btn"
         onClick={() => onSelect(course)}
>
         View Course →
</button>
</div>
</div>
 );
}
export default CourseCard;