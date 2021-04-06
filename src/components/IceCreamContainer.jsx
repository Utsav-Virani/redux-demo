import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

function IceCreamContainer(props) {
    return (
        <div>
            <h3>Number of IceCream :  <h1>{props.numberOfIceCream}</h1></h3> 
            <button onClick={props.buyIceCream}>Buy IceCream!</button>
        </div>
    );
}

const mapStateToPropes = (state) => {
    return {
        numberOfIceCream: state.iceCream.numberOfIceCream,
    };
};

const mapDispatchToPropes = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream()),
    };
};

export default connect(mapStateToPropes, mapDispatchToPropes)(IceCreamContainer);
