import { connect } from "react-redux";
import Signup from "../../component/Signup/signup";
import userSignUpRequest from "../../redux/actions";

mapStateToProps = state => {};

mapDispatchToProps = dispatch => ({
  userSignUpRequest: data => dispatch(userSignUpRequest(data))
});

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(Signup);
