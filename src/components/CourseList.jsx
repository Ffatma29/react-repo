import CourseCard from "./CourseCard";
const courses = [
 {
   id: 1,
   name: "Artificial Intelligence",
   instructor: "Dr. Ahmad",
   status: "Active",
   progress: 75,
   icon: "🤖",
 },
 {
   id: 2,
   name: "Machine Learning",
   instructor: "Dr. Sara",
   status: "Active",
   progress: 60,
   icon: "🧠",
 },
 {
   id: 3,
   name: "Web Development",
   instructor: "Dr. Omar",
   status: "Completed",
   progress: 100,
   icon: "💻",
 },
 {
   id: 4,
   name: "Database Systems",
   instructor: "Dr. Lina",
   status: "Active",
   progress: 45,
   icon: "🗄️",
 },
];
function CourseList({
 onSelectCourse,
 enrolledCourses,
 searchTerm = "",
}) {
 let displayedCourses = enrolledCourses
   ? courses.filter((course) =>
       enrolledCourses.includes(course.id)
     )
   : courses;
 displayedCourses = displayedCourses.filter(
   (course) =>
     course.name
       .toLowerCase()
       .includes(searchTerm.toLowerCase())
 );
 return (
<div className="course-list">
     {displayedCourses.length === 0 ? (
<div className="no-results">
<span>🔍</span>
<h3>
           No courses found
</h3>
<p>
           Try another course name.
</p>
</div>
     ) : (
       displayedCourses.map((course) => (
<CourseCard
           key={course.id}
           course={course}
           onSelect={onSelectCourse}
         />
       ))
     )}
</div>
 );
}
export default CourseList;