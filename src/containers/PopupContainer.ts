import { connect } from 'react-redux';
import { RootState } from '../store';
import { Popup } from '../components/Popup';
import { toggleShowingPopup } from '../store/showingComponents/actions';

const mapStateToProps = (state: RootState) => ({
    isShownPopup: state.showingComponents.isShownPopup
});

const mapDispatch = {
    toggleShowingPopup
};

interface OwnProps {
    children: React.ReactNode;
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatch;

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatch
)(Popup);
