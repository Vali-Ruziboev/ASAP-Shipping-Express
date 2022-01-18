import { useEffect, useState} from 'react'
const useFetch = (zipcode) => {
    let url = `https://www.zipcodeapi.com/rest/js-e6LtY2eQUiZKyCKU9GpzgleZf4Y4UoU6vqWx7f8vwoU6rTrkf7mPTsD3BgIcCNjH/info.json/${zipcode}/degrees`
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
        useEffect(() => {
            const abortCont = new AbortController();
            fetch(url, {signal: abortCont.signal})
            .then(req=>{
                if(!req.ok){
                    throw Error('Data could not been fetched')
                }
                return req.json()
            })
            .then(data=>{
                setIsPending(false)
                setData(data)
                setError(null)
            })
            .catch(err=>{
                if(err.name = 'AbortError'){
                    console.log('Fetch was Aborted!')
                }else{
                    setIsPending(false)
                    setError(err.message)
                }
            })
            return () => abortCont.abort()
        }, [zipcode]) 
    return {data, isPending, error} 
}
export default useFetch;