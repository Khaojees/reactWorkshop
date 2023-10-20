import { useState,useEffect } from 'react'
import './transaction.css'
import { v4 as uuidv4 } from 'uuid';
const FormComponent =(props)=>{

      const [title,setTitle]=useState('')
      const [amount,setAmount]=useState('')
      const [formValid,setFormValid] = useState(false)

      const inputtitle =(event)=>{
            setTitle(event.target.value)
      }

      const inputAmount=(event)=>{
            setAmount(event.target.value)
      }

      const SaveItem =(event)=>{
            event.preventDefault()
            const itemData={
                  id:uuidv4(),
                  title:title,
                  amount:Number(amount)
            }
            props.onAddItem(itemData)
            setTitle('')
            setAmount('')
      }

      useEffect(()=>{
            const checkdata = title.trim().length>0 && amount!==''
            setFormValid(checkdata)
      },[title,amount])

      return(
            <div>
                  <form onSubmit={SaveItem}>
                        <div className='form-control'>
                              <label>ชื่อรายการ</label>
                              <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputtitle} value={title}/>
                        </div>
                        <div className='form-control'>
                              <label>จำนวนเงิน</label>
                              <input type="number" placeholder="+รายรับ -รายจ่าย" onChange={inputAmount} value={amount}/>
                        </div>
                        <div >
                              <button type="submit" className='button-control' disabled={!formValid}>เพิ่มข้อมูล</button>
                        </div>
                  </form>
            </div>
      )
            
      
}

export default FormComponent