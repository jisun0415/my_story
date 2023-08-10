import {Link} from 'react-router-dom';
import './main.css';

const Main = () => {
        const lines = [
          "Hi, I'm JISEON OH.",
          "I'M CONSTANTLY GROWING UP."
        ];
    return(
        <div className="mainpage-div">
        {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split('').map((char, index) => (
            <span key={index} style={{ animationDelay: `${(lineIndex * line.length + index) * 0.05}s` }} className="animated-char">
              {char=== ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      ))}
        <br></br>
        <Link to="/aboutme" className="startlink">About me</Link>
        </div>
    )
}

export default Main;