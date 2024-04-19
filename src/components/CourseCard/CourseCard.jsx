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
    return (
        <Link to={`/course/${course.id}`}>
            <div className="course-card">
                <h2 className="course-title">{course.title}</h2>
                <div className="course-stats">
                    <span>{10} notes</span>
                </div>
            </div>
        </Link>

    );
};