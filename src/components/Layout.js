import React from 'react'

const Layout = ({ breeds }) => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10'>
            {breeds.map((breed) => (
                <div className='bg-white h-auto rounded-lg m-5 shadow-2xl p-2' key={breed.id}>
                    <img src={breed.image.url} className='h-40 mx-auto rounded-lg' />
                    <p className='text-lg font-semibold'>{breed.name}</p>
                    <p className='text-sm mt-1'><u>Life Span:</u> {breed.life_span}</p>
                    <p className='text-sm mt-1'><u>Height:</u> {breed.height.imperial} inchs</p>
                    <p className='text-sm  mt-1'><u>Weight:</u> {breed.weight.metric} kg</p>
                    {breed.breed_group? <p className='text-sm mt-1'><u>Breed Group:</u> {breed.breed_group}</p>: <></>}
                    <p className='text-sm mt-1'><u>Temperament:</u> {breed.temperament}</p>
                </div>
            ))}
        </div>
    )
}

export default Layout