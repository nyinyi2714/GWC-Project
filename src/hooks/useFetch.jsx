export async function fetch() {
  try {
    let response = await fetch(`${process.env.BACKEND_URL}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      const responseData = await response.json()
      return responseData
    } else {
      console.error("Error fetching. Status code:", response.status)
      return false
    }
  } catch (error) {
    console.error("Error fetching:", error)
  }
}