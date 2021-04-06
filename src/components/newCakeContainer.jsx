import React , {useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1);
    return (
        <div>
            <h3>Number of Cake :  <h1>{props.numberOfCakes}</h1></h3> 
            <input type="number" name="cake" id="cale" value={number} onChange={e => setnumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} of Cakes!</button>
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
        buyCake: number => dispatch(buyCake(number)),
    };
};

export default connect(mapStateToPropes, mapDispatchToPropes)(NewCakeContainer);
