import React,{useState, useEffect} from 'react';
import './App.css';
import Recipe from './Components/Recipe'
import Navbar from './Components/Navbar'

const App =()=> {

  const APP_ID="195e1682";
  const APP_KEY="bf948e48985a336d93d01b7fca37096a";
  const [recipes,setrecipes]=useState([])
  const [search,setsearch] = useState("")
  const [query,setquery] = useState('chicken')

  useEffect(()=>{
    getlinkapi();
  },[query]);
  const getlinkapi = async()=> {
    const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data =await response.json();
    setrecipes(data.hits)
  }
  const handleinput = (e)=>{
    setsearch(e.target.value)
  }
  const searchrecipe = (e)=>{
    e.preventDefault()
    if(search!==""){
    setquery(search)
    }
    else{
      alert("Please Enter Some Recipe in Search Bar")
    }
    setsearch("")
  }
  return (
    <div className="App">
    <Navbar/>
    <div className="body-part">
      <form className="search-form" onSubmit={searchrecipe}>
        <input className="input-text" placeholder="Search Recipes here..." type="text" value={search} onChange={handleinput}></input>
        <button className="search-button" type="submmit" >
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>
      
      (<Recipe key={recipe.recipe.label}
               data={recipe.recipe}
              title={recipe.recipe.label}
              source={recipe.recipe.source}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
       />)
      )}
      </div>
    </div>
    <footer style={{position:"relative",top:"100px",backgroundColor:"#192A56",color:"white",textAlign: "center",padding:"5px"}}>Made by @Deepak Kyatham</footer>

    </div>
  );
}

export default App;
