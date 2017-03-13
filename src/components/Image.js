import React from 'react';

//remember, it has to have "render" on it
class Image extends React.Component {
    render () {
        return <img src={'http://robohash.org/react' + this.props.number + '?bgset=bg1'} />
    } 
}

export default Image;