import React from 'react'
import my_pic from "./images/photo.jpg"

const About = () => {
  return (
    <>
      <br />
      <div className="container emp-profile">
        <form method=''>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img className='img-round' src={my_pic} alt="" height="290px" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-work">

                      <a className='bold' href="https://github.com/akash6998s" target="_Akash">GitHub</a> <br />
                      <a className='bold' href="https://www.linkedin.com/in/the-akashsingh/" target="_Akash">Linkedin</a> <br />
                    </div>
                  </div>
                </div>
              </div>




              <hr />
              <div className="detail">
                <h4>Name- Akash Singh</h4>
                <h4>Email- akash6998s@gmail.com</h4>
                <h4>Phone - 9315729158</h4>
                <h4>Adress - B-90 Kamal Enclave, Gautam buddha Nagar</h4>
              </div>
              <hr />

              <h4 className='bold'>About</h4>  <p className="detail">My name is Akash Singh I have completed my graduation in BBA from institute of management studies, Ghaziabad.
                <br />  I have been interested in ''Web development" and I have the necessary skills required for this role. I have a good understanding of HTML, CSS, JavaScript and Bootstrap apart from that I have learn the React JS also.
                Along with these technical skills I have good communication skills that I feel are necessary for any job role.</p>
            </div>








          </div>
        </form>
      </div>
    </>
  )
}

export default About;