import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [post,setPost] = useState([]);
  const [search,setSearch] = useState('');

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products").then((res)=>res.json()).then((data)=>setPost(data));
  },[]);

  const filterArray = post.filter((data)=>data.title.toLowerCase().indexOf(search.toLowerCase()) !==-1);

  return (
    <>
      <div>
        <h1>Products</h1>
        <div>
          <input placeholder="Search" type='search' onChange={(e)=>setSearch(e.target.value)} />
        </div>

        <div>
          {filterArray.map((data)=>(
            <div key={data.id}>
            <div>
              <a>
                <img src={data.images[0]} alt="ecommerce" />
              </a>

              <div>
                <h3>{data.category.name}</h3>
                <h2>{data.title}</h2>
                <p>{data.price}</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
