import { useState,useEffect } from 'react';
import {Employee} from './Employee';
import axios from 'axios';

export const EmployeeList = () => {
    //1
    const [employeeList,setEmployeeList]=useState([]);
    const [recordForEdit, setRecordForEdit]=useState(null);

    //2
    const employeeCrudAPI = (url='http://localhost:3000/api/Employees/') => {
        return{
            getAll:()=>axios.get(url),
            create:(newRecord)=>axios.post(url,newRecord),
            update:(id,updateRecord)=>axios.put(url+id,updateRecord),
            delete:(id)=>axios.delete(url+id)
        };
    }

    //3
    function refreshEmployeeList() {
        employeeCrudAPI().getAll()
            .then((response) => {
                setEmployeeList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //4
    useEffect(()=>{
        refreshEmployeeList();
    },[])


    return(
        <div className="row">
            <div className="col-md-12 text-center">
            <div className="bg-light p-5 my-3 rounded" >
                <h1 style={{color:'purple'}}>Employees Management System</h1>
            </div>
            </div>
            <div className="col-md-4">
                <Employee/>
            </div>
            <div className="col-md-8">
                Employee list
            </div>
        </div>
    );
}