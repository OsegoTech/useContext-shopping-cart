import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct({ addProduct}) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const product = { name, price, description, url };
        addProduct(product)
        alert(`${name} Product Added Successfully`)
        navigate("/")
    };
    return(
        <form onSubmit={handleSubmit}>
            <h1>Add New Product</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="url">URL</label>
                <input type="text" className="form-control" value={url} onChange={(e) => setUrl(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Product</button>
        </form>
    )
}