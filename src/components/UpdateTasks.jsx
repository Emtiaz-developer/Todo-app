import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTasks } from '../feauters/TaskViewSlice';
import { ToastContainer, toast } from 'react-toastify';

const UpdateTasks = ({
  editedname,
  editedprojecttitle,

    editedprojectdescription,
    setEditedName,
    setEditedProjectTitle,
    editedid,
    setEditedId,
    setVisible,

    setEditedProjectDescirption
}) => {
  const iniVal = 100 - editedprojectdescription.length;
  const [check, setCheck] = useState(false);
   const [iniCount, setIniCount] = useState(iniVal);
   const count = 100;
    const handleChange = (e)  =>{
     setEditedProjectDescirption(e.target.value);
     const randVal = e.target.value.length;
     setIniCount(count - randVal)
      
        
    }
 const dispatch = useDispatch();
    const handleUpdateSave = (e)  =>{
      e.preventDefault();
     if(editedname !== "" && editedprojecttitle !== "" && editedprojectdescription !== ""){
      let updateData = {
        id:editedid,
        name:editedname,
        projecttitle:editedprojecttitle,
        projectdescription:editedprojectdescription,
        createdAt: new Date().toString()
      }
      dispatch(updateTasks(updateData))
      toast.success('Successfully added tasks', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
        setTimeout(() =>{
          setVisible(false)
        },1500)
     }else{
      toast.error('Please fill the all fields', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
     }
    }
    const handleTaskChange =(e) =>{
      setCheck(e.target.checked);
    }
    const checkRef = useRef(null);
    const handleCancle = () =>{
      checkRef.current.checked = false;
      setCheck(false);
      setIniCount(100)
      setVisible(false);
      setEditedName("");
      setEditedProjectTitle("");
      setEditedProjectDescirption("");
      
    }
 
  
  return (
    <>
    <ToastContainer/>
    <div className='bg-[#313234] w-full h-screen flex justify-center items-center'>
    <div className='w-1/4 bg-white shadow-2xl rounded px-8 py-5'>
    <h1 className='text-center font-mono text-xl text-black font-semibold'>Update your task</h1>
   <div>
    <label htmlFor="name" className='font-mono font-semibold'>Name:</label>
    <input value={editedname} onChange={(e) => setEditedName(e.target.value)}  type="text" placeholder='Name' className='border border-blue-300 mb-2 outline-none px-3 py-2 w-full mt-2 rounded' />
    <label htmlFor="projectname" className='font-mono font-semibold mt-3'>Project title:</label>
    <input value={editedprojecttitle} onChange={(e)  => setEditedProjectTitle(e.target.value)}  type="text" placeholder='Project title' className='border border-blue-300 mb-2 outline-none px-3 py-2 w-full mt-2 rounded' />
    <label htmlFor="projectdescription" className='font-mono font-semibold mt-3'>Project description:</label>
   <textarea value={editedprojectdescription} onChange={handleChange}  name="descriptoin" placeholder='Project description' rows={3} maxLength={100} id="" className='border border-blue-300  outline-none px-3 py-5 w-full mt-2 rounded resize-none' ></textarea>
   <p className='text-slate-400 text-[14px]'>{iniCount} Character Remaining</p>
   <input ref={checkRef}  onClick={handleTaskChange} type="checkbox"  className='mt-4 mb-3 mr-2 ' />
   <label htmlFor="checkbox" className= {!check ?  "text-slate-400" : "text-black" } >I want to add this task</label>
   <div className='mt-5'>
    <button onClick={handleUpdateSave} disabled={!check} className={!check ? "bg-blue-300 px-5 py-2 rounded text-white mr-2" : 'bg-blue-600 px-5 py-2 rounded text-white mr-2'}>Save Update</button>
    <button onClick={handleCancle} className='bg-red-500 px-5 py-2 rounded text-white mr-4'>Cancel</button>
   </div>
   </div>
    </div>
    </div>
    </>
  )
}

export default UpdateTasks