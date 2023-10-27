import './cards.css'
import { CSSProperties } from 'react'
type Props = {
    data:{
        pictureURL:string,
        title:string,
        paragraph:string
        paragraphName:string
    }
}
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
        <div className='cardCss' style={cardStyle}>
            <img style={imgStyle} src={pictureURL} alt="an animal"/>
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <p>{paragraphName}</p>
        </div>
    )
}

export default Card;