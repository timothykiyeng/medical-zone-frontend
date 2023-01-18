import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    // res.json()
                    if (!res.ok) {
                        throw Error('Could not fetch data from the resource!')
                    }
                    return res.json()
                })
                .then((data) => {
                    // console.log(data)
                    setData(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err.message)
                })
        }, 1000);

    }, [url])


    return ({data, error, isLoading});
}
 
export default UseFetch;