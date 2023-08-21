import {Link} from 'react-scroll';
import './aboutme.css';
import React from 'react';
import photo from './image/myphoto.jpg';

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
            <div className="photo-person">
                <div className="photo">
                    <img className="jisun" src={photo} alt=""></img>
                </div>
                <div className="person">
                <div className="sentence">
                목표를 이루기 위해 가장 최적의 수단을 찾는 개발자<br />
                </div>
                <p className="name">
                오 &nbsp;&nbsp; 지 &nbsp;&nbsp; 선<br></br>
                JISEON OH<br></br>
                </p>
             
           
                <p >
                <a className="Channel"  target="_blank">Notion</a> <br />
                <a className="Channel" href="https://github.com/jisun0415" target="_blank">Github</a>
                <br /><br /><br />
                </p>
                </div>
            </div>   
            <div className="intro">
                    <div className="title">
                        INTRODUCE
                    </div>
                    <div className="Content">
                    <div className="smalltitle">
                        E-MAIL <br />
                        UNIV <br />
                        BIRTH <br />
                        POSITION <br />
                        HOBBY <br />
                        MY KEYWORDS <br />
                    </div>
                    <div className="content">
                        jisunoh0415@gmail.com <br />
                        Sejong University <br />
                        01.04.15 <br />
                        Web-Front developer <br />
                        Running <br />
                        #Creative #Executive #Tenacity <br />
                    </div>
                    </div>
            </div>
           
        </div>
        <br />
        <br />
        <div className="tool" id="scroll-to-tool"> 
        
            <div className="title">
                        SKILL & TECHNIQUES
            </div>
            <div className="Content">
                    <div className="smalltitle">
                       Tool
                    </div>
                    <div className="content">
                    <span className="original-text">MATLAB</span><br />
                    <span className="original-text">React</span><br />
                    <span className="original-text">Linux</span><br />
                    <span className="original-text">ROS1 noetic / ROS2 foxy</span><br />
                    </div>
            </div>
            <div className="Content">
                    <div className="smalltitle">
                       LANGUAGE
                    </div>
                    <div className="content">
                       CSS/HTML/JAVASCRIPT <br />
                       C/C++ <br />
                       Python <br />
                       MySQL <br/>
                    </div>
            </div>
            <br></br>
            <br></br>
        </div>
        
        <div className="award" id="scroll-to-award">
            수상경력
            
            <br></br>
            <br></br>
        </div>
        <div className="activity" id="scroll-to-activity">
            학내외 활동
            
            <br></br>
            <br></br>
        </div>

        </div>
    )
}

export default Aboutme;