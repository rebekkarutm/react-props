//importing CSS properties so I can use text-align
import { CSSProperties } from 'react'
//using props to create the card data
type Props = {
    data:{
        pictureURL:string,
        title:string,
        paragraph:string
        paragraphName:string
    }
}
//styling the cards and images and returning the relevant info for the cards
const Card = ({data}:Props)=>{
    const {pictureURL, title, paragraph, paragraphName} = data
    const cardStyle:CSSProperties = {
        borderRadius: '10px',
        border: 'solid 2px',
        width: '200px',
        height: '270px',
        textAlign: 'center',
        lineHeight: '1px',
        margin: '10px'
    }

    const imgStyle:CSSProperties = {
        width: '200px',
        height: '200px',
        borderRadius: '4px'
    }

    return (
        <div style={cardStyle}>
            <img style={imgStyle} src={pictureURL} alt="an animal"/>
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <p>{paragraphName}</p>
        </div>
    )
}

export default Card;