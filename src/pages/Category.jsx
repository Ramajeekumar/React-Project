import { useEffect } from 'react';
import Categories from '../components/Categories'; // Import component


function Category() {
    useEffect(() => {
        document.title = 'Category Page';

        const metaDescription = document.querySelector('meta[name="description"]');
        const metaKeywords = document.querySelector('meta[name="keywords"]');

        if (metaDescription) {
            metaDescription.setAttribute('content', 'This is the home page of our website.');
        } else {
            const desc = document.createElement('meta');
            desc.name = 'description';
            desc.content = 'This is the home page of our website.';
            document.head.appendChild(desc);
        }

        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'home, react, vite');
        } else {
            const keywords = document.createElement('meta');
            keywords.name = 'keywords';
            keywords.content = 'home, react, vite';
            document.head.appendChild(keywords);
        }

        // Optionally clean up on unmount
        return () => {
            document.title = 'React App'; // fallback title
        };
    }, []);
    return (
        <div className="page">
            <secton className="py-4">
                <div className="bg-img-4">
                    <nav className="container pt-5" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/" className="text-white"><i className="bi bi-house-door"></i> Home</a></li>
                            <li class="breadcrumb-item text-light" aria-current="page">Category</li>
                        </ol>
                    </nav>
                </div>

            </secton>
            <section className="py-5 bg-light category">
                <div className="container">
                    <div className="py-2 text-center">
                        <h2 className="fw-bold">All types of Mutli Choise Questions <span className="text-danger"> (MCQ)</span></h2>
                        <p>We provide all subjects online practice tests for free. Enjoy learning !</p>
                    </div>
                    <Categories />
                    <div className="row gy-3">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="card bg-primary-subtle shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4 fw-bold">Microsoft Office</h3>
                                    <div className="row gy-3">
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-primary hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-danger  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-info  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-success  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-secondary  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-warning  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <a href="#" className="btn btn-primary fw-bold">View All Category  <i class="bi bi-chevron-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="card bg-danger-subtle shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4 fw-bold">Microsoft Office</h3>
                                    <div className="row gy-3">
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-primary hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-danger  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-info  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-success  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-secondary  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-warning  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <a href="#" className="btn btn-primary fw-bold">View All Category  <i class="bi bi-chevron-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="card bg-info-subtle shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4 fw-bold">Microsoft Office</h3>
                                    <div className="row gy-3">
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-primary hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-danger  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-info  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-success  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-secondary  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-warning  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <a href="#" className="btn btn-primary fw-bold">View All Category  <i class="bi bi-chevron-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="card bg-success-subtle shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4 fw-bold">Microsoft Office</h3>
                                    <div className="row gy-3">
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-primary hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-danger  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-info  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-success  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-secondary  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-warning  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <a href="#" className="btn btn-primary fw-bold">View All Category  <i class="bi bi-chevron-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="card bg-secondary-subtle shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4 fw-bold">Microsoft Office</h3>
                                    <div className="row gy-3">
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-primary hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-danger  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-info  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-success  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-secondary  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-warning  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <a href="#" className="btn btn-primary fw-bold">View All Category  <i class="bi bi-chevron-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="card bg-warning-subtle shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4 fw-bold">Microsoft Office</h3>
                                    <div className="row gy-3">
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-primary hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-danger  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-info  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-success  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-secondary  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <a href="#">
                                                <div className="card category-box">
                                                    <div className="card-body text-center p-1">
                                                        <i className="bi bi-lightbulb-fill hover rotate-180  display-4"></i>
                                                        <i className="bi bi-book-half text-warning  hover-hide display-4"></i>
                                                        <p className="small fw-medium">dsfa sdfasd fasd</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <a href="#" className="btn btn-primary fw-bold">View All Category  <i class="bi bi-chevron-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center text-white">
                        <div className="col-12 col-md-9 col-lg-10">
                            <div className="shadow px-5 py-3 bg-img-3 rounded-4">
                                <h2 className="fw-bold mb-3">Join Our Online Test Series!</h2>
                                <p className="lead fw-medium mb-5">Join over 120000+ students who have already taken our online test series on ExamJila.com.
                                    Take free online practice tests and explore the power of our test platform crafted to
                                    supercharge your exam preparation. Start your success journey now!</p>
                                <a href="javascript:;" className="btn btn-lg btn-danger fw-bold shadow">Start MCQ  <i class="bi bi-chevron-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Category;
