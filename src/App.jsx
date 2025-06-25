import './App.css'
import ConditionalMessage from './components/ConditionalMessage'
import TodaysDate from './components/Date'
import DynamicDashboard from './components/dynamicDashboard'
import TaskList from './components/TaskList'


function App() {


  return (
    <>
      <DynamicDashboard />
      <TodaysDate />
      <ConditionalMessage />
      <TaskList />
    </>
  )
}

export default App
