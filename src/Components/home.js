import React, { Component, useEffect } from 'react';
import logo from '../images/ipl-logo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ball from '../images/ball.gif';

import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [{ 'id': 0, 'name': 'All Players', 'alias': 'all' }, { 'id': 1, 'name': 'Delhi Capitals', 'alias': 'DC' }, { 'id': 2, 'name': 'Mumbai Indians', 'alias': 'MI' }, { 'id': 3, 'name': 'Chennai Super Kings', 'alias': 'CSK' }, { 'id': 4, 'name': 'Rajasthan Royals', 'alias': 'RR' }, { 'id': 5, 'name': 'Kolkatta Knight Riders', 'alias': 'KKR' }, { 'id': 6, 'name': 'Royal Challenger Bangalore', 'alias': 'RCB' }, { 'id': 7, 'name': 'Sunrisers Hyderabad', 'alias': 'SH' }, { 'id': 8, 'name': 'Punjab Kings', 'alias': 'PK' }],
            teamIndex: 0,
            players: [],
            filteredPlayers: [],
            loading: true
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/teams`)
            .then(res => {
                this.setState({ players: res.data, loading: false, filteredPlayers: res.data });
            })
    }

    addNewPlayer = () => {
        this.props.history.push('/addplayer');
    }

    handleClickEvent = (id) => {
        this.setState({ teamIndex: id })
        if (id !== 0) {
            this.state.filteredPlayers = this.state.players.filter((player) => player.from === this.state.teams[id].alias)
        }
        else {
            this.setState({ filteredPlayers: this.state.players })
        }
        console.log(this.state.filteredPlayers)
    }

    render() {
        return (<div className='main-container'>
            <div className='header'>
                <img src={logo} className='logo' />
                <div className='header-menu'>
                    <a className='header-menu-item'>Clubs</a>
                    <a className='header-menu-item'>Venues</a>
                    <a className='header-menu-item'>Schedule</a>
                    <a className='header-menu-item'>Points Table</a>
                </div>
                <form className='search-form'>
                    <input className='search-input' type='text' placeholder='Search by Player Name ...' onChange={(e) => {
                        let searchPlayer = this.state.players.filter((item) => item.playerName.toLowerCase().includes(e.target.value))
                        this.setState({ filteredPlayers: searchPlayer })
                    }} />
                </form>
                <button className='btn' onClick={() => this.addNewPlayer()}>Add New Player</button>
            </div>

            <div className='body-container'>
                <div className='sidebar'>
                    {this.state.teams.map((item) => <button className={this.state.teamIndex === item.id ? 'active-team' : 'team-name'} onClick={() => this.handleClickEvent(item.id)}>{item.name}</button>)}
                </div>
                <div className='player-container'>
                    {this.state.loading ? <div className='baller'><img src={ball} /></div> : this.state.filteredPlayers.map((player) => {
                        return (
                            <Link className='player-card' to={`/player/${player.jersey}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={player.photo} />
                                <h2>{player.playerName} - <span style={{ color: '#242E41' }}>{player.from}</span></h2>
                                <p>Price - {player.price} Cr.</p>
                                <p>{player.description} - <span style={{ color: 'white', backgroundColor: '#242E41', padding: '5px', borderRadius: '5px' }}>{player.isPlaying === 'true' ? 'Playing' : 'On-bench'}</span></p>
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        </div>);
    }
}

// const Home = () => {

//     const teams = ['All Players','Delhi Capitals','Mumbai Indians','Chennai Super Kings','Rajasthan Royals','Kolkatta Knight Riders','Royal Challenger Bangalore','Sunrisers Hyderabad','Punjab Kings'];

//     return (<div className='main-container'>
//         <div className='header'>
//             <img src={logo} className='logo'/>
//             <div className='header-menu'>
//                 <a className='header-menu-item'>Clubs</a>
//                 <a className='header-menu-item'>Venues</a>
//                 <a className='header-menu-item'>Schedule</a>
//                 <a className='header-menu-item'>Points Table</a>
//             </div>
//             <form className='search-form'>
//                 <input className='search-input' type='text' placeholder='Search by Player Name ...'/>
//             </form>
//             <button className='btn'>Add New Player</button>
//         </div>

//         <div className='body-container'>
//             <div className='sidebar'>
//                 {teams.map(team => {
//                     return(
//                         <button className='team-name'>{team}</button>
//                     )
//                 })}
//             </div>
//             <div className='player-container'>
//                 <div>player 1</div>
//                 <div>player 2</div>
//                 <div>player 3</div>
//                 <div>player 4</div>
//             </div>
//         </div>
//     </div>);
// }

export default Home;