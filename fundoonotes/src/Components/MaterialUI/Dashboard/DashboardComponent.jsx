import React, { useState, useEffect } from 'react'
import NoteOneComponent from '../Takenoteone/NoteOneComponent'
import NoteTwoComponent from '../TakeNoteTwo/NoteTwoComponent'
import NoteThreeUI from '../TakeNoteThree/NoteThreeUI'
import HeaderComponent from '../Header/HeaderComponent'
import { getMyNote } from '../../../Service/Dataservice'
import MiniDrawer from '../../Drawer/drawerOpen'
import NoteThreeComponent from '../TakeNoteThree/NoteThreeComponent'
import Takenotethree from '../../Takenotethree/takenotethree'
import { Grid } from '@mui/material'
import { Container } from '@mui/material';
import { Box } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer';

function DashboardComponent() {

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
        if (currentPage === 'note') {
          await setArray(response.data);
        }
        else if (currentPage === 'archive') {
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

  const noteList = array.map((note) =>
    <Grid item>
      <NoteThreeComponent note={note} listenToTakeNoteThree={listenToTakeNoteThree} />
    </Grid>
  )
  return (

    <Box>
      <HeaderComponent listenToHeader={listenToHeader} />
      <MiniDrawer drawer={drawer}  sx={{width:'50%'}} listenToArchive={listenToArchive} />
      {
        switchnote ? <NoteTwoComponent listenToTakeNoteTwo={listenToTakeNoteTwo} /> : <NoteOneComponent listenToTakeNoteOne={listenToTakeNoteOne} />
      }
      <Container style={{ marginTop: '5px', position: 'relative', left: '90px', width: '80%', height: '100vh' }}>
        <Grid container={true} spacing={2} >
          {noteList}
        </Grid>
      </Container>
      {/* <div className='notes-container'>
          {
            array.map((note) => <NoteThreeComponent note={note} listenToTakeNoteThree={listenToTakeNoteThree} />)
          }
        </div> */}
    </Box>
  )
}

export default DashboardComponent
