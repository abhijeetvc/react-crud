import {useState,useEffect} from 'react'
import UserService from '../services/UserService'

const EditUser=props=>{
    const initializeUser={
        id:null,
        firstName:'',
        lastName:'',
        city:''
    }

    const[currentUser,setCurrentUser]=useState(initializeUser)
    const[message,setMessage]=useState('')

    useEffect(() => {
        getUser(props.match.params.id)
    }, [props.match.params.id])

    const getUser=id=>{
        UserService.getUserById(id)
                .then(response=>{
                    setCurrentUser(response.data)
                    console.log(response.data)
                })
    }

    const onChange=event=>{
        const {name,value}=event.target
        setCurrentUser({...currentUser,[name]:value})
    }

    const updateUser=()=>{
        let userData={
            id:currentUser.id,
            firstName:currentUser.firstName,
            lastName:currentUser.lastName,
            city:currentUser.city
        }
        UserService.update(currentUser.id,userData)
            .then(response=>{
                setMessage("User updated successfully")
                console.log(response.data)
                
            })
    }
    return(
        <div className="edit-form">
            <h2>Update User</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">FirstName : </label>
                    <input type="text"
                           className="form-control"
                           name="firstName"
                           value={currentUser.firstName}
                           onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">LastName : </label>
                    <input type="text"
                           className="form-control"
                           name="lastName"
                           value={currentUser.lastName}
                           onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City : </label>
                    <input type="text"
                           className="form-control"
                           name="city"
                           value={currentUser.city}
                           onChange={onChange}/>
                </div>
            </form>
            <button type="submit" 
                        className="btn btn-success"
                        onClick={updateUser}>Update</button>
            <h2>{message}</h2>
        </div>
    )
}

export default EditUser