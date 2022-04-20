import React, { useState, useEffect } from 'react'
import Takenoteone from '../../Components/Takenoteone/takenoteone';
import Takenotetwo from '../../Components/Takenotetwo/takenotetwo';
import Header from '../../Components/Header/header';
import { getMyNote } from '../../Service/Dataservice';
import Takenotethree from '../../Components/Takenotethree/takenotethree';
import './dashboard.css'
import MiniDrawer from '../../Components/Drawer/drawerOpen';


function Dashboard() {

  const [switchnote, setSwitchNote] = useState(false);
  const [array, setArray] = useState([])
  const [drawer, setDrawer] = useState(false)
  const [currentPage, setCurrentPage] = useState('note')

  const listenToTakeNoteOne = () => {
    setSwitchNote(true);
  }

  const listenToTakeNoteTwo = () => {
    setSwitchNote(false);
  }

  useEffect(() => {
    getDyanmicNote()
  }, [currentPage])

  const getDyanmicNote = () => {
    getMyNote()
      .then(async (response) => {
        if(currentPage === 'note'){
          await setArray(response.data);
        }
        else if(currentPage === 'archive'){
          await setArray(response.data.filter(note => note.isArchived === true))
        }
        else
        await setArray(response.data.filter(note => note.isDeleted === true))
      })
      .catch((error) => { console.log(error) })
  }

  const listenToTakeNoteThree = async () => {
    getMyNote()
      .then(async (response) => {
        console.log(response.data)
        await setArray(response.data.data)
      })
      .catch((error) => { console.log(error) })

  }

  const listenToHeader = () => {
    setDrawer(!drawer)
  }

  const listenToArchive = (typeOfNote) => {
    setCurrentPage(typeOfNote)
  }

  return (
    <div>
      <Header listenToHeader = {listenToHeader}/>
      <MiniDrawer drawer= {drawer}  listenToArchive = {listenToArchive}/>
      {
        switchnote ? <Takenotetwo listenToTakeNoteTwo={listenToTakeNoteTwo} /> : <Takenoteone listenToTakeNoteOne={listenToTakeNoteOne} />
      }
      <div className='notes-container'>
        {
          array.map((note) => <Takenotethree note={note} listenToTakeNoteThree={listenToTakeNoteThree} />)
        }
      </div>
    </div>
  )
}

export default Dashboard;
