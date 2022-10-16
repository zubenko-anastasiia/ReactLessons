import axios from "axios";
import { useEffect, useState } from "react";

export const ContList = ()=>{
    const [contacts,setContacts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/contacts')
                .then(result=>setContacts(result.data))
                .catch(error=>console.log(error))
    });

    return(
        <>
                <h1>ContactsList</h1>
                <div style={{height:'10px'}}></div>
                <div className="card-group">
                    {
                        contacts.map(cont=>(
                            <div className="card" style={{width: "18rem"}} key={cont._id}>
                            <div className="card-body">
                              <h5 className="card-title">{cont.name} {cont.lastName}</h5>
                              <h6 className="card-subtitle mb-2 text-muted">{cont.phoneNumber}</h6>
                              <p className="card-text">{cont.notes}</p>
                             </div>
                          </div> 
                        ))
                    }
                </div>
        </>
    );
    
};