

const Card = ({name, images, description, price}) => {

    const handleClick= () => {
        alert(`Agregaste ${name} al carrito de compra`)
    }

   /*  const { name, images, description, price } = zapato */

  return (
    <div className="col-md-6 col-lg-4 row align-items-center border p-3 rounded">
      <div className="col-4">
        <img
          className="img-fluid"
          src={images}
          alt="Imagen Zapaatos"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fw-bold text-uppercase fs-4">{name}</h3>
        <p className="text-black-50">
          {description}
        </p>
        <p className="fw-black text-primary fs-3">${price}</p>
       
        {/* <button type="button" className="btn btn-dark w-100" onClick={() => alert(`Agregaste ${name} al carrito`)}>
          Agregar al carrito
        </button> */}

        <button type="button" className="btn btn-dark w-100" onClick={handleClick}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default Card
