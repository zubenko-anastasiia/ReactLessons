import { useState,useEffect} from "react";
import axios from 'axios';

export const AddingCont=()=>{

    const [name,setName]=useState('');
    const [lastname,setLastname]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [notes,setNotes]=useState('');
    const [contact,setContact]=useState([]);


    useEffect(()=>{
        axios.get('http://localhost:5000/contacts')
                .then(result=>setContact(result.data.map(cont=>cont.phoneNumber)))
                .catch(error=>console.log(error))
    },[]);

    const onChangeName=(event)=>{
        setName(event.target.value);
    };

    const onChangeLastname=(event)=>{
        setLastname(event.target.value);
    };

    const onChangeNotes=(event)=>{
        setNotes(event.target.value);
    };
    const onChangePhoneNumber=(event)=>{
        setPhoneNumber(event.target.value);
    };
    
    const onSubmitHandle=async(event)=>{
        event.preventDefault();
        const contact={
            name:name,
            lastname:lastname,
            phoneNumber:phoneNumber,
            notes:notes
        };
        await axios.post('http://localhost:5000/create', contact)
            .then(result => console.log(result.data))
            .catch(error => console.log(error));
        //
        window.location = '/';
    };
    return(
        <>
        <h3 style={{color: 'navy'}}>Create New Contact</h3>
            <div style={{height: '10px'}}></div>
                <form className="my-form" onSubmit={onSubmitHandle}>
                    <div className="form-group">
                        <input type="text" className="form-control my-3" placeholder="Name" value={name} onChange={onChangeName} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control my-3" placeholder="Last Name" value={lastname} onChange={onChangeLastname} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control my-3" placeholder="Phone number" value={phoneNumber} onChange={onChangePhoneNumber} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows={"4"} placeholder="Notes" value={notes} onChange={onChangeNotes}></textarea>
                    </div>
                    <div className="form-group text-center">
                    <input type="submit" className="btn btn-success" value="Create"/>
                </div>                </form>
            
        </>
    );
}