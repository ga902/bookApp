import axios from "axios";
import React, { useState } from "react";

const Create = () => {
    const [formData, setFormData] = useState({ name: '', authir: '', pdate: '' });
    const[errors,setErrors]=useState([]);
    const handleSubmit = (event) => {
    event.preventDefault();
    if(formData){
        submitFormData();
    }
    console.log(formData.name);
    };

    const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
    };

    const submitFormData=async()=>{
        try {
            const response = await axios.post("http://127.0.0.1:3000/api/v1/users",{
            name:formData.name,
            authir:formData.authir,
            pdate:formData.pdate
        })
        if(response.data.error)
        {
            setErrors(response.data.error)
        }
        console.log(response.data.error);
        } catch (error) {
            console.log(errors)
        }
    }
  return (
    <>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        value={formData.value}
        onChange={handleChange}
        />
        <input 
        type="text"
        name="authir"
        value={formData.value}
        onChange={handleChange}
        />
        <input
        type="date"
        name="pdate"
        value={formData.value}
        onChange={handleChange}
        />
        <input
        type="submit"
        value="submit"
        name="submit"/>
      </form>
    </>
  );
};

export default Create;
