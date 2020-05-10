import React, { Component } from 'react';
//import Details1 from './DetailsRecipe/Details1';
//import Details2 from './DetailsRecipe/Details2'
import Navbar from './Navbar'
import './Recipedetails.css';
import style from './recipe.module.css';
import {Link} from 'react-router-dom'

const APP_ID="195e1682";
const APP_KEY="bf948e48985a336d93d01b7fca37096a";
class Recipedetails extends Component {
    state={
        viewrecipe: []
    }
    componentDidMount= async()=>{
        const title = this.props.location.state.recipe.label;
            const res =await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            const dat =await res.json();
            this.setState({
                viewrecipe:dat.hits[0].recipe
            })
            console.log(this.state.viewrecipe)
    }
    render() {  
       const {viewrecipe} = this.state
        return (
            <div>
            <div className="total">
                <Navbar/>
            <div className="cont">
            
            
                <div className="recipe-img">
                    <img style={{width:"30%",height:"auto",textAlign: "left"}} src={ viewrecipe.image } alt="recipe-img"></img>
                </div>
                <h1>{viewrecipe.label}</h1>
                <div className="health-benefits" style={{marginTop:"10px"}}>
                    <span style={{fontSize:"20px",fontWeight:"bold"}}>Health Benifits:</span>
                    <span style={{fontSize:"17px",fontWeight:"bold"}}>{viewrecipe.healthLabels}</span>
                </div>
                <div className="making" style={{marginTop:"10px"}}>
                <span style={{fontSize:"20px",fontWeight:"bold"}}>Source:</span>
                    <span style={{fontSize:"17px",fontWeight:"bold"}}>{viewrecipe.source}</span>
                </div>
                <div style={{marginTop:"10px"}}>
                    <span style={{fontSize:"17px",fontWeight:"bold"}}>Wanna Check Out some more Info:</span>
                    <span><a style={{textDecoration:"none",color:"#192A56",border:"2px solid red",backgroundColor:"white",marginLeft: "5px",padding:"3px"}} href={viewrecipe.url}> Click Here</a></span>
                </div>
                <Link to="/">
                    <button style={{marginTop:"20px"}} className={style.viewrecipe}>
                    GO HOME
                    </button>
                </Link>
                </div>
                
            </div>
            <footer style={{position:"relative",top:"100px",backgroundColor:"#192A56",color:"white",textAlign: "center",padding:"5px"}}>Made by @Deepak Kyatham</footer>
            </div>
        );
}}

export default Recipedetails;