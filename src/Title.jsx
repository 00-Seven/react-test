import React from "react";

const Title = () => {
    const element = React.createElement(
        'h1',
        {className: 'Title'},
        'Hello, Welcome My React App'
      );
    return element
}

export default Title