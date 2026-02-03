import react, { useState } from 'react'
export default function FormWithValidation() {
    const[email,setemail]=useState("");
    const[error,setError]=useState("");
    const validate=()=>{
        if(!email.includes('@')){
            setError('');
            return true;
        };
    }
        const handleSubmit=(e)=>{
            e.preventDefault();
            if(!validate()){
                alert('submitted :${email}');
            }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={(e)=>setemail(e.target.value)} placeholder="email" />
            {error && <p style={{color:'red'}}>{error} </p>}
            <button type="submit">submit</button>
        </form>
    );
}
