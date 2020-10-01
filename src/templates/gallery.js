import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
/*import {Link} from '../utils';

/* eslint-disable */

export default class Gallery extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <section id="gallery" className="wrapper">
			<ul>
				<li>
					<img src="/images/pic04.jpg" />
	  			</li>
	  			<li>
					<img src="/images/pic03.jpg" />
	  			</li>
	  			<li>
					<img src="/images/pic04.jpg" />
	  			</li>
	  			<li>
					<img src="/images/pic03.jpg" />
	  			</li>
				<li>
					<img src="/images/pic04.jpg" />
	  			</li>
	  			<li>
					<img src="/images/pic03.jpg" />
	  			</li>
				<li>
					<img src="/images/pic04.jpg" />
	  			</li>
	  			<li>
					<img src="/images/pic03.jpg" />
	  			</li>
				<li>
					<img src="/images/pic04.jpg" />
	  			</li>
	  			<li>
					<img src="/images/pic03.jpg" />
	  			</li>
	  		</ul>
	  	</section>
	    </Layout>
	)
    }
}
