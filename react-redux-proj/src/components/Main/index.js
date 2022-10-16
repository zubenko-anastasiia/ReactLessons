import { connect } from "react-redux"
import Main from "./Main"
import * as mainActions from "../../store/actions"
import { bindActionCreators } from "redux"

const mapStateToProps = ({ Auth, Main }) => ({ Main, Auth })
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(mainActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
