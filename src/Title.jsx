import React from "react";

const Title = () => {
    const element = React.createElement(
        'h1',
        {className: 'Title'},
        'My React is working!'
      );
    return element
}

export default Title