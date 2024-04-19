import { useState } from "react";
import likeButtonIcon from "../../icons/like-button.svg"
import userIcon from "../../icons/user-icon.svg"
import "./NoteCard.css"

/**
 * A custom card to render Notes.
 * @param {object} props - Component props.
 * @param {string} props.id - The id of the note.
 * @param {string} props.note_title - The title of the note.
 * @param {string} props.numLikes - The number of likes for the note.
 * @returns {JSX.Element} - The rendered NoteCard component.
 */

export default function NoteCard({ id = 7, notes_pdf = "", note_title = "Chapter 1: Data Mining", user = "null", instructor = "John", semester = "fall", year = "2024" }) {
    const [authorName, setAuthorName] = useState("John Doe");

    return (
        <div className="note-card">
            <h2 className="note-title">{note_title}</h2>
            <div className="note-stats">
                <div className="stat">
                    <img src={userIcon} alt="User icon" width={20} />
                    <span>{authorName}</span>
                </div>

                <div className="stat">
                    <img src={likeButtonIcon} alt="Like button" width={20} />
                    <span>{1}</span>
                </div>


            </div>
        </div>
    );
};