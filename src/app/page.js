import Image from "next/image";
import Data from "./data.json";

export default function Home() {
  const isUserLoggedIn = true;
  const userName = "shakti";

  return (
    <div>
      {isUserLoggedIn ? <p>Welcome {userName}</p> : <p>Please login..</p>}
    </div>
  );

  // return laptops.map((element) => {
  //   return (
  //     <div className="elements">
  //       <p>{element.name}</p>
  //       <p>{element.processor}</p>
  //     </div>
  //   );
  // });
}
const productList = Data.products;
console.table(productList);
