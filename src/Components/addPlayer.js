import axios from 'axios';
import React, { Component } from 'react';
import './addPlayer.css';

class AddPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            photo:'',
            from: '',
            price: 0,
            isPlaying: '',
            description: '',
            jersey:0,
            code:0
        }
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitForm = e => {
        e.preventDefault();
        if(this.state.code === '345235'){
            axios.post('http://localhost:5000/teams',this.state).then(()=>{window.location.reload(false)})
            this.props.history.push('/')
        }
        else{
            alert('Wrong Authorization Code')
        }
    }

    render() {
        return (<div className="container">
            <div className="card">
                <div className="card-image">

                </div>
                <form className="card-form" onSubmit={e => this.onSubmitForm(e)}>
                    <div className="input">
                        <input name="playerName" type="text" className="input-field" value={this.state.playerName} required onChange={e => this.onInputChange(e)} />
                        <label className="input-label">Full name</label>
                    </div>
                    <div className="input">
                        <input name="photo" type="text" className="input-field" value={this.state.photo} required onChange={e => this.onInputChange(e)} />
                        <label className="input-label">Profile Picture</label>
                    </div>
                    <div className="input">
                        <select name='from' onChange={e => this.onInputChange(e)} required className="input-field">
                            <option value=''>Select Team</option>
                            <option value='CSK'>Chennai Super Kings</option>
                            <option value='MI'>Mumbai Indian</option>
                            <option value='RR'>Rajasthan Royals</option>
                            <option value='DC'>Delhi Capitals</option>
                            <option value='RCB'>Royal Challengers Bangalore</option>
                            <option value='KKR'>Kolkatta Knight Riders</option>
                            <option value='SH'>Sunrisers Hyderabad</option>
                            <option value='PK'>Punjab Kings</option>
                        </select>
                    </div>
                    <div className="input">
                        <input name="price" type="number" className="input-field" value={this.state.price} required onChange={e => this.onInputChange(e)} />
                        <label className="input-label">Price (in Crores)</label>
                    </div>
                    <div className="input">
                        <input name="jersey" type="number" className="input-field" value={this.state.jersey} required onChange={e => this.onInputChange(e)} />
                        <label className="input-label">Jersey no.</label>
                    </div>
                    <div className="input">
                        <select name='isPlaying' onChange={e => this.onInputChange(e)} required className="input-field">
                            <option value=''>Select Playing Status</option>
                            <option value='true'>Playing</option>
                            <option value='false'>On Bench</option>
                        </select>
                    </div>
                    <div className="input">
                        <select name='description' onChange={e => this.onInputChange(e)} required className="input-field">
                            <option value=''>Select Player's Role</option>
                            <option value='Batsman'>Batsman</option>
                            <option value='Bowler'>Bowler</option>
                            <option value='All-Rounder'>All-Rounder</option>
                        </select>
                    </div>
                    <div className="input">
                        <input name="code" type="number" className="input-field" value={this.state.code} required onChange={e => this.onInputChange(e)} />
                        <label className="input-label">Auth Code</label>
                    </div>
                    <div className="action">
                        <button type="submit" className="action-button">Add Player</button>
                    </div>
                </form>
                <div className="card-info">
                    <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
                </div>
            </div>
        </div>);
    }
}

export default AddPlayer;
