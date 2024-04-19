import { Link } from "react-router-dom";
import "./CourseCard.css"
import notesIcon from "../../icons/notes-icon.svg"

/**
 * A custom card to render Courses.
 * @param {object} props - Component props.
 * @param {string} props.id - The id of the course.
 * @param {string} props.title - The title of the course.
 * @param {string} props.description - The description of the course.
 * @param {string} props.numNotes - The number of notes in the course.
 * @returns {JSX.Element} - The rendered CourseCard component.
 */

export default function CourseCard({ id, title, description, numNotes }) {
    return (
        <Link to={`/course/:${id}`}>
            <div className="course-card">
                <h2 className="course-title">{title}</h2>
                <div className="course-stats">
                    <img src={notesIcon} alt="Notes icon" width={20} />
                    <span>{numNotes} notes</span>
                </div>
                <p className="course-description">{description}</p>
            </div>
        </Link>

    );
};