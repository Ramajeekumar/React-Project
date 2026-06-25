import { useEffect } from 'react';
import img from '../assets/img/about-us.svg';
import img1 from '../assets/img/certification.svg';
import l1 from '../assets/img/l1.png';
import l2 from '../assets/img/l2.png';
import l3 from '../assets/img/l3.png';
import l4 from '../assets/img/l4.png';
import l5 from '../assets/img/l5.jpg';
import l6 from '../assets/img/l6.png';
import blog_img from '../assets/img/blog-1.jpg';
import Categories from '../components/Categories'; // Import component
function Home() {
    useEffect(() => {
        document.title = 'Home Page';

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
            <secton className="bg-img-1 py-4">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-7">
                            <h1 className="fw-bold text-dark">Evaluate market competitiveness by<span className="text-danger">  examining revenue</span> </h1>
                            <p className="lead fw-medium mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit., illum, quibusdam cumque omnis vitae doloribus veritatis, perspiciatis id laboriosam.</p>
                            <div className="d-flex">
                                <a className="btn btn-dark btn-md px-3 mt-4 shadow-lg fw-bold">Contact Us <i className="bi bi-chevron-right ms-1"></i></a>
                                <a className="btn btn-danger btn-md px-3 mt-4 shadow-lg fw-bold  ms-4">Contact Us <i className="bi bi-chevron-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </secton>
            <section className="py-5 bg-danger-subtle">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <img src={img} alt="" className="img-fluid" width={350} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <h2 className="fw-bold py-3">Join Us Today, <br />Transform Tomorrow</h2>

                            <p>Our online practice tests are designed with features to make your learning experience efficient and effective:</p>

                            <ul type="none" className="p-0">
                                <li><i className="bi bi-arrow-right pe-2"></i> Topic-wise & Mock Tests</li>
                                <li><i className="bi bi-arrow-right pe-2"></i> Multiple Attempts</li>
                                <li><i className="bi bi-arrow-right pe-2"></i> Immediate Results & Feedback</li>
                            </ul>

                            <a href="#" className="btn btn-md btn-danger fw-bold shadow">Start MCQ  <i className="bi bi-chevron-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light category">
                <div className="container">
                    <div className="py-2 text-center">
                        <h2 className="fw-bold">All types of Mutli Choise Questions <span className="text-danger"> (MCQ)</span></h2>
                        <p>We provide all subjects online practice tests for free. Enjoy learning !</p>
                    </div>
                    <Categories />
                    <div className="text-center mt-4">
                        <a href="/category" class="btn btn-lg btn-danger fw-bold shadow">View All Category  <i class="bi bi-chevron-right ms-1"></i></a>
                    </div>
                </div>
            </section>

            <section className="text-white shadow">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 px-0">
                            <div className="bg-dark p-5">
                                <h3 className="fw-bold">Why Choose Us?</h3>
                                <p className="lead fw-normal">

                                    Discover the ultimate secret to academic success with our unbeatable educational approach! Join now for an exclusive learning experience you won't find anywhere else.
                                </p>
                                <ul type="none" className="p-0">
                                    <li className="py-2 fw-bold d-flex align-items-center"><i className="bi bi-check-circle-fill text-warning lead pe-2"></i> Interactive Classes</li>
                                    <li className="py-2 fw-bold d-flex align-items-center"><i className="bi bi-check-circle-fill text-primary lead pe-2"></i> Online Course From Experts</li>
                                    <li className="py-2 fw-bold d-flex align-items-center"><i className="bi bi-check-circle-fill text-danger lead pe-2"></i> 100000+ High Quality MCQ</li>
                                    <li className="py-2 fw-bold d-flex align-items-center"><i className="bi bi-check-circle-fill text-success lead pe-2"></i> Guaranteed Results</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 px-0">
                            <div className="bg-img-5 px-4"> </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <h2 className="fw-bold py-4">Online Practice Test Made <br />Learning Easy and Fun</h2>
                            <p>Transform complex subjects into engaging challenges. Our interactive platform makes mastering difficult concepts enjoyable. Whether you're a student aiming for top grades or a professional looking to upskill, our tests cater to all. Experience the thrill of learning while effectively preparing for exams.</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <img src={img1} className="img-fluid" alt="" width={350} />
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
                                <a href="javascript:;" className="btn btn-lg btn-danger fw-bold shadow">Start MCQ  <i className="bi bi-chevron-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-warning-subtle">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card bg-img-6 shadow">
                                <div className="card-body">
                                    <div className="cover-img">
                                        <img src={blog_img} className="img-fluid rounded" alt="title" />
                                    </div>
                                    <h5 className="py-2 text-primary">Documentation and examples for common text utilities to control alignment</h5>
                                    <p className="text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, provident perferendis odit, repellendus minus consectetur ullam corrupti delectus dolore quis </p>
                                    <div className="text-center">
                                        <a href="/blog_details" className="btn btn-danger btn-md shadow">Read more <i className="bi bi-arrow-right-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card bg-img-6 shadow">
                                <div className="card-body">
                                    <div className="cover-img">
                                        <img src={blog_img} className="img-fluid rounded" alt="title" />
                                    </div>
                                    <h5 className="py-2 text-primary">Documentation and examples for common text utilities to control alignment</h5>
                                    <p className="text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, provident perferendis odit, repellendus minus consectetur ullam corrupti delectus dolore quis </p>
                                    <div className="text-center">
                                        <a href="/blog_details" className="btn btn-danger btn-md shadow">Read more <i className="bi bi-arrow-right-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card bg-img-6 shadow">
                                <div className="card-body">
                                    <div className="cover-img">
                                        <img src={blog_img} className="img-fluid rounded" alt="title" />
                                    </div>
                                    <h5 className="py-2 text-primary">Documentation and examples for common text utilities to control alignment</h5>
                                    <p className="text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, provident perferendis odit, repellendus minus consectetur ullam corrupti delectus dolore quis </p>
                                    <div className="text-center">
                                        <a href="/blog_details" className="btn btn-danger btn-md shadow">Read more <i className="bi bi-arrow-right-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 bg-light">
                <div className="container-fluid">
                    <div className="logo-slider">
                        <div className="logo-slide-track">
                            <img src={l1} alt="Logo 1" />
                            <img src={l2} alt="Logo 2" />
                            <img src={l3} alt="Logo 3" />
                            <img src={l4} alt="Logo 4" />
                            <img src={l5} alt="Logo 5" />
                            <img src={l6} alt="Logo 1" />
                            <img src={l1} alt="Logo 2" />
                            <img src={l2} alt="Logo 3" />
                            <img src={l3} alt="Logo 4" />
                            <img src={l4} alt="Logo 5" />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}
export default Home;
