import React from "react";

const Title = () => {
    const element = React.createElement(
        'h1',
        {className: 'Title'},
        'Hello, world!'
      );
    return element
}

export default Title