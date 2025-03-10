import Button from '../UI/Button'
import image from '../assets/logo.jpg'

export default function Header(){
    return(
        <div id="main-header">
            <div id="title">
                <img src={image} alt=''/>
                <h1>FOOD ORDER</h1>
            </div>
            <div>
                <Button textOnly>Cart(0)</Button>
            </div>
        </div> 
        ) 
    }