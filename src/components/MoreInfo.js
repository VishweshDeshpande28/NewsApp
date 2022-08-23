import React, {Component} from 'react';


class MoreInfo extends Component {

    render() {
       let {content} = this.props;
  return (
        <p className='card-text'>{content}</p>
  )
}
}

export default MoreInfo