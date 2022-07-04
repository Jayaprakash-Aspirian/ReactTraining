import React from 'react';

export default class ComponentDidMountDemo extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = { color: 'lightgreen' };
    }
    componentDidMount() {
	    this.setState({ color: 'green' });
    }
    render() {
	 return (
	    <div>
		    <p
		    style={{
			color: this.state.color,
			backgroundColor: 'rgba(0,0,0,0.88)',
			textAlign: 'center',
			paddingTop: 20,
			width: 400,
			height: 80,
			margin: 'auto'
		    }}
		    >
                Success
		    </p>

	    </div>
	 );
    }
}


