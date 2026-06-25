import { useEffect } from 'react';
import aboutusimg from '../assets/img/blog-1.jpg';
import l1 from '../assets/img/l1.png';
import l2 from '../assets/img/l2.png';
import l3 from '../assets/img/l3.png';
import l4 from '../assets/img/l4.png';
import l5 from '../assets/img/l5.jpg';
import l6 from '../assets/img/l6.png';


function blog_details() {
    useEffect(() => {
        document.title = 'Blog detals';

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
                            <li class="breadcrumb-item text-light" aria-current="page">Documentation and examples for common text utilities to control alignment</li>
                        </ol>
                    </nav>
                </div>
                <div className="container py-4">
                    <div className="py-4">

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8">
                            <h1 className="mb-4 display-6 fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati</h1>
                            <img src={aboutusimg} alt="about us" className="img-fluid" />
                            <div className="py-4 text-justify">
                                <p className="lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non rem excepturi eveniet dolor quam porro nobis recusandae velit minus minima dolore quae sequi ad magni voluptate harum obcaecati. Molestias?</p>
                            </div>
                        </div>

                    </div>
                </div>
            </secton>

        </div>
    );
}
export default blog_details;
