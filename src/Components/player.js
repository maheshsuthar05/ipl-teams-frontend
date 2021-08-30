import React, { Component } from 'react';
import axios from 'axios';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jersey: Number(this.props.match.params.jersey),
            player: {}
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/teams`)
            .then(res => {
                const data = res.data.filter((player) => this.state.jersey === player.jersey)
                console.log(data)
                this.setState({ player: data[0] });
            })
    }

    render() {
        return (<div className="student-profile py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent text-center">
                                <img className="profile_img" src={this.state.player.photo} alt="student dp" />
                                <h3>{this.state.player.playerName}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent border-0">
                                <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                            </div>
                            <div className="card-body pt-0">
                                <table className="table table-bordered">
                                    <tr>
                                        <th width="30%">Full Name</th>
                                        <td width="2%">:</td>
                                        <td>{this.state.player.playerName}</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Team Name	</th>
                                        <td width="2%">:</td>
                                        <td>{this.state.player.from}</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Price</th>
                                        <td width="2%">:</td>
                                        <td>{this.state.player.price} Cr.</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Jersey No</th>
                                        <td width="2%">:</td>
                                        <td>{this.state.player.jersey}</td>
                                    </tr>
                                    <tr>
                                        <th width="30%">Player's Role</th>
                                        <td width="2%">:</td>
                                        <td>{this.state.player.description}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Player;