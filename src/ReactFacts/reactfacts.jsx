
import reactfacts from './reactfacts.css';
import { FaReact } from "react-icons/fa";

function Facts(){
  return(
  <div className="container">
    <div class="header">
    <FaReact className="react-icon" />
    <h1 className="title">ReactFacts</h1>
    </div>
    <div className="facts-container">
    <h1 class="facts">Fun facts about React</h1>
    <ul className="facts-list">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
      <FaReact className='react-icon1'/> 
    </ul>
  </div>
  </div>
  )
}
export default Facts;