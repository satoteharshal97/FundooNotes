import React from 'react'
import Takenoteone from '../../Components/Takenoteone/takenoteone';
import Takenotetwo from '../../Components/Takenotetwo/takenotetwo';
import Header from '../../Components/Header/header';
import { getMyNote } from '../../Service/Dataservice';
import Takenotethree from '../../Components/Takenotethree/takenotethree';

function Dashboard() {

  const [switchnote, setSwitchNote] = React.useState(false);
  const [array, setArray] = React.useState([])

  const listenToTakeNoteOne = () => {
    setSwitchNote(true);
  }

  const listenToTakeNoteTwo = () => {
    setSwitchNote(false);
  }

  React.useEffect(()=>{
    console.log("hello")
      getMyNote()
      .then((response) => {setArray(response.data)})
      .catch((error) => {console.log(error)})
  }, [])


  return (
    <div>
      <Header /> {
        switchnote ? <Takenotetwo listenToTakeNoteTwo = {listenToTakeNoteTwo} /> : <Takenoteone listenToTakeNoteOne={listenToTakeNoteOne} />
      }
      {
        array.map((note) => <Takenotethree note={note} />)
      }

    </div>
  )
}

export default Dashboard;
