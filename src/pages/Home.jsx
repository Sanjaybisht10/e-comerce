import Product from "../components/Product";
import Spinner from "../components/Spinner";

import { useEffect,useState} from "react"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const[posts,setPosts]=useState([])

  async function fetchData(){
    setLoading(true);
    try{
     const res=await fetch(API_URL);
     const data=await res.json();
     setPosts(data);
     console.log(data);
    }
    catch(error)
    {
      console.log("Error Found");
      setPosts([]);

    }
    setLoading(false);

  }
  useEffect( ()=>{
    fetchData();
    
  },[])

return (
  <div >
      {
         loading ? <Spinner/>:
        posts.length > 0 ?
          (<div className='grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5'>
            {
              posts.map((post)=>(
                <Product key={post.id} post={post}/>
              ))
            }
          </div>
        ):
        <div className="flex justify-center items-center">
            <p>No post Found</p>
        </div>
      }
  </div>
  );
}

export default Home;
