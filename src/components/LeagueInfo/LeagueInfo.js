import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useParams } from 'react-router';
import './LeagueInfo.css';
import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin,faFlag,faFutbol,faMars} from '@fortawesome/free-solid-svg-icons'
import maleImg from '../../images/Rectangle 28.png';
import femaleImg from '../../images/female.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const LeagueInfo = () => {
    const {id} = useParams();
    console.log(id)

    const [leagueInfo,setLeagueInfo] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res => res.json())
        .then(data => setLeagueInfo(data.leagues[0]))
    },[id]);

    const {
        strGender,dateFirstEvent,strCountry,
        strTwitter,strFacebook,strYoutube,
        strBadge,strSport,strLeague,strDescriptionEN
    } = leagueInfo;
    console.log(strTwitter,strFacebook,strYoutube)

    let conditionalImage;

    strGender && strGender==="Female"? conditionalImage=femaleImg : conditionalImage=maleImg;

    return (
        <div className="all-info ">
            <div className="league-banner">
                <img src={strBadge} className="banner-image " alt=""/>
            </div>
            <div className="league-info container-fluid">
                <div >
                    <div className="container info ">
                        <div className="row ">
                            <div className="col-lg-7 col-sm-12 col-xs-12 pt-5 d-flex flex-sm-row flex-lg-column">
                                <div>
                                    <h1> {strLeague} </h1>
                                    <h4> <FontAwesomeIcon icon={faMapPin} /> Founded: {dateFirstEvent} </h4>
                                    <h4> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </h4>
                                    <h4> <FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport} </h4>
                                    <h4> <FontAwesomeIcon icon={faMars} /> Gender: {strGender} </h4>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-xs-12 pt-3 pb-3 pe-5 d-flex flex-sm-row flex-lg-column">
                                
                                    <img src={conditionalImage} className="rounded mx-auto d-block info-image" alt=""/>
                                
                            </div>
                        </div>
                    </div>
                    <div className="container description mt-5">
                        <p> <big> {strDescriptionEN} </big> </p>
                    </div>   
                    <div className="container description mt-5">
                        <p> <big> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nobis repudiandae inventore dolore itaque assumenda tempore fuga animi recusandae praesentium quisquam quos saepe, dolores est temporibus? Autem possimus, quod quas laborum alias, nam ut voluptatibus, similique ea perferendis labore tempora perspiciatis dolorum? Accusamus deleniti voluptas, illo natus aut blanditiis ipsa rem ipsam, optio quisquam adipisci error, eaque aspernatur a exercitationem. </big> </p>
                    </div>
                </div>
            </div>
            <footer className="footer d-flex justify-content-center">
                <a  className="p-4" target="_blank" href={`https://${strFacebook}`}  rel="noreferrer"> <FaFacebook size={42}/>  </a>
                <a className="p-4" target="_blank" href={`https://${strTwitter}`} rel="noreferrer"> <FaTwitter size={42}/>  </a>
                <a className="p-4" target="_blank" href={`https://${strYoutube}`}  rel="noreferrer"> <FaYoutube size={42}/> </a> */}
            </footer> 
        </div>
    );
};

export default hot(LeagueInfo);