import { useState, useEffect } from "react";
import { Footer, Header, Product } from "./components";
import axios from "axios";
import { Product as ProductType } from "./api/Product";
import { BACKEND_URL } from "./api/api";
import "./App.css";

function App() {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        axios.get(BACKEND_URL).then((res) => {
            console.log(res);
            setProducts(res.data as ProductType[]);
        });
    }, []);
    return (
        <div className="app-container">
            <Header />
            <main className="main">
                <div className="main_container">
                    {products.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                descriptionHtml={item.descriptionHtml}
                                featuredImage={item.featuredImage}
                            />
                        );
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
