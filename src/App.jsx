

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import BlogDetails from './pages/BlogDetails';
import logo from './assets/img/logo.png';

const array = [
  {
    "title": "Company",
    "links": [
      {
        "label": "Prepare for your NIELIT O Level exam with ease using our online practice tests in Hindi. Enhance your learning experience with interactive questions and detailed explanations. Our platform is designed to help you master the exam content effectively. ",
        // "url": "/about"
      },
      // { 
      //     "label": "Careers", 
      //     "url": "/careers" 
      // },
      // { 
      //     "label": "Contact", 
      //     "url": "/contact" 
      // }
    ]
  },
  {
    "title": "Products",
    "links": [
      {
        "icon": "bi bi-chevron-right",
        "label": "Web Development",
        "url": "/services/web"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "SEO Optimization",
        "url": "/services/seo"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "Digital Marketing",
        "url": "/services/seo"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "Networking",
        "url": "/services/seo"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "Web Design",
        "url": "/services/seo"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "Social Media Marketing",
        "url": "/services/seo"
      }
    ]
  },
  {
    "title": "Other Links",
    "links": [
      {
        "icon": "bi bi-chevron-right",
        "label": "Home",
        "url": "/terms"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "About us",
        "url": "/terms"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "Serivces",
        "url": "/terms"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "Contact us",
        "url": "/privacy"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "Terms of Use",
        "url": "/terms"
      },
      {
        "icon": "bi bi-chevron-right",
        "label": "Privacy Policy",
        "url": "/terms"
      }
    ]
  },
  {
    "title": "Contact Us",
    "links": [
      {
        "icon": "bi bi-geo-alt lead",
        "label": "B-44 Sector-57 Noida, National Capital Region, India - 201301",

      },
      {
        "icon": "bi bi-telephone lead",
        "label": "+91 2536363636",
        "url": "tel:2525252525"
      },
      {
        "icon": "bi bi-envelope",
        "label": "info@examination.com",
        "url": "telto:examination.com"
      },


    ]
  }
]
const footerdata = [
  {
    "title": " Copyright 2025 | TechSci Research | All right reserved."
  }
]



