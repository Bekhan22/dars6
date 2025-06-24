import './App.css'
import Infocard from './componets/infocard/Infocard'
import Usercard from './componets/usercard/usecard'


function App() {
    return (
        <div>
            <div className='container'>
                <h1 className='use'>User Card</h1>
                <div className="cards">
                    <Usercard ism="Emily Johnson" kasbi="Product Manager" joyi="Product Development"></Usercard>
                    <Usercard ism="Arjun Patel" kasbi="Software Engineer" joyi="Technology"></Usercard>
                    <Usercard ism="Carlos Hernández" kasbi="UI Designer" joyi="Design"></Usercard>
                    <Usercard ism="Amina Idris" kasbi="Marketing Specialist" joyi="Marketing"></Usercard>
                </div>









                <h1 className='use'>Info Card</h1>
                <div className="cards2">
                    <Infocard ism="Takumi Sato" kasbi="HR Specialist" joyi="Human Resources"></Infocard>
                    <Infocard ism="Chen Wei" kasbi="Data Analyst" joyi="Data Science"></Infocard>
                    <Infocard ism="Emma Dubois" kasbi="Sales Manager" joyi="Sales"></Infocard>
                    <Infocard ism="Igor Sokolov" kasbi="HR Specialist" joyi="Quality Control"></Infocard>
                </div>


                <div className="cards3">


                </div>
            </div>
        </div>
    )
}

export default App