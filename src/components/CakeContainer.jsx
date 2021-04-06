import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
    return (
        <div>
            <h3>Number of Cake :  <h1>{props.numberOfCakes}</h1></h3> 
            <button onClick={props.buyCake}>Buy Cake!</button>
        </div>
    );
}

const mapStateToPropes = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes,
    };
};

const mapDispatchToPropes = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    };
};

export default connect(mapStateToPropes, mapDispatchToPropes)(CakeContainer);
