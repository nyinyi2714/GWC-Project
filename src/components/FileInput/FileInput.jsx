import { useState, useRef } from 'react'
import { useUpload } from '../../hooks'
import { Button } from '../index'
import './FileInput.css'

/**
 * Component for uploading files.
 * @returns {JSX.Element} - The rendered FileInput component.
 */
export default function FileInput() {
  const [courseTitle, setCourseTitle] = useState('')
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)

  const fileInputRef = useRef()
  const { upload } = useUpload()

  /**
   * Handles file selection change event.
   * @param {Event} e - The change event object.
   */
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files)
    setSelectedFiles(filesArray)
  }

  /**
   * Handles uploading selected files.
   */
  const handleUploadFiles = async () => {
    setIsUploading(true)
    const success = await upload(selectedFiles, courseTitle)
    setIsUploading(false)

    console.log(success)
    reset()
  }

  /**
   * Handles entering course title.
   * @param {Event} e - The change event object.
   */
  const handleCourseTitle = (e) => {
    setCourseTitle(e.target.value)
  }

  /**
   * Resets the selected files and course title.
   */
  const reset = () => {
    setSelectedFiles([])
    setCourseTitle('')
    fileInputRef.current.value = null
  }

  return (
    <form className='file-input'>

      <label htmlFor="course-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Title</label>
      <input
        value={courseTitle}
        onChange={handleCourseTitle}
        type="text"
        id="course-title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Course Title"
        required
      />

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file-upload">
        Upload your Images
      </label>
      <input
        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file-upload"
        type="file"
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
      />

      {/* Display the selected files */}
      {selectedFiles.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Button for uploading files */}
      <Button onClick={handleUploadFiles} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>

    </form>
  )
}