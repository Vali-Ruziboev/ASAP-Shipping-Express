import { useEffect, useState} from 'react'
const useFetch = (zipcode) => {
    let url = `https://www.zipcodeapi.com/rest/js-e6LtY2eQUiZKyCKU9GpzgleZf4Y4UoU6vqWx7f8vwoU6rTrkf7mPTsD3BgIcCNjH/info.json/${zipcode}/degrees`
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [isLimitUp, setIsLimitUp] = useState(false)
        useEffect(() => {
            const abortCont = new AbortController();
            fetch(url, {signal: abortCont.signal})
            .then(req=>{
                if(req.status===400){
                    throw Error('Data could not been fetched')
                }else if(req.status ===404){
                    throw Error('The zip code you provided was not found.')
                }else if(req.status === 429){
                    throw Error("Limit's up")
                }
                return req.json()
            })
            .then(data=>{
                setIsPending(false)
                setIsLimitUp(false)
                setData(data)
                setError(null)
            })
            .catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('Fetch was Aborted!')
                }else if(err.message==="Limit's up"){
                    setIsLimitUp(true)
                }
                else{
                    setIsLimitUp(false)
                    setIsPending(false)
                    setError(err.message)
                }
            })
            return () => abortCont.abort()
        }, [url]) 
    return {data, isPending, error, isLimitUp} 
}
export default useFetch;