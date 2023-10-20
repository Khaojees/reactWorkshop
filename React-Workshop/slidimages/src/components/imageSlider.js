import { useState } from "react";
import ImageData from "./imageData"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
const ImageSlider=()=>{
      const [current,setCurrent] = useState(0)
      const prevSlide=()=>{
            // if(current == 0){
            //       setCurrent(ImageData.length-1)
            // }else{
            //       setCurrent(current-1)
            // }
            
            current==0? setCurrent(ImageData.length-1) : setCurrent(current-1)
      }
      const nextSlide=()=>{
            if(current == ImageData.length-1){
                  setCurrent(0) 
            }else{
                  setCurrent(current+1)
            }  
      }

      return(
            <section className="slider">
                  <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
                  <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
                  {ImageData.map((data,index)=>{
                        return(
                              <div className={index===current? "slideactive":"slide"} key={index}>
                                    {index === current && (
                                          <div>
                                                <img src={data.image} alt={data.title} className="image"/>
                                                <p>{data.title}</p>
                                          </div>
                                    )}
                              </div>
                        )
                  })}                  
            </section>
      )

}
export default ImageSlider