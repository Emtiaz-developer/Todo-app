import { formatDistance } from 'date-fns/formatDistance';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletTasks } from '../feauters/TaskViewSlice';
import UpdateTasks from './UpdateTasks';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const TaskView = () => {
    const {Tasks} = useSelector((state) => state.Tasks);
    const [visible, setVisible] = useState(false);
    const [editedprojectdescription, setEditedProjectDescirption] = useState("");
    const [editedprojecttitle, setEditedProjectTitle] =  useState("");
    const [editedname, setEditedName] = useState("");
    const [editedid, setEditedId] = useState("");
    const dispatch = useDispatch();
    const handleDelet = (id) =>{
        dispatch(deletTasks(id));
    }
    const handleUpdate = (task) =>{
        setVisible(true);
        setEditedId(task.id)
        setEditedName(task.name);
        setEditedProjectTitle(task.projecttitle)
        setEditedProjectDescirption(task.projectdescription)
    }
    const perRow = 6;
    const [next, setNext] = useState(perRow);
    if(visible){
        return(
            <UpdateTasks editedname={editedname} visible={visible} setVisible={setVisible} editedid={editedid} editedprojecttitle={editedprojecttitle}  editedprojectdescription={editedprojectdescription} setEditedName={setEditedName} setEditedProjectTitle={setEditedProjectTitle} setEditedId={setEditedId}  setEditedProjectDescirption={setEditedProjectDescirption}/>
        )
    }
    const handleLoadMore = () =>{
        setNext((prev) => prev + 3);
    }
    
  return (
   <>
   <Helmet>
    <title>TaskView</title>
   </Helmet>
   <div className='w-full h-screen'>
    <div className='container mt-5'>
   <div className='grid grid-cols-3 gap-3'>
   {
        Tasks.slice(0,next)?.map((task) =>(
            <div className='border border-slate-400 rounded shadow-2xl px-5 py-3' key={task.id}>
                <h1 className='text-black font-mono font-semibold text-2xl'>Name: <span className='text-slate-500 font-normal text-[18px]'>{task.name}</span></h1>
                <h1 className='text-black font-mono font-semibold text-2xl'>Project title: <span className='text-slate-500 font-normal text-[18px]'>{task.projecttitle}</span></h1>
                <h1 className='text-black font-mono font-semibold text-2xl'>Project description: <span className='text-slate-500 font-normal text-[18px]'>{task.projectdescription}</span></h1>
                <h1 className='text-black font-mono font-semibold text-2xl'>CreatedAt: <span className='text-slate-500 font-normal text-[18px]'>{formatDistance( task.createdAt, new Date(), { addSuffix: true })}</span></h1>

                <div className='mt-4 flex justify-end gap-x-2'>
                <button onClick={() => handleDelet(task.id)} className='bg-red-500 rounded px-5 py-2 text-white'>Delet</button>
                <button onClick={() => handleUpdate(task)} className='bg-cyan-900 rounded px-5 py-2 text-white'>Update</button>
                </div>
            </div>
        ))
    }
   </div>
    </div>
  {
    Tasks.length > next &&(
        <div className='text-center mt-5 mb-5'>
        <button onClick={handleLoadMore} className='bg-cyan-900 text-white rounded px-10 py-3'>Load More</button>
        </div>
    )
  }
   </div>
   </>
  )
}

export default TaskView