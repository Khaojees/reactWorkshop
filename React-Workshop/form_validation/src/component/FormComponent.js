import './FormComponent.css'
import {useState} from "react"
const FormConponent = () =>{
      const [userName,setUserName] = useState('')
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const [confirmPassword,setConfirmPassword] = useState('')

      const [errorUsername,setErrorUsername] = useState('')
      const [errorEmail,setErrorEmail] = useState('')
      const [errorPassword,setErrorPassword] = useState('')
      const [errorConfirmPassword,setErrorConfirmPassword] = useState('')
      
      const [userNameColor,setUserNameColor] = useState('')
      const [emailColor,setEmailColor] = useState('')
      const [passwordColor,setPasswordColor] = useState('')
      const [confirmPasswordColor,setConfirmPasswordColor] = useState('')
      
      const validateForm = (e) =>{
            e.preventDefault()
            if(userName.length>8){
                  setErrorUsername('')
                  setUserNameColor('green')
            }else{
                  setErrorUsername('Use username more than 8 charater')
                  setUserNameColor('red')
            }
            if(email.includes("@")){
                  setErrorEmail('')
                  setEmailColor('green')
            }else{
                  setErrorEmail('Wrong Email format')
                  setEmailColor('red')
            }

            if(password.length>8){
                  setErrorPassword('')
                  setPasswordColor('green')
            }else{
                  setErrorPassword('Enter a password of at least 8 characters')
                  setPasswordColor('red')
            }
            if(confirmPassword != "" && password === confirmPassword){
                  setErrorConfirmPassword('')
                  setConfirmPasswordColor('green')
            }else{
                  setErrorConfirmPassword('Passwords do not match')
                  setConfirmPasswordColor('red')
            }
      }

      return(
            <div className="container">
                  <form className="form" onSubmit={validateForm}>
                        <h2>Register Form</h2>
                        <div className="form-control">
                              <label>Name</label>
                              <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                              <small style={{color:userNameColor}}>{errorUsername}</small>
                        </div>
                        <div className="form-control">
                              <label>Email</label>
                              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                              <small style={{color:emailColor}}>{errorEmail}</small>
                        </div>
                        <div className="form-control">
                              <label>Password</label>
                              <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                              <small style={{color:passwordColor}}>{errorPassword}</small>
                        </div>
                        <div className="form-control">
                              <label>Confirm Password</label>
                              <input type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{borderColor:confirmPasswordColor}}/>
                              <small style={{color:confirmPasswordColor}}>{errorConfirmPassword}</small>
                        </div>
                        <button type="submit">Register</button>
                  </form>
            </div>
      )
}
export default FormConponent