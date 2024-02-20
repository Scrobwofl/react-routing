import "./Cats.css";
import { useSearchParams, Link } from "react-router-dom";
import SortOrderForm from "./SortOrderForm";

export default function Cats() {
  let catsArray = [
    {
      id: 1111,
      name: "Skatty Gary",
      url: "./images/cat1.png",
    },
    {
      id: 2222,
      name: "Dodgy Dave",
      url: "./images/cat2.png",
    },
    {
      id: 3333,
      name: "Mad Keith",
      url: "./images/cat3.png",
    },
    {
      id: 4444,
      name: "Hacky Gaz",
      url: "./images/cat4.png",
    },
  ];

  const [searchParams] = useSearchParams();
  const sortType = searchParams.get("sort");

  const catArrayDuplicate = [...catsArray];

  if (sortType == "asc") {
    catArrayDuplicate.sort(handleSort);
  } else if (sortType == "desc") {
    catArrayDuplicate.sort(handleSort).reverse();
  }

  // TimSort?
  function handleSort(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  return (
    <>
      <SortOrderForm />
      <div id="sort-buttons">
        <Link to="/cats?sort=asc">Aphabetical</Link>
        <Link to="/cats?sort=desc">De-Aphabetical</Link>
        <Link to="/cats">No sorting</Link>
      </div>
      <div id="cats-container">
        {catsArray.map((cat) => (
          <div
            className="single-cat"
            key={cat.id}
            style={{
              backgroundImage: `url(${cat.url})`,
              backgroundSize: "cover",
              width: "200px",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
