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
            <img className='logoImg' src={'./image/nagaSport.png'} id="titulo"/>
            <h1 className='logoName' >Tienda Deportiva</h1>
            <div >
                <Link to='/'>
                    <Button click={handleOnClick}>
                            Inicio
                    </Button>
                </Link>
                
                <Link to='/category/mujer'>
                    <Button >
                        Mujer
                    </Button>
                </Link>

                <Link to='/category/hombre'>
                    <Button >
                        Hombre
                    </Button>
                </Link>

                <Link>
                    <Button click={handleOnClick2}>
                        Contactanos
                    </Button>
                </Link>

                <Link>
                    <Button >
                        Ingresar
                    </Button>
                </Link>

                <Link to='/Cart'>
                    <CartWidget />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar