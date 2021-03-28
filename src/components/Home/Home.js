import React from 'react'
import {NavLink} from 'react-router-dom';

function Home() {
    return (
		<>
        <section id="home" class="slider" data-stellar-background-ratio="0.5">
          <div class="row">

                    <div class="owl-carousel owl-theme">
                         <div class="item item-first">
                              <div class="caption">
                                   <div class="container">
                                        <div class="col-md-8 col-sm-12">
                                             <h3>Mission</h3>
                                             <h1 style={{color: "gold"}}>Our mission is to provide the best foods from comfort of your home</h1>
                                             <a href="#team" class="section-btn btn btn-default smoothScroll">Meet our chef</a>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div class="item item-second">
                              <div class="caption">
                                   <div class="container">
                                        <div class="col-md-8 col-sm-12">
                                             <h3 >Your Perfect Foods</h3>
                                             <h1 style={{color: "gold"}}>The best dinning quality can be here too!</h1>
                                             <NavLink to="/foods">
                                             <a href="#menu" class="section-btn btn btn-default smoothScroll">Discover menu</a>
                                             </NavLink>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div class="item item-third">
                              <div class="caption">
                                   <div class="container">
                                        <div class="col-md-8 col-sm-12">
                                             <h3>New Restaurant in Town</h3>
                                             <h1  style={{color: "gold"}}>Enjoy our special menus and new recipes for free</h1>
                                             <NavLink to="/food_info" class="section-btn btn btn-default smoothScroll">
                                                  Recipes
                                             </NavLink>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

          </div>
     </section>

	 <section id="about" data-stellar-background-ratio="0.5">
        <div class="container">
             <div class="row">

                  <div class="col-md-6 col-sm-12">
                       <div class="about-info">
                            <div class="section-title wow fadeInUp" data-wow-delay="0.2s">
                                 <h4>Read our story</h4>
                                 <h2 >We've been Making The Delicious Foods Since 1999</h2>
                            </div>

                            <div class="wow fadeInUp" data-wow-delay="0.4s">
                                 <p>Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.</p>
                                 <p>Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu nibh ac, posuere tristique magna. You can use this template for your cafe or restaurant website. Please tell your friends about <a href="https://plus.google.com/+templatemo" target="_parent">templatemo</a>. Thank you.</p>
                            </div>
                       </div>
                  </div>

                  <div class="col-md-6 col-sm-12">
                       <div class="wow fadeInUp about-image" data-wow-delay="0.6s">
                            <img src="images/thaiabout1.jpeg" class="img-responsive" alt="" width=""/>
                       </div>
                  </div>
                  
             </div>
        </div>
   </section>

   <section id="team" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-12 col-sm-12">
                         <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                              <h2>Meet our chefs</h2>
                              <h4>They are nice &amp; friendly</h4>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                              <img src="images/chef6.jpeg" class="img-responsive" alt="" />
                                   <div class="team-hover">
                                        <div class="team-item">
                                             <h4>Duis vel lacus id magna mattis vehicula</h4> 
                                             <ul class="social-icon">
                                                  <li><a href="#" class="fa fa-linkedin-square"></a></li>
                                                  <li><a href="#" class="fa fa-envelope-o"></a></li>
                                             </ul>
                                        </div>
                                   </div>
                         </div>
                         <div class="team-info">
                              <h3>Tin</h3>
                              <p>Kitchen Head</p>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                              <img src="images/chef2.jpeg" class="img-responsive" alt=""/>
                                   <div class="team-hover">
                                        <div class="team-item">
                                             <h4>Cras suscipit neque quis odio feugiat</h4>
                                             <ul class="social-icon">
                                                  <li><a href="#" class="fa fa-instagram"></a></li>
                                                  <li><a href="#" class="fa fa-flickr"></a></li>
                                             </ul>
                                        </div>
                                   </div>
                         </div>
                         <div class="team-info">
                              <h3>Eddy</h3>
                              <p>Chef &amp; Manager</p>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                              <img src="images/chef3.jpeg" class="img-responsive" alt=""/>
                                   <div class="team-hover">
                                        <div class="team-item">
                                             <h4>Etiam auctor enim tristique faucibus</h4>
                                             <ul class="social-icon">
                                                  <li><a href="#" class="fa fa-github"></a></li>
                                                  <li><a href="#" class="fa fa-google"></a></li>
                                             </ul>
                                        </div>
                                   </div>
                         </div>
                         <div class="team-info">
                              <h3>Gin</h3>
                              <p>Seafood Specialist</p>
                         </div>
                    </div>
                    
               </div>
          </div>
     </section>

	 <section id="contact" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">
	
                    <div class="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                         <div id="google-map">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945" allowfullscreen></iframe>
                         </div>
                    </div>    

                    <div class="col-md-6 col-sm-12">

                         <div class="col-md-12 col-sm-12">
                              <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                                   <h2>Contact Us</h2>
                              </div>
                         </div>

                      
                         <form action="#" method="post" class="wow fadeInUp" id="contact-form" role="form" data-wow-delay="0.8s">

                             
                              <h6 class="text-success">Your message has been sent successfully.</h6>
                              
                            
                              <h6 class="text-danger">E-mail must be valid and message must be longer than 1 character.</h6>

                              <div class="col-md-6 col-sm-6">
                                   <input type="text" class="form-control" id="cf-name" name="name" placeholder="Full name"/>
                              </div>

                              <div class="col-md-6 col-sm-6">
                                   <input type="email" class="form-control" id="cf-email" name="email" placeholder="Email address"/>
                              </div>

                              <div class="col-md-12 col-sm-12">
                                   <input type="text" class="form-control" id="cf-subject" name="subject" placeholder="Subject"/>

                                   <textarea class="form-control" rows="6" id="cf-message" name="message" placeholder="Tell about your project"></textarea>

                                   <button type="submit" class="form-control" id="cf-submit" name="submit">Send Message</button>
                              </div>
                         </form>
                    </div>

               </div>
          </div>
     </section>        
	 </>
    )
}

export default Home

