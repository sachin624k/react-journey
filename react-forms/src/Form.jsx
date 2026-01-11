import { useState } from "react";

export default function Form() {
    // store and control input value
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    // update state when typing
    // let handleNameSubmit = (event) => {
    //     setFullName(event.target.value);
    // };

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // };

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{ ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            {/* controlled input (value comes from state) */}
            <input
                placeholder="enter full name"
                type="text"
                value={formData.fullName}
                // onChange={handleNameSubmit} // update on typing
                id="fullName"
                name="fullName" //name should match the state field
                onChange={handleInputChange}
            />
            <br></br><br></br>
            <label htmlFor="username">Username</label>
            <input
                placeholder="enter username"
                type="text"
                value={formData.username}
                id="username"
                name="username"
                onChange={handleInputChange}
            />
            <br></br><br></br>
            <label htmlFor="password">Password</label>
            <input
                placeholder="enter password"
                type="password"
                value={formData.password}
                id="password"
                name="password"
                onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    );
}
