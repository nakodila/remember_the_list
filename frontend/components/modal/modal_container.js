import {connect} from 'react-redux';
import ListModal from './modal_component';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    modal: state.toggleModal
  };

};

const mapDispatchToProps = (dispatch) => {
    return {
      toggleModal: (payload) => dispatch(toggleModal(payload))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ListModal);
