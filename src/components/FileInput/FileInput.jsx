import { useState, useRef, useEffect } from 'react'
import { useUpload } from '../../hooks'
import { Button } from '../index'
import { toast } from 'react-toastify'
import Select from 'react-select'
import './FileInput.css'

/**
 * Component for uploading files.
 * @returns {JSX.Element} - The rendered FileInput component.
 */
export default function FileInput() {
  // Default formData
  const defaultFormData = {
    courseTitle: '',
    courseDescription: '',
    instructor: '',
    semester: 'Semester',
    year: 2024,
  }

  // Semester Options
  const semesterOptions = [
    { value: 'spring', label: 'Spring', field: 'semester' },
    { value: 'summer', label: 'Summer', field: 'semester' },
    { value: 'fall', label: 'Fall', field: 'semester' },
    { value: 'winter', label: 'Winter', field: 'semester' },
  ];

  const [formData, setFormData] = useState(defaultFormData)
  const [selectedFile, setSelectedFile] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [courseOptions, setCourseOptions] = useState([
    { value: 'comp541', label: 'COMP 541', field: 'courseTitle' },
    { value: 'comp110', label: 'COMP 110', field: 'courseTitle' },
    { value: 'New Course', label: 'New Course', field: 'courseTitle' },
  ])

  const fileInputRef = useRef()
  const { upload } = useUpload()

  /**
   * Handles file selection change event.
   * @param {Event} e - The change event object.
   */
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files)
    setSelectedFile(filesArray)
  }

  /**
   * Handles uploading selected files.
   */
  const handleUploadFiles = async () => {
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      reset()
      toast.success("Upload Successful.")
    }, 1000)
  }

  /**
   * Handles entering form inputs.
   * @param {Event} e - The change event object.
   */
  const handleFormData = (e) => {
    console.log(e)
    if(!e.target) {
      setFormData(prevStates => ({
        ...prevStates,
        [e.field]: e.label,
      }))
    }

    else {
      setFormData(prevStates => ({
        ...prevStates,
        [e.target.name]: e.target.value,
      }))
    }
    
  }

  /**
   * Resets the selected files and form inputs.
   */
  const reset = () => {
    setSelectedFile([])
    setFormData(defaultFormData)
    fileInputRef.current.value = null
  }

  return (
    <form className='file-input'>

      <label htmlFor="course-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
      <Select
        value={formData.courseTitle}
        className='custom-input text-gray-900 text-sm bg-gray-50 border-gray-300 rounded'
        onChange={handleFormData}
        options={courseOptions}
        placeholder={formData.courseTitle ? formData.courseTitle : "Course Title"}
        isSearchable
        required
        name='courseTitle'
        id='course-title'
        styles={{
          input: (base) => ({
            ...base,
            "input:focus": {
              boxShadow: "none",
            },
          }),
        }}
      />

      { formData.courseTitle === 'New Course' &&
        <>
          <label htmlFor="course-description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Course Title</label>
          <input
            value={FormData.courseDescription}
            onChange={handleFormData}
            name='courseDescription'
            type="text"
            id="course-description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="New Course Title"
            required
          />

          <label htmlFor="course-description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Description</label>
          <input
            value={FormData.courseDescription}
            onChange={handleFormData}
            name='courseDescription'
            type="text"
            id="course-description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Course Description"
            required
          />
        </>
      }

      <label htmlFor="instructor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor</label>
      <input
        value={FormData.instructor}
        onChange={handleFormData}
        name='instructor'
        type="text"
        id="instructor"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Instructor"
        required
      />

      <label htmlFor="semester" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Semester</label>
      <Select
        className='text-gray-900 text-sm bg-gray-50 border-gray-300 rounded'
        onChange={handleFormData}
        options={semesterOptions}
        placeholder={formData.semester}
        isSearchable={false}
        required
        name='semester'
        id='semester'
      />

      <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
      <input
        value={FormData.year}
        onChange={handleFormData}
        name='year'
        type="number"
        id="year"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="2024"
        required
      />

      <label htmlFor="note-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note Title</label>
      <input
        value={FormData.noteTitle}
        onChange={handleFormData}
        name='noteTitle'
        type="text"
        id="note-title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Note Title"
        required
      />

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file-upload">
        Note File
      </label>
      <input
        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file-upload"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        ref={fileInputRef}
      />

      {/* Button for uploading files */}
      <Button onClick={handleUploadFiles} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>

    </form>
  )
}