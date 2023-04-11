import React, { Fragment, useState } from "react";
import "./AddRec.css";
const AddRecipe = () => {
   const[enteredTitle, setEntEredTitle]=useState('')
   const[enteredUrl, setEnteredUrl]=useState('')
   const[enteredImUrl, setEnteredImUrl]=useState('')
   const[enteredPublisher, setEnteredPublisher]=useState('')
   const[enteredPrepTime, setEnteredPrepTime]=useState('')
   const[enteredServings, setEnteredServings]=useState('')
   const[enteredIng1, setEnteredIng1]=useState('')
   const[enteredIng2, setEnteredIng2]=useState('')
   const[enteredIng3, setEnteredIng3]=useState('')
   const[enteredIng4, setEnteredIng4]=useState('')
   const[enteredIng5, setEnteredIng5]=useState('')
   const[enteredIng6, setEnteredIng6]=useState('')

  const TitleHandler=(event)=>{setEntEredTitle(event.target.value)  }
  const UrlHandler=(event)=>{setEnteredUrl(event.target.value)  }
  const ImgUrlHandler=(event)=>{setEnteredImUrl(event.target.value)  }
  const PublisherlHandler=(event)=>{setEnteredPublisher(event.target.value)}
  const PrepTimelHandler=(event)=>{setEnteredPrepTime(event.target.value)}
  const ServingsHandler=(event)=>{setEnteredServings(event.target.value)}
  const Ingredient1Handler=(event)=>{setEnteredIng1(event.target.value)}
  const Ingredient2Handler=(event)=>{setEnteredIng2(event.target.value)}
  const Ingredient3Handler=(event)=>{setEnteredIng3(event.target.value)}
  const Ingredient4Handler=(event)=>{setEnteredIng4(event.target.value)}
  const Ingredient5Handler=(event)=>{setEnteredIng5(event.target.value)}
  const Ingredient6Handler=(event)=>{setEnteredIng6(event.target.value)}


  const UploadHandler=(event)=>{event.preventDefault()
console.log(enteredTitle,enteredUrl,)
   }

  return (
    <Fragment>
      <div className="cont">
        <div className="AddRec ">
          <div className="RecData">
            Recipe Data
            <div className="Title bt">
              <label>Title</label>
              <input type="text" onChange={TitleHandler} value={enteredTitle} />
            </div>
            <div className="Url bt">
              <label>URL</label>
              <input type="text" onChange={UrlHandler}value={enteredUrl} />
            </div>
            <div className="ImageUrl bt">
              <label>Image URL</label>
              <input type="text" onChange={ImgUrlHandler} value={enteredImUrl} />
            </div>
            <div className="Publish bt">
              <label>Publisher</label>
              <input type="text" onChange={PublisherlHandler} value={enteredPublisher}/>
            </div>
            <div className="PrepTime bt">
              <label>Preparation Time</label>
              <input type="text" onChange={PrepTimelHandler}value={enteredPrepTime} />
            </div>
            <div className="Servings bt">
              <label>Servings</label>
              <input type="text" onChange={ServingsHandler}value={enteredServings} />
            </div>
          </div>
          <div className="Ingredients">
            Ingredients
            <div className="Ingredient1 bt">
              <label>Ingredient 1</label>
              <input type="text"  onChange={Ingredient1Handler}value={enteredIng1}/>
            </div>
            <div className="Ingredient2 bt">
              <label>Ingredient 2</label>
              <input type="text" onChange={Ingredient2Handler} value={enteredIng2}/>
            </div>
            <div className="Ingredient3 bt">
              <label>Ingredient 3</label>
              <input type="text" onChange={Ingredient3Handler}value={enteredIng3}/>
            </div>
            <div className="Ingredients4 bt">
              <label>Ingredient 4</label>
              <input type="text" onChange={Ingredient4Handler}value={enteredIng4} />
            </div>
            <div className="Ingredient5 bt">
              <label>Ingredient 5</label>
              <input type="text" onChange={Ingredient5Handler}value={enteredIng5} />
            </div>
            <div className="Ingredient6 bt">
              <label>Ingredient 6</label>
              <input type="text" onChange={Ingredient6Handler} value={enteredIng6}/>
            </div>
          </div>
        </div>
        <div>
        <button className="Upload" type="submit" onClick={UploadHandler}> Upload</button>
        <a href="/">
          <button className="Upload">Go to Home Page</button>
        </a>
      </div>
      </div>
      
    </Fragment>
  );
};
export default AddRecipe;