function App() {
  return (
    <serction className="hero">
      {/* <div className="bg-body-secondary">
        <div className="container">dsfasdfasd</div>
      </div> */}
      <Router>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="/"><img src={logo} className='img-fluid' alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto text-uppercase">
                <li className="nav-item">
                  <a className="nav-link text-dark active" aria-current="page" href="/" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    <i className="bi bi-list lead"></i>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Online MCQ
                  </a>
                  <ul className="dropdown-menu small">

                    {/* Mathematics */}
                    <li><h6 className="dropdown-header">Mathematics</h6></li>
                    <li><a className="dropdown-item" href="#">Algebra → Linear Equations</a></li>
                    <li><a className="dropdown-item" href="#">Algebra → Quadratic Equations</a></li>
                    <li><a className="dropdown-item" href="#">Algebra → Polynomials</a></li>
                    <li><a className="dropdown-item" href="#">Geometry → Triangles</a></li>
                    <li><a className="dropdown-item" href="#">Geometry → Circles</a></li>
                    <li><a className="dropdown-item" href="#">Geometry → Coordinate Geometry</a></li>
                    <li><a className="dropdown-item" href="#">Trigonometry → Basics</a></li>
                    <li><a className="dropdown-item" href="#">Trigonometry → Identities</a></li>
                    <li><a className="dropdown-item" href="#">Calculus → Limits</a></li>
                    <li><a className="dropdown-item" href="#">Calculus → Derivatives</a></li>
                    <li><a className="dropdown-item" href="#">Calculus → Integration</a></li>
                    <li><a className="dropdown-item" href="#">Statistics → Probability</a></li>
                    <li><a className="dropdown-item" href="#">Statistics → Data Handling</a></li>
                    <li><a className="dropdown-item" href="#">Statistics → Sampling</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {/* Science */}
                    <li><h6 className="dropdown-header">Science</h6></li>
                    <li><a className="dropdown-item" href="#">Physics → Motion & Laws</a></li>
                    <li><a className="dropdown-item" href="#">Physics → Work & Energy</a></li>
                    <li><a className="dropdown-item" href="#">Physics → Electricity</a></li>
                    <li><a className="dropdown-item" href="#">Physics → Magnetism</a></li>
                    <li><a className="dropdown-item" href="#">Physics → Light & Optics</a></li>
                    <li><a className="dropdown-item" href="#">Chemistry → Atomic Structure</a></li>
                    <li><a className="dropdown-item" href="#">Chemistry → Periodic Table</a></li>
                    <li><a className="dropdown-item" href="#">Chemistry → Chemical Bonding</a></li>
                    <li><a className="dropdown-item" href="#">Chemistry → Acids & Bases</a></li>
                    <li><a className="dropdown-item" href="#">Chemistry → Organic Chemistry</a></li>
                    <li><a className="dropdown-item" href="#">Biology → Cell Structure</a></li>
                    <li><a className="dropdown-item" href="#">Biology → Human Anatomy</a></li>
                    <li><a className="dropdown-item" href="#">Biology → Plant Physiology</a></li>
                    <li><a className="dropdown-item" href="#">Biology → Genetics</a></li>
                    <li><a className="dropdown-item" href="#">Biology → Ecology</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {/* Computer Science */}
                    <li><h6 className="dropdown-header">Computer Science</h6></li>
                    <li><a className="dropdown-item" href="#">Programming → C Basics</a></li>
                    <li><a className="dropdown-item" href="#">Programming → C++ OOPs</a></li>
                    <li><a className="dropdown-item" href="#">Programming → Java</a></li>
                    <li><a className="dropdown-item" href="#">Programming → Python</a></li>
                    <li><a className="dropdown-item" href="#">Web Dev → HTML</a></li>
                    <li><a className="dropdown-item" href="#">Web Dev → CSS</a></li>
                    <li><a className="dropdown-item" href="#">Web Dev → JavaScript</a></li>
                    <li><a className="dropdown-item" href="#">Web Dev → React</a></li>
                    <li><a className="dropdown-item" href="#">Databases → SQL</a></li>
                    <li><a className="dropdown-item" href="#">Databases → NoSQL</a></li>
                    <li><a className="dropdown-item" href="#">AI/ML → Basics of AI</a></li>
                    <li><a className="dropdown-item" href="#">AI/ML → Machine Learning</a></li>
                    <li><a className="dropdown-item" href="#">Cybersecurity → Ethical Hacking</a></li>
                    <li><a className="dropdown-item" href="#">Cybersecurity → Network Security</a></li>
                    <li><a className="dropdown-item" href="#">Cybersecurity → Penetration Testing</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {/* History */}
                    <li><h6 className="dropdown-header">History</h6></li>
                    <li><a className="dropdown-item" href="#">Ancient → Indus Valley</a></li>
                    <li><a className="dropdown-item" href="#">Ancient → Mesopotamia</a></li>
                    <li><a className="dropdown-item" href="#">Ancient → Egyptian Civilization</a></li>
                    <li><a className="dropdown-item" href="#">Medieval → Delhi Sultanate</a></li>
                    <li><a className="dropdown-item" href="#">Medieval → Mughal Empire</a></li>
                    <li><a className="dropdown-item" href="#">Medieval → European Renaissance</a></li>
                    <li><a className="dropdown-item" href="#">Modern → World War I</a></li>
                    <li><a className="dropdown-item" href="#">Modern → World War II</a></li>
                    <li><a className="dropdown-item" href="#">Modern → Indian Independence</a></li>
                    <li><a className="dropdown-item" href="#">Modern → Cold War</a></li>
                    <li><a className="dropdown-item" href="#">Modern → Globalization</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {/* Geography */}
                    <li><h6 className="dropdown-header">Geography</h6></li>
                    <li><a className="dropdown-item" href="#">Physical → Landforms</a></li>
                    <li><a className="dropdown-item" href="#">Physical → Mountains</a></li>
                    <li><a className="dropdown-item" href="#">Physical → Rivers</a></li>
                    <li><a className="dropdown-item" href="#">Physical → Oceans</a></li>
                    <li><a className="dropdown-item" href="#">Physical → Atmosphere</a></li>
                    <li><a className="dropdown-item" href="#">Human → Population</a></li>
                    <li><a className="dropdown-item" href="#">Human → Settlements</a></li>
                    <li><a className="dropdown-item" href="#">Human → Industries</a></li>
                    <li><a className="dropdown-item" href="#">Maps → Political Maps</a></li>
                    <li><a className="dropdown-item" href="#">Maps → Topographic Maps</a></li>
                    <li><a className="dropdown-item" href="#">Maps → GIS</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {/* English */}
                    <li><h6 className="dropdown-header">English</h6></li>
                    <li><a className="dropdown-item" href="#">Grammar → Tenses</a></li>
                    <li><a className="dropdown-item" href="#">Grammar → Articles</a></li>
                    <li><a className="dropdown-item" href="#">Grammar → Prepositions</a></li>
                    <li><a className="dropdown-item" href="#">Grammar → Active/Passive Voice</a></li>
                    <li><a className="dropdown-item" href="#">Literature → Shakespeare</a></li>
                    <li><a className="dropdown-item" href="#">Literature → Romantic Age</a></li>
                    <li><a className="dropdown-item" href="#">Literature → Modern Poetry</a></li>
                    <li><a className="dropdown-item" href="#">Writing → Essay Writing</a></li>
                    <li><a className="dropdown-item" href="#">Writing → Letter Writing</a></li>
                    <li><a className="dropdown-item" href="#">Writing → Report Writing</a></li>
                    <li><a className="dropdown-item" href="#">Speaking → Public Speaking</a></li>
                    <li><a className="dropdown-item" href="#">Speaking → Debate</a></li>
                    <li><a className="dropdown-item" href="#">Speaking → Group Discussion</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {/* Commerce */}
                    <li><h6 className="dropdown-header">Commerce</h6></li>
                    <li><a className="dropdown-item" href="#">Accountancy → Journal Entries</a></li>
                    <li><a className="dropdown-item" href="#">Accountancy → Ledger</a></li>
                    <li><a className="dropdown-item" href="#">Accountancy → Balance Sheet</a></li>
                    <li><a className="dropdown-item" href="#">Business Studies → Management</a></li>
                    <li><a className="dropdown-item" href="#">Business Studies → Marketing</a></li>
                    <li><a className="dropdown-item" href="#">Business Studies → Business Ethics</a></li>
                    <li><a className="dropdown-item" href="#">Economics → Microeconomics</a></li>
                    <li><a className="dropdown-item" href="#">Economics → Macroeconomics</a></li>
                    <li><a className="dropdown-item" href="#">Economics → Indian Economy</a></li>
                    <li><a className="dropdown-item" href="#">Economics → World Economy</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {/* Civics / Political Science */}
                    <li><h6 className="dropdown-header">Civics & Political Science</h6></li>
                    <li><a className="dropdown-item" href="#">Indian Polity → Constitution</a></li>
                    <li><a className="dropdown-item" href="#">Indian Polity → Parliament</a></li>
                    <li><a className="dropdown-item" href="#">Indian Polity → Judiciary</a></li>
                    <li><a className="dropdown-item" href="#">Political Theories → Democracy</a></li>
                    <li><a className="dropdown-item" href="#">Political Theories → Socialism</a></li>
                    <li><a className="dropdown-item" href="#">International Relations → UN</a></li>
                    <li><a className="dropdown-item" href="#">International Relations → WTO</a></li>
                    <li><a className="dropdown-item" href="#">International Relations → Global Politics</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {/* General Knowledge */}
                    <li><h6 className="dropdown-header">General Knowledge</h6></li>
                    <li><a className="dropdown-item" href="#">Current Affairs → National</a></li>
                    <li><a className="dropdown-item" href="#">Current Affairs → International</a></li>
                    <li><a className="dropdown-item" href="#">Sports → Olympics</a></li>
                    <li><a className="dropdown-item" href="#">Sports → Cricket</a></li>
                    <li><a className="dropdown-item" href="#">Awards → Nobel Prize</a></li>
                    <li><a className="dropdown-item" href="#">Awards → Bharat Ratna</a></li>
                    <li><a className="dropdown-item" href="#">Science & Tech → Space</a></li>
                    <li><a className="dropdown-item" href="#">Science & Tech → Robotics</a></li>
                    <li><a className="dropdown-item" href="#">Misc → Important Days</a></li>
                    <li><a className="dropdown-item" href="#">Misc → Famous Personalities</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/category">Category Wise MCQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>

                <li className="nav-item">
                  <a className="btn btn-dark fw-bold shadow-lg" href="javascript:;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Enquiry Now <i className="bi bi-chevron-right ms-1"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category" element={<Category />} />
            <Route path="/blog_details" element={<BlogDetails />} />
          </Routes>

        </main>

      </Router>
      <footer>

        <div className="container">
          <div className="row">
            {
              array.map((item, i) =>

                <div className="col-12 col-md-12 col-lg-3">
                  <h5>{item.title}</h5>
                  <ul type="none">
                    {item.links?.map((item2, index) =>
                      <li><a href={item2.url}><i className={item2.icon}></i> {item2.label}</a></li>
                    )}
                  </ul>
                </div>

              )
            }
          </div>
          <div className="row mt-5 text-center">
            {
              footerdata.map((item, i) =>
                <p className="text-secondary">&copy; {item.title}</p>
              )}
          </div>

        </div>


      </footer>
      
      {/*Modal box popup*/}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-img-2">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-white" id="staticBackdropLabel">Send Your Request</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="" method="post">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control form-control-sm" id="name" placeholder="Name" required />
                  <label for="name"><i className="bi bi-person"></i> Name</label>
                </div>
                <div className="form-floating  mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Email" required />
                  <label for="email"><i className="bi bi-envelope-check"></i> Email id</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea type="text" className="form-control" id="message" placeholder="Password" required></textarea>
                  <label for="message">Message</label>
                </div>


                <div className="form-group mt-4 text-center">
                  <button type="submit" name="submit" className="btn btn-danger px-4 shadow"><span className="fw-bold">Send Request</span><i className="bi bi-send ps-2"></i> </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm px-3" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


        {/*left sidebar code starts here*/}

      <div className="offcanvas offcanvas-start" id="demo">
        <div className="offcanvas-header">
          <h4 className="offcanvas-title">Category</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body overflow-auto px-0">
          <ul type="none" className="p-0 category-list">
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span> Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
            <li>
              <a href="#"><span><span className="bi bi-caret-right-fill small text-info"></span>Category list title one</span> <i className="bi bi-chevron-double-right"></i></a>
            </li>
          </ul>
        </div>
      </div>

    </serction>


  );
}

export default App;
