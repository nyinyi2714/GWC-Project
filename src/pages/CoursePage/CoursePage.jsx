import notesIcon from "../../icons/notes-icon.svg"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import NoteCard from "../../components/NoteCard/NoteCard";
import "./CoursePage.css"

export default function CoursePage(props) {
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();

    const [course, setCourse] = useState({
        title: "COMP 482: Algorithm Design and Analysis",
        description: "Lorem ipsum something something",
        numNotes: 15
    });

    return (
        <section className='coursepage'>
            {
                isLoading &&
                <div className="loading-spinner">
                    <HashLoader color='#1A56DB' />
                </div>
            }

            {
                !isLoading &&
                <>
                    <div className="course-info">
                        <h2 className="course-title">{course.title}</h2>
                        <div className="course-stats">
                            <img src={notesIcon} alt="Notes icon" width={20} />
                            <span>{course.numNotes} notes</span>
                        </div>
                        <p>{course.description}</p>
                    </div>

                    <hr />

                    <h2 className="notes-section-headline">Notes for this course</h2>
                    <div className="course-notes">
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                    </div>
                </>
            }
        </section>
    );
};