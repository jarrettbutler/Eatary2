import { Fragment } from "react"
import "./Recipe.css"
const Recepies=(props)=>{

 return(
   <Fragment >
       <ul className="results">
          
            <li className="preview">
              <a className="preview__link preview__link--active" href={props.id} >
                <figure className="preview__fig">
                  <img className="preview_img" src={props.image} alt="Test" />
                </figure>
                <div className="preview__data">
                  <h4 className="preview__title">
                    {props.title}
                  </h4>
                  <p className="preview__publisher">{props.publisher}</p>
                  
                  <div className="preview__user-generated">
                   {/* <svg className="preview__icon">*/}
                      {/* <use href="/media/icons.svg#icon-user"></use> */}
                    {/*</svg>*/}
                  </div>
               
                </div>
              </a>
            </li>
           
          </ul>
   </Fragment>
 )}
  export default Recepies
