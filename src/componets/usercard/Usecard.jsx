import './usecard.css'

function Usercard(props) {
    return (
        <div>
            <div className="card">
                <img src="./card.png" alt="" />
                <h2>{props.ism}</h2>  
                <p>
                    {props.kasbi} <br />
                    {props.joyi}
                </p>
            </div>
        </div>
    )
}

export default Usercard
