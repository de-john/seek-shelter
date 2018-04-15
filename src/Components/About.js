import React from 'react';
import image1 from '../images/image1.jpg'

class About extends React.Component {
    render() {
        return (
            <div class="gallery">
                <div class="thumbnail">
                    <h1 class="stats">50</h1>
                    <h4>SHELTERS</h4>
                    <p>One line description</p>
                </div>
                <div class="thumbnail">
                    <h1 class="stats">2300</h1>
                    <h4>CAPACITY</h4>
                    <p>One line description</p>
                </div>
                <div class="thumbnail">
                    <h1 class="stats">75%</h1>
                    <h4>PEOPLE HELPED</h4>
                    <p>One line description</p>
                </div>
                    <div class="thumbnail">
                    <h1 class="stats">20</h1>
                    <h4>DISASTERS</h4>
                    <p>One line description</p>
                </div>
    <div>
                <footer>
    <article class="footer_column">
      <h3>ABOUT</h3>
      <img src={require('../images/image1.jpg')} alt="" width="400" height="200" class="cards"/>
      <p>We are a search engine that allows you to find the nearest shelters based on your location, the most important thing is that we update the shelter at REAL TIME. </p>
    </article>
    <article class="footer_column">
      <h3>CONTACT</h3>
      <img src={require('../images/image1.jpg')} alt="" width="400" height="200" class="cards"/>

    </article>
  </footer></div>
            </div>
            
        )
    }
}

export default About;