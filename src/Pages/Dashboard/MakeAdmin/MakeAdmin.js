import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState("")

    const handleOnChange = e => {
        setEmail(e.target.value);
    }
    const handleMakingAdmin = e => {
        e.preventDefault();

        fetch(`https://sedan-mela-2-server.onrender.com/users?email=${email}`, {
            method: "PUT"

        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    alert(`${email} is now an admin`);
                    window.location.reload();
                }
            })
    }
    return (
        <div>
            <h1 className="text-center mb-3" style={{ color: "#30336b" }}>Make Admin</h1>
            <form onSubmit={handleMakingAdmin}>

                <div className="row mb-1">
                    <div className="col">
                        
                        <input
                            style={{ padding: "15px", border: 0, backgroundColor: "#eee", color: "blue", fontSize: "16px",marginInline:'auto',marginTop:"20px" }}
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Email"
                            aria-label="Email" required
                            onChange={handleOnChange} />
                    </div>




                    <button
                        style={{ marginTop: "20px", padding: "10px 25px", border: "0px", backgroundColor: "#ff7979", color: "white", fontWeight: "500", borderRadius: "10px", cursor: "pointer",lineHeight:1 }}
                        type="submit"
                        class="btn btn-primary mt-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;