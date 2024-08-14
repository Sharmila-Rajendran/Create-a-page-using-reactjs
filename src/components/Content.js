import React from 'react';
import ReactDOM from 'react-dom';
import './Content.css';

const Content = () => {
  return (
    <div className='cont'>
        <h1>Learners List</h1>
      <table>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Department</th>
            <th>YOP</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Sharmila</td>
            <td>CSE</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Sanjith</td>
            <td>IT</td>
            <td>2024</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Suhanth</td>
            <td>CSE</td>
            <td>2026</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Praveen</td>
            <td>MECH</td>
            <td>2023</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Boopesh</td>
            <td>CSE</td>
            <td>2025</td>
        </tr>
      </table>
      <h1>If Interested , Please Join ! Lets start our learning journey</h1>
      <form>
        <h2>Form</h2>
        <label>Name : </label>
        <input type="text" name="name" /><br></br><br></br>
        <label>Email : </label>
        <input type='email' name='mail' /><br></br><br></br>
        <label>Phone : </label>
        <input type='number' name='mobile' /><br></br><br></br>
        <div className='butt'>
            <button type='submit'>Submit</button>
            <button type='submit'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Content;
