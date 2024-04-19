import { Link } from "react-router-dom";
import "./CourseCard.css"
import notesIcon from "../../icons/notes-icon.svg"

/**
 * A custom card to render Courses.
 * @param {object} props - Component props.
 * @param {string} props.title - The title of the course.
 * @returns {JSX.Element} - The rendered CourseCard component.
 */

export default function CourseCard({ course }) {
  console.log(course)
    return (
        <Link to={`/course/${course.id}`}>
            <div className="course-card">
                <h2 className="course-title">Course: {course.course_title}</h2>
                <h2 className="course-title">Instructor: {course.instructor}</h2>
                <h2 className="course-title">{course.semester} {course.year}</h2>
            </div>
        </Link>

    );
};