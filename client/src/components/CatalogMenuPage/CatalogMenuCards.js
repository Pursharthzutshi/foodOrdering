import "./CatalogMenuPage.css";
// import image from "../../../src/images/image-from-rawpixel-id-6121211-png.png";

function CatalogMenuCards({ menuItem, onAddItemToCart }) {
  return (
    <div className="catalog-menu-cards-container">
      <div className="catalog-menu-cards">
        <img className="image" alt="" src={menuItem.img} />
        <p>{menuItem.title}</p>
        <p>Rating :</p>
        <p>Price : ₹ {menuItem.price}</p>
        <button
          onClick={(e) => {
            onAddItemToCart(menuItem, e);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default CatalogMenuCards;
