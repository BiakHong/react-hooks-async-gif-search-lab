import React,{ useState,useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
const GifListContainer = () => {

    const[pic, setPic] = useState([])
    const [search, setSearch] = useState("dolphins");
    
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=gRv9B6mWmOCQXqnxOcCJbeL99CShw0FY`)
        .then((res)=>res.json())
        .then(({data})=>{
            const gifs = data.slice(0,3).map((gif) => (
                {
                 url: gif.images.original.url 
                }));
                setPic(gifs);
            
        })
    
    },[search])

    function onSubmitQuery(newSearch){
        setSearch(newSearch)
    }


  return (
    <div>
        <GifSearch onSubmitQuery={onSubmitQuery}/>
     <GifList  pic={pic} />
     
     
    </div>
  )
}

export default GifListContainer