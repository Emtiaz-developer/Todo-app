import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTasks } from '../feauters/TaskViewSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    const [textcount, setTextCount] = useState(100);
    const [name, setName] = useState("");
    const [projecttitle, setProjectTitle] = useState("");
    const [projectdescription, setProjectDescription] = useState("");
    const [check, setCheck] = useState(false);
    const limit = 100;
    const dispatch = useDispatch();
    const handleChange = (e) =>{
      setProjectDescription(e.target.value);
      const randVal = e.target.value;
     
      const count = limit - randVal.length;
      setTextCount(count);
    
    
  


    }
    const handleTaskChange =(e) =>{
      setCheck(e.target.checked);
    }
    const handleSaveTasks = (e) =>{
      e.preventDefault();
    if(name !=="" && projecttitle !=="" && projectdescription !==""){
      const AddnewTasks = {
        id: Date.now().toString(32),
        name : name,
        projecttitle: projecttitle,
        projectdescription: projectdescription,
        createdAt : new Date().toString()
      }
      dispatch(addTasks(AddnewTasks));
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
    const checkRef = useRef(null);
    const handleCancle = () =>{
      checkRef.current.checked = false;
      setCheck(false);
      setName("");
      setProjectTitle("");
      setProjectDescription("");
      setTextCount(100);
    }

  
  return (
   <>
   <Helmet>
    <title>Home</title>
   </Helmet>
   <ToastContainer/>
   <div className='w-full h-screen bg-cyan-500 flex justify-center items-center'>
    <div className='w-1/4 bg-white shadow-2xl rounded px-8 py-5'>
    <h1 className='text-center font-mono text-xl text-black font-semibold'>Add your task</h1>
   <div>
    <label htmlFor="name" className='font-mono font-semibold'>Name:</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='border border-blue-300 mb-2 outline-none px-3 py-2 w-full mt-2 rounded' />
    <label htmlFor="projectname" className='font-mono font-semibold mt-3'>Project title:</label>
    <input value={projecttitle} onChange={(e) => setProjectTitle(e.target.value)} type="text" placeholder='Project title' className='border border-blue-300 mb-2 outline-none px-3 py-2 w-full mt-2 rounded' />
    <label htmlFor="projectdescription" className='font-mono font-semibold mt-3'>Project description:</label>
   <textarea value={projectdescription} onChange={handleChange} name="descriptoin" placeholder='Project description' rows={3} maxLength={100} id="" className='border border-blue-300  outline-none px-3 py-5 w-full mt-2 rounded resize-none' ></textarea>
   <p className='text-slate-400 text-[14px]'>{textcount} Character Remaining</p>
   <input ref={checkRef} type="checkbox"  onChange={handleTaskChange} className='mt-4 mb-3 mr-2 ' />
   <label htmlFor="checkbox" className={!check ? "text-slate-400" : "text-black"}>I want to add this task</label>
   <div className='mt-5'>
    <button onClick={handleSaveTasks} disabled={!check} className={!check ? "bg-blue-300 px-5 py-2 rounded text-white mr-2" : 'bg-blue-600 px-5 py-2 rounded text-white mr-2'}>Save</button>
    <button onClick={handleCancle} className='bg-red-500 px-5 py-2 rounded text-white mr-4'>Cancel</button>
   </div>
   </div>
    </div>
   </div>
   </>
  )
}

export default Home