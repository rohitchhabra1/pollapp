import { connect } from "react-redux";
import Signup from "../../component/Signup/signup";
import { userSignUpRequest } from "../../redux/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  userSignupRequest: data => dispatch(userSignUpRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
