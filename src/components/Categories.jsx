import { useEffect, useState } from "react";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8012/api/categories.php") // <-- PHP API path
            .then(res => res.json())
            .then(data => {
                console.log("Fetched JSON:", data);
                setCategories(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="row gy-4">
            {categories.slice(0, 10).map((cat) => (
                <div key={cat.id} className="col-12 col-md-12 col-lg-6">
                    <div className={`card ${cat.card_color} shadow-sm`}>
                        <div className="card-body">
                            <h3 className="mb-4 fw-bold">{cat.category}</h3>
                            <div className="row gy-3">
                                {cat.subcategories && cat.subcategories.slice(0, 6).map((sub) => (
                                    <div key={sub.id} className="col-6 col-md-4 col-lg-4">
                                        <a href="#">
                                            <div className="card category-box">
                                                <div className="card-body text-center p-1">
                                                    <i className="bi bi-lightbulb-fill hover rotate-180 display-4"></i>
                                                    <i className={`bi bi-book-half ${sub.text_color} hover-hide display-4`}></i>
                                                    <p className="small fw-medium">{sub.subcategory}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className="text-end mt-4">
                                <a href="#" className="btn btn-primary fw-bold">
                                    View All Category <i className="bi bi-chevron-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Categories;
