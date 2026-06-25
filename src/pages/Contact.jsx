import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        document.title = 'Contact Page';

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
                            <li class="breadcrumb-item text-light" aria-current="page">Contact us</li>
                        </ol>
                    </nav>
                </div>
            </secton>


            <secton>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-7">
                            <h2 className="fw-bold">Contact Us</h2>
                            <div className="py-4">
                                <div className="d-flex">
                                    <i className="bi bi-geo-alt lead"></i>
                                    <div className="px-2">
                                        <div className="fw-bold lead">Location</div>
                                        <p>B-44 Sector-57 Noida, National Capital Region, India - 201301</p>
                                    </div>
                                </div>
                                <div className="d-flex mt-4">
                                    <i className="bi bi-envelope lead"></i>
                                    <div className="px-2">
                                        <div className="fw-bold lead">Eamil Address</div>
                                        <p>info@examination.com</p>
                                    </div>
                                </div>
                                <div className="d-flex mt-4">
                                    <i className="bi bi-phone lead"></i>
                                    <div className="px-2">
                                        <div className="fw-bold lead">Contact Number</div>
                                        <p>+91 985XXXX258</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5">
                            <form action="" method="post" className="card p-4 shadow">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control form-control-sm" id="name" placeholder="Name" required />
                                    <label for="name"><i className="bi bi-person"></i> Name</label>
                                </div>
                                <div class="form-floating  mb-3">
                                    <input type="email" class="form-control" id="email" placeholder="Email" required />
                                    <label for="email"><i className="bi bi-envelope-check"></i> Email id</label>
                                </div>
                                <div class="form-floating  mb-3">
                                    <input type="number" class="form-control" id="emaphoneil" placeholder="Phone" required />
                                    <label for="phone"><i className="bi bi-telephone"></i> Phone</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea type="text" class="form-control" id="message" placeholder="Password" required></textarea>
                                    <label for="message">Message</label>
                                </div>


                                <div className="form-group mt-4 text-center">
                                    <button type="submit" name="submit" class="btn btn-danger btn-lg px-4 shadow"><span className="fw-bold">Send Request</span><i className="bi bi-send ps-2"></i> </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </secton >
        </div >
    );
}
export default Contact;
