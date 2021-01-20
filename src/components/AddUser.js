import React,{useState} from 'react'

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

    const onChange=()=>{

    }

    const saveUser=()=>{

    }

    const newUser=()=>{
        
    }

    return(

        <div className="submit-form">
            {submitted ? (
                <div>
                    <h3>User submitted Successfully</h3>
                    <button className="btn btn-success" onClick={newUser}>Add</button>
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