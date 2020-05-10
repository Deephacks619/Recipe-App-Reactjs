import React from 'react';
import style from './recipe.module.css';
import {Link} from 'react-router-dom'
const Recipe = (props) => {
    return (
        <div className={style.recipe}>
         <img className={style.image} src={props.image} alt="images"/>
            <h2 style={{color:"red",fontFamily:"",textTransform:"uppercase"}}>{props.title}</h2>
            
            <p style={{fontWeight:"bold",fontFamily:""}}>
            SOURCE: {props.source}
            </p>
            <Link to={{ pathname:`/recipe/${props.title}`,
            state:{recipe:props.data}
            }}>
            <button className={style.viewrecipe}>
            VIEW RECIPE
            </button>
            
            </Link>
            
            
        </div>
    );
};

export default Recipe;