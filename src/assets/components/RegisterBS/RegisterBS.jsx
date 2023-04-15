import React from 'react';

const RegisterBS = () => {

    const handleForm= (event)=>{
        event.preventDefault()
        const email = (event.target.email.value);
        const password = event.target.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <br />
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" value="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default RegisterBS;