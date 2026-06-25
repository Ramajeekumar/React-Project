import { useEffect } from 'react';
import aboutusimg from '../assets/img/blog-1.jpg';
import l1 from '../assets/img/l1.png';
import l2 from '../assets/img/l2.png';
import l3 from '../assets/img/l3.png';
import l4 from '../assets/img/l4.png';
import l5 from '../assets/img/l5.jpg';
import l6 from '../assets/img/l6.png';


function About() {
    useEffect(() => {
        document.title = 'About us page';

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
                            <li class="breadcrumb-item text-light" aria-current="page">About us</li>
                        </ol>
                    </nav>
                </div>
                <div className="container py-4">
                    <div className="py-4">
                        <h1>About us</h1>
                        <p className="lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-7">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5">
                            <img src={aboutusimg} alt="about us" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </secton>
            <section className="py-4 bg-light">
                <div className="container-fluid">
                    <div class="logo-slider">
                        <div class="logo-slide-track">
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
        </div>
    );
}
export default About;
