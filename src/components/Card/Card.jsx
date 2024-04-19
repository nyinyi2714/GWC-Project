import './Card.css'

export default function Card({imageUrl = "", title, onClick}) {
  return(
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt="card" />
      <div className='content'>
        <h3>{title}</h3>
      </div>
    </div>
  )
}