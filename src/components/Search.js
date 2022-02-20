import React from 'react'

const Search = props => {
    const [text, setText] = React.useState("")

    const clear = () => {
        props.function("")
        setText("")
    }

    return (
        <div className='m-auto w-fit grid md:grid-cols-4 grid-cols-2 mx-auto'>
            <input className="bg-white mt-8 rounded-lg col-span-2 text-center border-solid border-black h-10 mx-2" placeholder="Enter Breed Name..." value={text} onChange={(e) => setText(e.target.value)} />
            <button className="bg-green-500 mx-auto mt-8 h-10 w-32 rounded-lg mx-2" onClick={() => props.function(text)} >Search</button>
            <button className="bg-red-500 mx-auto mt-8 h-10 w-32 rounded-lg mx-2" onClick={() => clear()} >Clear</button>
        </div>
    )
}

export default Search