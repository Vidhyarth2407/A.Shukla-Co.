import React, { useState } from 'react'

const lala = () => {
    // const [larry, setLarry] = useState(["larry", "Moe", "Curly"]);
    const [count, SetCount] = useState(0)

    const handleClick = () => {
        SetCount(count + 1)
    }



    return (
        <div className='bg-white h-screen max-auto pt-25'>
            <h1 className='font-bold text-5xl'>Hello World</h1>
            <p className='text-2xl'>{count}</p>
            <button className='text-white px-4 py-2 rounded-md bg-red-300' onClick={handleClick}>Click Me</button>
            <button className='text-white px-4 py-2 rounded-md bg-red-300' onClick={() => SetCount(count - 1)}>Click Me</button>
            ContentResolver.delete()
        </div>
    )
}

export default lala;