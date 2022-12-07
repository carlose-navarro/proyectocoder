import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom' 

const handleOnClick = () =>{
    alert('Productos')
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
                <Link to='/'>
                    Inicio
                </Link>
            </Button>

            <Button colorText='black'>
                <Link to='/category/mujer'>
                    Mujer
                </Link>
            </Button>

            <Button colorText='black'>
                <Link to='/category/hombre'>
                    Hombre
                </Link>
            </Button>

            <Button colorText='black' click={handleOnClick2}>
                <Link>
                    Contactanos
                </Link>
            </Button>
            <Button colorText='black'>
                <Link>
                    Ingresar
                </Link>
            </Button>
            <CartWidget />
        </nav>
    )
}

export default Navbar