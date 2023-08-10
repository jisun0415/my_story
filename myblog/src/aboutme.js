import {Link} from 'react-scroll';
import './aboutme.css';
import React from 'react';

const Aboutme= () =>
{
    return(
        <div>
            <nav id="menubar">
            <ul className="menu">
            <li><Link to="scroll-to-personal" className="link" smooth={true} duration={500}>PERSONAL DETAIL</Link></li>
          <li><Link to="scroll-to-tool" className="link" smooth={true} duration={500}>SKILLS</Link></li>
          <li><Link to="scroll-to-award" className="link" smooth={true} duration={500}>AWARDS</Link></li>
          <li><Link to="scroll-to-activity" className="link" smooth={true} duration={500}>ACTIVITIES</Link></li>
            </ul>
            </nav>
        <div className="personal" id="scroll-to-personal">
            자기소개 위치, 개인정보들 담을 것
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className="tool" id="scroll-to-tool">
            사용가능 툴과 언어 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className="award" id="scroll-to-award">
            수상경력
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className="activity" id="scroll-to-activity">
            학내외 활동
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

        </div>
    )
}

export default Aboutme;