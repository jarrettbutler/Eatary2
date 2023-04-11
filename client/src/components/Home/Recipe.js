import { Fragment } from "react"

const Recepies=(props)=>{

 return(
   <Fragment>
       <ul class="results">
          
            <li class="preview">
              <a class="preview__link preview__link--active" href="{{data.id}}">
                <figure class="preview__fig">
                  <img class="preview_img" src={props.result.image} alt="Test" />
                </figure>
                <div class="preview__data">
                  <h4 class="preview__title">
                    {props.result.title}
                  </h4>
                  <p class="preview__publisher">{props.result.publisher}</p>
                  
                  <div class="preview__user-generated">
                    <svg class="preview__icon">
                      <use href="/media/icons.svg#icon-user"></use>
                    </svg>
                  </div>
               
                </div>
              </a>
            </li>
           
          </ul>
   </Fragment>
 )}
  export default Recepies
