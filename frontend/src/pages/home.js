//navigate with buttons
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div data-testid="home">
      <div className=" bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 p-5 text-center text-4xl">
        Home page
      </div>
      <div className="grid-rows-2 gap-x-4">
        <button
          onClick={() => navigate("/products")}
          className="bg-purple-600 text-black font-bold p-4"
        >
          Our Products
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-purple-600 text-black font-bold p-4"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}
