import React, { useState } from 'react';
import './contact.css'

export default function Contact() {
    const validateEmail = (email) => {
        const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        return emailRegex.test(String(email).toLowerCase())
    }

    const [formState, setformState] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [errMsg, seterrMsg] = useState("")

    const { name, email, message } = formState;
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errMsg) {
            console.log("submitForm", formState)


        }
    }

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const validEmail = validateEmail(e.target.value)
            if (!validEmail) {
                seterrMsg("Enter valid email")

            }
            else {
                seterrMsg("")
            }
        }
        else {
            if (!e.target.value.length) {
                seterrMsg(`${e.target.name} is required`)

            }
            else {
                seterrMsg("")
            }
        }

        if (!errMsg) {
            setformState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>

            <form action="#">
                <div className="input-box" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" onBlur={handleChange} defaultValue={name}></input>
                    <input type="email" placeholder="Email Adress"></input>
                </div>

                <div className="input box">
                    <input type="number" placeholder="Mobile Number"></input>
                    <input type="text" placeholder="Email Subject"></input>
                </div>
                <textarea name="" cols="30" rows="10" onBlur={handleChange} defaultValue={message} placeholder="Your Message"></textarea>

                <input type="submit" value="Send Message" className="btn"></input>
            </form>

            {errMsg && (
                <div style={{ color: "red" }}
                    className="status">{errMsg} </div>
            )}
        </section>

    )

}