export default function useUpload() {
  
  /**
 * Custom hook for uploading files to the backend server.
 * @param {File[]} selectedFiles - Array of selected files to upload.
 * @returns {Promise<boolean>} - A promise indicating whether the upload was successful.
 */
  async function upload(selectedFiles, courseTitle) {

    // Check if any files are selected
    if (selectedFiles.length === 0) {
      console.log("No files selected")
      return false // No files selected, return false
    }

    // Create a FormData object to hold the files
    const formData = new FormData()
    selectedFiles.forEach(file => {
      formData.append('files[]', file)
      formData.append('courseTitle', courseTitle)
    })

    try {
      // Send a POST request to the backend server to upload the files
      const response = await fetch(`${process.env.BACKEND_URL}upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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