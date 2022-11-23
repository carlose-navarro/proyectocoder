import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const handleOnClick = () =>{
    alert('Hice Click en Productos')
}

const handleOnClick2 = () =>{
    alert('Hice Click en Contactanos')
}


const Navbar = (props) => {
    return(
        <nav className='navbar'>
            <img src={'./image/logonaga.svg'} width='200' />
            <h1 style={{ color: props.colorTitle}}>Tienda Deportiva</h1>
            <Button colorText='black' click={handleOnClick}>
                Productos
            </Button>
            <Button colorText='black' click={handleOnClick2}>
                Contactanos
            </Button>
            <Button colorText='black'>
                Ingresar
            </Button>
            <CartWidget />
        </nav>
    )
}

export default Navbar