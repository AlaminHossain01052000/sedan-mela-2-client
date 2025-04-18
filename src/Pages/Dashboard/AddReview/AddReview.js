import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "./AddReview.css"
const AddReview = () => {
    const { user } = useAuth();
    const [companyName, setCompanyName] = useState("");
    const [companyPost, setCompanyPost] = useState("");
    const [description, setDescription] = useState("");
    const [review, setReview] = useState("");
    // email, name, rating, description, company{ name, post }
    const getCompanyName = e => {
        setCompanyName(e.target.value);
    }
    const getCompanyPost = e => {
        setCompanyPost(e.target.value);
    }
    const getDescription = e => {
        setDescription(e.target.value);
    }
    const handleGetReview = e => {
        const selectedReview = document.getElementById("review").value;
        setReview(selectedReview);
    }
    const handleAddingReview = (e) => {
        e.preventDefault();
        const testimonial = { email: user.email, name: user.displayName, rating: review, description: description, company: { post: companyPost, name: companyName } };
        fetch("https://sedan-mela-2-server.onrender.com/testimonials", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(testimonial)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert("Review Added Successfully !")
                    window.location.reload();
                }
            })
        }
    return (
        <div className="add-review-container">
            <img src="https://i.ibb.co/mqfxtpC/download-2-removebg-preview.png" alt="" />
            <form onSubmit={handleAddingReview} className="add-review-form">
                <input type="text" defaultValue={user.displayName} disabled style={{ color: "blue", backgroundColor: "rgba(0,0,0,0.5)" }} />
                <input type="text" defaultValue={user.email} disabled style={{ color: "blue", backgroundColor: "rgba(0,0,0,0.5)" }} />
                <textarea type="text" placeholder="Description" onChange={getDescription} name="description" rows="6" required />
                <input type="text" onChange={getCompanyName} placeholder="Your Company's Name" required></input>
                <input type="text" onChange={getCompanyPost} name="post" placeholder="Your Post in that company" required></input>
                <select className="add-review-stars" name="review" id="review" onChange={handleGetReview} required>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className="btn-review" type="submit" value="Add Review"/>
            </form>
        </div >
    );
};

export default AddReview;