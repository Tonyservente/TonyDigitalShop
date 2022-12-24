import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({totalList}) => {
    console.log('este es el total', totalList)

    return (
    <>
        <p className='cart'><FaShoppingCart/>{totalList}</p>
    </>
    )
}
  
export default CartWidget;