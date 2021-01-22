import React,{useState,useEffect} from 'react'
import UserService from '../services/UserService'

const UserList=()=>{
    const [users,setUsers]=useState([])
    const [currentUser,setCurrentUser]=useState(null)
    const [searchUser,setSearchUser]=useState('')
    const [currentIndex,setCurrentIndex]=useState(-1)

    // tells that component need to do something after render or performing the DOM updates
    // gets invoked after the component is rendered or after the DOM updates
    useEffect(() => {
        console.log("hiiiiiiiiiiiiii")
       fetchUsers()
    }, [])

    const onChangeSearchUser=event=>{
        setSearchUser(event.target.value)
    }

    const fetchUsers=()=>{
          UserService.getAllUsers()
            .then(response=>{
                setUsers(response.data)
                console.log(response.data)
            })
    }
    const findByUser=()=>{
        
    }

    const setActiveUser=(user,index)=>{
        console.log("Index value: "+index)
        setCurrentUser(user)
        setCurrentIndex(index)
    }
    return(
        <div className="list row">
            <div className="col-md-10">
                <div className="input-group mb-3">
                    <input type="text"
                           className="form-control"
                           placeholder="Searcb by user"
                           value={searchUser}
                           onChange={onChangeSearchUser}/>
                 
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByUser}>
                        Search User
                    </button>
                </div>
            </div>
        </div>

        <div className="col-md-6">
            <h3>User List : </h3>

            <ul className="list-group">
                 { users && users.map((user,index)=>
                    <li className={
                        "list-group-item" + (index===currentIndex ? "active":"")
                    }
                    onClick={()=>setActiveUser(user,index)}
                    key={index}>
                        {user.firstName+' '+user.lastName}
                    </li>)  
                 }
            </ul>
        </div>

        <div className="col-md-6">
           {   
               currentUser ? (
               <div>
                    <h3>User Info:</h3>
                    <div>
                        <label htmlFor="firstName">FirstName: {currentUser.firstName}</label>
                    </div>
                    <div>
                        <label htmlFor="lastName">LastName: {currentUser.lastName}</label>
                    </div>
                    <div>
                        <label htmlFor="city">City: {currentUser.city}</label>
                    </div>
               </div>
           ) :(
               <div>
                  <p>Please select user...</p>
               </div>
           )

           }
        </div>
     </div>
    )
}

export default UserList