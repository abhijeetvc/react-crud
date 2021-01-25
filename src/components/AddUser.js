import React,{useState} from 'react'
import UserService from '../services/UserService'

const AddUser=()=>{

    const initialUserState={
        id:null,
        firstName:'',
        lastName:'',
        city:'',
        isActive:false
    }
    const [user,setUser]=useState(initialUserState)
    const [submitted,setSubmitted]=useState(false)

    const onChange=(event)=>{
        const {name,value}=event.target 
        setUser({...user,[name]:value})
        // setUser({[event.target.name]:event.target.value})
    }

    const saveUser=()=>{
        var userData={
            firstName:user.firstName,
            lastName:user.lastName,
            city:user.city,
            isActive:user.isActive
        }
       console.log(userData)
    
       UserService.create(userData)
        .then(response=>{
            setUser({
                id:response.data.id,
                firstName:response.data.firstName,
                lastName:response.data.lastName,
                city:response.data.city,
                isActive:response.data.isActive
            })
            setSubmitted(true)
            console.log(response.data)
        })

    }

    const newUser=()=>{
        setUser(initialUserState)
        setSubmitted(false)
    }

    return(

        <div className="submit-form">
            {submitted ? (
                <div>
                    <h3>User submitted Successfully</h3>
                    <button className="btn btn-success" onClick={newUser}>Add User</button>
                </div>
            ):(
                <div>
                <div className="form-group">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text"
                       className="form-control"
                       id="firstName"
                       value={user.firstName}
                       name="firstName"
                       onChange={onChange}
                       required/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text"
                       className="form-control"
                       id="lastName"
                       value={user.lastName}
                       name="lastName"
                       onChange={onChange}
                       required/>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text"
                       className="form-control"
                       id="city"
                       value={user.city}
                       name="city"
                       onChange={onChange}
                       required/>
                </div>

                <button onClick={saveUser} className="btn btn-success">
                    Submit
                </button>
            </div>
            )}    
        </div>
    )
}

export default AddUser