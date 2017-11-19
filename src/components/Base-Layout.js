import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default class BaseLayout extends Component {
  constructor(props) {
      super(props)
      this.state = {

      };
  }

  render() {
    let base_layer_styles = {
        "backgroundColor": "#D3D3D3",
        // "backgroundImage": 'url(https://i.imgur.com/fW194uY.jpg)',
        // "backgroundImage": 'url(http://www.loversiq.com/daut/as/f/f/flowers-nature-plant-beautiful-green-red-yellow-pink-blue-1811457_beautiful-plants_home-decor_target-home-decor-decorating-blogs-inexpensive-fall-websites-walmart-pinterest-decorator.jpg)',
        "width": "100%",
        "height": "100%",
        // "-webkit-background-size": "cover",
        // "-moz-background-size": "cover",
        // "-o-background-size": "cover",
        //  "background-size": "cover",

        // "backgroundColor": "#EEEEEE",
        // "backgroundColor": "#5D711F",
        // "backgroundColor": "#60AC68",
        "backgroundColor": "white",
        "minHeight": "800px"
    }

    return (
      <div style={base_layer_styles}>
        <Header />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
