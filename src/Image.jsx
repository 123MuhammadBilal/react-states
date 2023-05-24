import React from 'react'

const Image = () => {
    const [Img , setImg] = React.useState({
        imgName:"Bilal Ali",
        imgUrl:"https://avatars.githubusercontent.com/u/123251813?v=4",
        // https://www.boredpanda.com/blog/wp-content/uploads/2018/07/worlds-most-beautiful-nigerian-girl-jare-but-mofe-fb-png__700.jpg
        imgHeight:"200",
        imgWidth:"200",
        imgRadius:"200"
    })
    
  return (
    <div>
        <p>{Img.imgName}</p>
        <img 
        src={Img.imgUrl}
        alt="img"
        style={{
            width: Img.imgHeight+"px",
            height: Img.imgWidth +"px",
            borderRadius:Img.imgRadius+"px"
          }}
        />
        <input type="text" value={Img.imgName}  onChange={(e)=>{
            setImg({
                ...Img,
                imgName:e.target.value,
            })
        }}/>
        <input type="text" value={Img.imgUrl}   onChange={(e)=>{
            setImg({
                ...Img,
                imgUrl:e.target.value,
            })
        }}/>
        <input type="number" value={Img.imgHeight}  onChange={(e)=>{
            setImg({
                ...Img,
                imgHeight:e.target.value,
            })
        }}/>
        <input type="number" value={Img.imgWidth}   onChange={(e)=>{
            setImg({
                ...Img,
                imgWidth:e.target.value,
            })
        }}/>
        <input type="number" value={Img.imgRadius}  onChange={(e)=>{
            setImg({
                ...Img,
                imgRadius:e.target.value,
            })
        }}/>
    </div>
  )
}

export default Image;