import { useState } from "react";

import "./App.css";

import Header from "./components/Header";

import CourseList from "./components/CourseList";

function App() {

  const [showCourses, setShowCourses] = useState(true);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const [activePage, setActivePage] = useState("dashboard");

  const [searchTerm, setSearchTerm] = useState("");

  const handleEnroll = () => {

    if (!selectedCourse) return;

    if (enrolledCourses.includes(selectedCourse.id)) {

      setEnrolledCourses(

        enrolledCourses.filter(

          (id) => id !== selectedCourse.id

        )

      );

    } else {

      setEnrolledCourses([

        ...enrolledCourses,
selectedCourse.id,

      ]);

    }

  };

  return (
<div className="dashboard">

      {/* Sidebar */}
<aside className="sidebar">
<div className="logo">

          🎓 <span>EduSpace</span>
</div>
<nav>
<a

            className={

              activePage === "dashboard"

                ? "active"

                : ""

            }

            onClick={() => setActivePage("dashboard")}
>

            🏠 Dashboard
</a>
<a

            className={

              activePage === "mycourses"

                ? "active"

                : ""

            }

            onClick={() => setActivePage("mycourses")}
>

            📚 My Courses
</a>
<a>

            ⭐ Favorites
</a>
<a>

            ⚙️ Settings
</a>
</nav>
<div className="profile">
<div className="avatar">

            F
</div>
<div>
<strong>Fatima</strong>
<span>Student</span>
</div>
</div>
</aside>


      {/* Main Content */}
<main className="main-content">
<Header />


        {/* Dashboard */}

        {activePage === "dashboard" && (
<>

            {/* Welcome */}
<section className="welcome">
<div>
<p className="small-title">

                  WELCOME BACK 👋
</p>
<h1>

                  Keep learning, keep growing.
</h1>
<p>

                  Continue your courses and improve

                  your skills every day.
</p>
</div>


              {/* Statistics */}
<div className="stats">
<div className="stat-card">
<span>📚</span>
<div>
<strong>4</strong>
<p>Courses</p>
</div>
</div>

<div className="stat-card">
<span>🔥</span>
<div>
<strong>3</strong>
<p>Active</p>
</div>
</div>

<div className="stat-card">
<span>🏆</span>
<div>
<strong>

                      {enrolledCourses.length}
</strong>
<p>Enrolled</p>
</div>
</div>
</div>
</section>


            {/* Courses Header */}
<div className="courses-header">
<div>
<h2>

                  Explore Courses
</h2>
<p>

                  Choose a course to start learning
</p>
</div>

<button

                className="toggle-btn"

                onClick={() =>

                  setShowCourses(!showCourses)

                }
>

                {showCourses

                  ? "Hide Courses"

                  : "Show Courses"}
</button>
</div>


            {/* Search */}
<div className="search-box">
<input

                type="text"

                placeholder="Search courses..."

                value={searchTerm}

                onChange={(e) =>

                  setSearchTerm(e.target.value)

                }

              />
<button>

                🔍
</button>
</div>


            {/* Courses */}

            {showCourses && (
<CourseList

                onSelectCourse={setSelectedCourse}

                searchTerm={searchTerm}

              />

            )}


            {/* Selected Course */}

            {selectedCourse && (
<section className="selected-course">
<div className="selected-icon">

                  {selectedCourse.icon}
</div>
<div className="selected-info">
<p className="small-title">

                    SELECTED COURSE
</p>
<h2>

                    {selectedCourse.name}
</h2>
<p>

                    Instructor:{" "}
<strong>

                      {selectedCourse.instructor}
</strong>
</p>
<p>

                    Status:{" "}
<strong>

                      {selectedCourse.status}
</strong>
</p>
<div className="progress-label">
<span>Progress</span>
<span>

                      {selectedCourse.progress}%
</span>
</div>
<div className="progress-bar">
<div

                      className="progress"

                      style={{

                        width:

                          `${selectedCourse.progress}%`,

                      }}
></div>
</div>
<button

                    className="start-btn"

                    onClick={handleEnroll}
>

                    {enrolledCourses.includes(
selectedCourse.id

                    )

                      ? "✓ Remove from My Courses"

                      : "Enroll Now →"}
</button>
</div>
</section>

            )}
</>

        )}


        {/* My Courses */}

        {activePage === "mycourses" && (
<section className="my-courses">
<div className="courses-header">
<div>
<h2>

                  My Courses 📚
</h2>
<p>

                  Courses you have enrolled in
</p>
</div>
</div>


            {enrolledCourses.length === 0 ? (
<div className="empty-courses">
<span>📚</span>
<h3>

                  No courses yet
</h3>
<p>

                  Go to Dashboard and enroll

                  in a course.
</p>
</div>

            ) : (
<CourseList

                onSelectCourse={setSelectedCourse}

                enrolledCourses={enrolledCourses}

              />

            )}
</section>

        )}
</main>
</div>

  );

}

export default App;
 