import { useState } from 'react'
import '../styles/Experience.css'

function Experience(){
    return(
    <>
        <form id="survey-form">
        <label id="name-label" for="name">Name <input id="name" type="text" placeholder="Enter your name" required /></label>
        <label id="email-label"  for="email">Email <input id="email" type="email" placeholder="Enter your email" required /></label>
        <label id="number-label"  for="number">Age <input id="number" type="number" placeholder="Enter your age" required /></label>
        <label for="dropdown">
            Gender
            <select id="dropdown">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            </select>
        </label>
        </form>
    </>
    )
}

export default Experience