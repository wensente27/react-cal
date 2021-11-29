import './App.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const locales = {
  "en-US": require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "Meeting ur mom",
    allDay: true,
    start: new Date(2021,10,2),
    end: new Date(2021,10,2)
  },
  {
    title: "Meeting ur mom again",
    start: new Date(2021,10,5),
    end: new Date(2021,10,9)
  },
  {
    title: "Meeting ur mom AGAIN",
    start: new Date(2021,10,21),
    end: new Date(2021,10,22)
  },
]

function App() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h1>U like dick n balls</h1>
      <h2>Wanna add a new event?</h2>
      <div>
        <input type="text" placeholder="Add Title" style={{width: "20%", marginRight: "10px"}} 
        value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />

      <DatePicker placeholderText="Starts at:" style={{marginRight: "10px"}}
      selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
      />
      <DatePicker placeholderText="Ends at:"
      selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
      />
      <button style={{marginTop: "10px"}} onClick={handleAddEvent}>
        Add Event
      </button>
      </div>
      <Calendar localizer={localizer} events={allEvents} 
      style={{height: 500, margin: "50px"}} />
    </div>
  );
}

export default App;
