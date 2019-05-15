import React, { Component } from 'react'
import axios from 'axios';
class Folder extends Component {
    constructor(props) {
        super(props)
        this.handleOptionChange=this.handleOptionChange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)

        this.state = {
        
            FirstName :"",
            LastName :"",
            DateofBirth :"",
            Email :"",
            Password :"",
            Contactno :"",
            Option :""


        }
    }
    handlesubmit(e){
        e.preventDefault();
        const form={
            FirstName : this.state.FirstName,
            LastName: this.state.LastName,
            DateofBirth : this.state.DateofBirth,
            Email : this.state.Email,
            Password : this.state.Password,
            Contactno :this.state.Contactno,
            Option :this.state.Option
            }
        axios.post('http://localhost:4000/form/add', form)
        .then(res => console.log(res.data));
        this.setState({
            FirstName :"",
            LastName :"",
            DateofBirth :"",
            Email :"",
            Password :"",
            Contactno :"",
            Option :""


        })
    }
    handleOptionChange(e){
        this.setState({
            Option : e.target.value

        })
    }
    render() {
        return (
            <div>
            <h1>Register Here!</h1>
            <form onSubmit={this.handlesubmit}>
            <div>
                <label>First Name : </label>
                <input type="text" placeholder="First Name" value={this.state.FirstName} onChange={(e)=>this.setState({FirstName :e.target.value})}></input>
                </div>
                <div>
                <label>Last Name : </label>
                <input type="text" placeholder="Last Name" value={this.state.LasttName} onChange={(e)=>this.setState({LastName :e.target.value})}></input>
                </div>
                <div>
                <label>Date of Birth : </label>
                <input type="text" placeholder="Date of Birth" value={this.state.DateofBirth} onChange={(e)=>this.setState({DateofBirth :e.target.value})}></input>
                </div>
                <div>
                <label>Email : </label>
                <input type="text" placeholder="Email" value={this.state.Email} onChange={(e)=>this.setState({Email :e.target.value})}></input>
                </div>
                <div>
                <label>Password : </label>
                <input type="text" placeholder="Password" value={this.state.Password} onChange={(e)=>this.setState({Password :e.target.value})}></input>
                </div>
                <div>
                <label>Contact Number : </label>
                <input type="text" placeholder="Contact Number" value={this.state.Contactno} onChange={(e)=>this.setState({Contactno :e.target.value})}></input>
                </div>
                <div>
                    <br></br>
                    <label>Gender : </label>
                    <label>
                        <input type="radio" value="male" checked={this.state.Option==='male'} onChange={this.handleOptionChange}></input>
                    Male</label>
                    <label>
                    <br></br>
                    <input type="radio" value="female" checked={this.state.Option==='female'} onChange={this.handleOptionChange}></input>
                    Female</label>

                </div>
                <div>
                    <br></br>
                    <button>Submit</button>
                </div>
                </form>
                </div>
        )
    }
}
export default Folder