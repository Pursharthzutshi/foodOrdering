import "./CatalogMenuPage.css";
import CatalogMenuData from "./CatalogMenuData";
import CatalogMenuCards from "./CatalogMenuCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CatalogMenuPage({ handleClick, test,userName }) {

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const welcomeBackMessageTimeInterval = useSelector((state)=>state.login.welcomeBackMessageTimeInterval)

  // useEffect(()=>{
  //   useDispatch((setTimeout(()=>{
  //     welcomeBackMessageTimeInterval(ture)
  //   })))
  // })

  return (
    <div className="catalog-menu-page">
      <br></br>
      <h3>CatalogMenuPage</h3>
      
    {
    welcomeBackMessageTimeInterval &&
      <p className="login-welcome-back-message">Welcome Back {userName}</p>
    }
      
      <h3 className="heading">Menu</h3>
      <div className="search-menu-input-div">
        <input
          className="search-menu-input"
          placeholder="Search Menu"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
      </div>
      <div className="catalog-menu-page-buttons-container">
        <button
          onClick={() => {
            setCategoryFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Pizza");
          }}
        >
          Pizza
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Burger");
          }}
        >
          Burger
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Pasta");
          }}
        >
          Pasta
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Noodles");
          }}
        >
          Noodles
        </button>
      </div>

      {test ? (
        <div className="item-added-message">
          <p className="item-already-added-msg">
            Item Already added in the cart
          </p>
          <p className="item-already-added-msg">
            check the Quantity in the cart menu
          </p>
        </div>
      ) : null}

      <div className="catalog-menu-section">
        {CatalogMenuData.filter((menuItem) => {

          // filtering based on search input title filter
          
          return menuItem.title.toLowerCase().includes(search.toLowerCase());
        })
          .filter((menuItem) => {
            if (!categoryFilter || categoryFilter === "all") {
              return true;
            }

            return menuItem.category === categoryFilter;
          })
          .map((menuItem) => {
            return (
              <div>
                <CatalogMenuCards
                  menuItem={menuItem}
                  onAddItemToCart={handleClick}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CatalogMenuPage;
