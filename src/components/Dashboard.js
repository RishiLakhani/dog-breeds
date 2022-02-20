import React from 'react'
import Header from "./Header";
import Layout from './Layout';
import Loading from './Loading';
import Search from "./Search";

const Dashboard = ({ allBreeds }) => {
    const [breeds, setBreeds] = React.useState(allBreeds)

    const search = (name) => {
        setBreeds(() =>
            allBreeds.filter(breed => {
                return breed.name.toLowerCase().startsWith(name.toLowerCase())
            })
        )
        console.log(breeds)
    }

    return (
        <div className="container text-center pt-5 font-serif">
            <Header />
            <Search function={search} />
            {breeds?<Layout breeds={breeds} />:<Loading />}
        </div>
    )
}

export default Dashboard