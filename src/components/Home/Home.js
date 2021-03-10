import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LeagueDisplay from '../LeagueDisplay/LeagueDisplay';

const Home = () => {

    const [leagues,setLeagues] = useState([]);
    // console.log(leagues)
    const newLeagues = leagues.slice(0,21);
    // console.log(newLeagues)
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])   
  
    return (                                                                                                        <div>
            <div className="banner">
                <h1 className="banner-style"> Pro League </h1>
            </div>
            <div className="leagues">
                {
                    newLeagues.map(league => <LeagueDisplay id={league.idLeague} key={league.idLeague}> </LeagueDisplay>)
                }
            </div>
        </div>
        
    );
};

export default hot(Home);