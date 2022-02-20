import React from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [allBreeds, setAllBreeds] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    axios
      .get(
        "https://api.thedogapi.com/v1/breeds"
      )
      .then((res) => {
        setAllBreeds(res.data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  const page = isLoading? <Loading />: <Dashboard allBreeds={allBreeds} />

  return page
}

export default App;
