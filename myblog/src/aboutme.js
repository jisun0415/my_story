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
                목표를 이루기 위해 가장 최적의 수단을 찾는 개미 <br />
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
                        Introduce
                    </div>
                    <div className="Content">
                    <p className="smalltitle">
                        E-MAIL <br />
                        UNIV <br />
                        BIRTH <br />
                        POSITION <br />
                        HOBBY <br />
                        MY KEYWORDS <br />
                    </p>
                    <p className="content">
                        jisunoh0415@gmail.com <br />
                        Sejong University <br />
                        01.04.15 <br />
                        AI Engineer & Web-Front developer <br />
                        Running <br />
                        #Creative #Executive #Tenacity <br />
                    </p>
                    </div>
            </div>
           
        </div>
        <div className="tool" id="scroll-to-tool">
            
        <br></br>
            <br></br>
            사용가능 툴과 언어 
           
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