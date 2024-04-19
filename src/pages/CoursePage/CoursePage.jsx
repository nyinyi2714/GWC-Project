import notesIcon from "../../icons/notes-icon.svg"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HashLoader } from "react-spinners"
import NoteCard from "../../components/NoteCard/NoteCard"
import { CustomModal } from '../../components'
import "./CoursePage.css"

export default function CoursePage(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pdfUrl, setPdfUrl] = useState('')
  const { id } = useParams();
  console.log(id) 

  const [course, setCourse] = useState({
    title: "COMP 541: Algorithm Design and Analysis",
    numNotes: 15
  });

  const openPDF = (e) => {
    setIsModalOpen(true)
  }

  useEffect(() => {

  }, [])

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
            <div onClick={openPDF}><NoteCard /></div>

          </div>
        </>
      }

      <CustomModal
        isOpen={isModalOpen}
        closeModal={() => { setIsModalOpen(false) }}
        styles={{ margin: 'auto' }}
      >
        <iframe src="https://hackathon1-today-19.s3.amazonaws.com/Lecture2.pdf" width="100%" height="600px" />

      </CustomModal>
    </section>
  );
};