import { useState } from 'react'
import { upload } from '../../hooks/useUpload'
import { Button } from '../index'
import './FileInput.css'

/**
 * Component for uploading files.
 * @returns {JSX.Element} - The rendered FileInput component.
 */
export default function FileInput() {
  const [selectedFiles, setSelectedFiles] = useState([])

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
    const success = await upload(selectedFiles)
    console.log(success)
    reset()
  }

  /**
   * Resets the selected files.
   */
  const reset = () => {
    setSelectedFiles([])
  }

  return (
    <div className='file-input'>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">
        Upload your Images
      </label>
      <input
        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file-upload"
        type="file"
        multiple
        onChange={handleFileChange}
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
      <Button onClick={handleUploadFiles}>Upload</Button>

    </div>
  )
}