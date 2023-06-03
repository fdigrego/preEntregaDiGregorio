import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xuK2Eg0vA-g7quRXP94ZXAHaHa%26pid%3DApi&f=1&ipt=f15b51a6d6bc6e57a93b1fb158a7abb38b40240b6f0e45bbc181c1fa350b687f&ipo=images"
  return (
    <div className='areaCarrito'>
      <img className='imgCarrito' src= {imgCarrito} alt="Carrito de Compras" />
      <p className='numeroCarrito'>7</p>
    </div>
  )
}

export default CartWidget