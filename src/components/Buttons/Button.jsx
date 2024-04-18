/**
 * A customizable button component with different color variants.
 * @param {object} props - Component props.
 * @param {string} props.children - The content inside the button.
 * @param {string} props.color - The color variant of the button ('blue' or 'red').
 * @param {function} props.onClick - Function to be called when the button is clicked.
 * @returns {JSX.Element} - The rendered button component.
 */
export default function Button({ children, color, onClick }) {
  /**
   * Renders a blue gradient button.
   * @param {ReactNode} children - The content inside the button.
   * @returns {JSX.Element} - The rendered blue button.
   */
  const blueBtn = (children) => {
    return(
      <button
        onClick={onClick}
        type="button"
        className="button text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {children}
      </button>
    )
  }

  /**
   * Renders a red gradient button.
   * @param {ReactNode} children - The content inside the button.
   * @returns {JSX.Element} - The rendered red button.
   */
  const redBtn = (children) => {
    return(
      <button
        onClick={onClick}
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {children}
      </button>
    )
  }

  // Render button based on color prop
  switch(color) {
    case 'red':
      return redBtn(children)
    default:
      return blueBtn(children)
  }
}
