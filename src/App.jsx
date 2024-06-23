import ListComponent from "./components/list.component";
import FilterComponent from "./components/E-commerce/Filter.Component";
import ProductListComponent from "./components/E-commerce/productList.component";
import DisplayProductComponent from "./components/product/DisplayProduct.Component";
import "./App.css";
import { useState } from "react";

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


// **************E-comerce data****************
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Shirt', category: 'Clothing', price: 50 },
  { id: 3, name: 'Book', category: 'Books', price: 20 },
  {id:4, name: 'Novel', category: 'Books',price: 25},
];


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearchTerm && matchesCategory;
  });
  // const [searchTerm, setSearchTerm] = useState('');
  // const [stories, setStories] = useState(initialStories)

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredStories = stories.filter((story) => (
  //   story.title.toLowerCase().includes(searchTerm.toLowerCase())
  // ))
  return (
    <div>
      {/* <label htmlFor="search">search</label>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ListComponent list={filteredStories} /> */}
       <FilterComponent
        searchTerm={searchTerm}
        selectedCategories={selectedCategories}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListComponent products={filteredProducts} />
{/* **********************productpage */}
      <DisplayProductComponent />
    </div>
  );
}

export default App;
