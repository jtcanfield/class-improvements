import React, { Component } from 'react';

class About extends Component {
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="About component">
        <div className="leftaligned">
          <h4>Preamble to the IWW Constitution</h4>
          <p>
            The working class and the employing class have nothing in common. There can be no peace so long as hunger and want are found among millions of the working people and the few, who make up the employing class, have all the good things of life.
          </p>
          <p>
            Between these two classes a struggle must go on until the workers of the world organize as a class, take possession of the means of production, abolish the wage system, and live in harmony with the Earth.
          </p>
          <p>
            We find that the centering of the management of industries into fewer and fewer hands makes the trade unions unable to cope with the ever growing power of the employing class. The trade unions foster a state of affairs which allows one set of workers to be pitted against another set of workers in the same industry, thereby helping defeat one another in wage wars. Moreover, the trade unions aid the employing class to mislead the workers into the belief that the working class have interests in common with their employers.
          </p>
          <p>
            These conditions can be changed and the interest of the working class upheld only by an organization formed in such a way that all its members in any one industry, or in all industries if necessary, cease work whenever a strike or lockout is on in any department thereof, thus making an injury to one an injury to all.
          </p>
          <p>
            Instead of the conservative motto, "A fair day's wage for a fair day's work," we must inscribe on our banner the revolutionary watchword, "Abolition of the wage system."
          </p>
          <p>
            It is the historic mission of the working class to do away with capitalism. The army of production must be organized, not only for everyday struggle with capitalists, but also to carry on production when capitalism shall have been overthrown. By organizing industrially we are forming the structure of the new society within the shell of the old.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
