export default function useUpload() {
  
  /**
 * Custom hook for uploading files to the backend server.
 * @param {File[]} selectedFiles - Array of selected files to upload.
 * @returns {Promise<boolean>} - A promise indicating whether the upload was successful.
 */
  async function upload(selectedFile, customFormData) {

    // Check if any files are selected
    if (!selectedFile) {
      console.log("No file selected")
      return false // No files selected, return false
    }

    // Create a FormData object to hold the files
    const { courseId, instructor, year, semester, noteTitle } = customFormData
    const formData = new FormData()
    formData.append('notes_pdf', selectedFile)
    formData.append('courseId', courseId)
    formData.append('instructor', instructor)
    formData.append('year', year)
    formData.append('semester', semester)
    formData.append('noteTitle', noteTitle)


    try {
      // Send a POST request to the backend server to upload the files
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}addNotes`, {
        method: 'POST',
        headers: {
          "Authorization": `Token ${localStorage.getItem("token")}`,
        },
        body: formData,
      })

      // Check if the response is successful
      if (response.ok) {
        console.log("Files uploaded successfully")
        return true // Files uploaded successfully, return true
      } else {
        console.error("Failed to upload files")
        return false // Failed to upload files, return false
      }
    } catch (error) {
      console.error("Error uploading files:", error)
      return false // Error occurred while uploading files, return false
    }
  }
  return {
    upload
  }
}