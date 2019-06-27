import React from 'react';

const withClass = (WrappedClass, className) => {
    return (props) => (
       <div className={className}>
            <WrappedClass {...props} />
        </div>
    );
};
 
export default withClass;

// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// );
 
// export default withClass;