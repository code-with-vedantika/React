import './App.css'
import Card from './card.jsx'

function App() {


  //page loading full page paint allow full dom to reload
  //virtual dom allows only the changed part of to reload not the full page DOM


  //reconciliation is process of updating the dom tree by comaring new virtual dom with old virtual dom and applying the minimal necessary changes
  //fibre is alogrith used by react to implement reconcilation and it allows react pause and abort the update and reprioritize the update to improve performance

  let myobj={
    name:"vedu",
    age:23
  }
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="bg-green-500 text-white p-4 rounded-md">Peopel are connecting</h1>
      <Card name="vedu"  info={myobj} btnText="click me"/>
    
    </div>
  );
}

export default App