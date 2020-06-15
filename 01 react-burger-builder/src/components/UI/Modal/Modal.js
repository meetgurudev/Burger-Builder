import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


// To cause the render method to run: 
// ShouldComponentUpdate > return true.
// React.memo > return false.
// useMemo > uses a dependency array.

const memoDependancyFunc = (prevProps, nextProps) => nextProps.show === prevProps.show;

const modal = props => {

    return (
        <Aux>
            <Backdrop
                show={props.show}
                clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                // put inline styles acc to show
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Aux>
    )
}

// memo(Component: (props: any) => JSX.Element, propsAreEqual?: (prevProps: Readonly<any>, nextProps: Readonly<any>) => boolean): 
export default React.memo(modal, memoDependancyFunc);