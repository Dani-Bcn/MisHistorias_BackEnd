import axios from 'axios';
import { Form } from 'react-hook-form';



export default function Register() {





  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Register</button>
      </form>

    </div>
  )
}
