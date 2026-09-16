import AdminPage from "./AdminPage";
import GuestPage from "./GuestPage";
import ProductCard from "./ProductCard";
import UserPage from "./UserPage";

const Rendering = () => {
  const isLoggedIn = false;
  const age = 455;
  const isAdmin = true;
  const userName = "";
  let role = ""

  const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Shoes", price: 3000 },
  { id: 3, name: "Headphones", price: 2000 }
  ];

  { /* If / else Rendering */ }

  if ( isLoggedIn ) {
    console.log("Welcome Dhiraj")
  } else {
    console.log("Please Login");
  }

{ /* Switch statement rendering */ }
    const renderRole = () => {
    switch (role) {
        case "admin":
            return <AdminPage />;

        case "user":
            return <UserPage />;

        default:
            return <GuestPage />;
    }
};


  return(
  <>
    {/* Conditional Rendering - ternary */}
    {age < 18 ? <h2>You are minor</h2> : age < 65 ? <h2>You are Adult</h2> : <h2>You are Old</h2>}

    {/* Logical AND(&&) Rendering */}
    {isAdmin && <ProductCard /> }

    <br />
    {/* Logical OR || Rendering */}
    {userName || "Guest"}

    <br />
    {renderRole()}

    <br />

    {/* List Rendering */}
    {
        products.map((product) =>(
            
            <p key = {product.id}> {product.name} - {product.price} </p>
        ))
    }
  </>
  );
};

export default Rendering;
