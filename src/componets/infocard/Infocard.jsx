
import './infocard.css'

function Infocard(props) {
  return (
    <div>
      <div className="card2">
        <img src="./card2.png" alt="" />
        <h2>{props.ism}</h2>
        <p>
          {props.kasbi} <br />
          {props.joyi}
        </p>
      </div>
    </div>
  )
}

export default Infocard
