import { connect } from 'react-redux';
import { RootState } from '../store';
import { resizeWindow } from '../store/showingComponents/actions';
import { addTickets, sortTickets } from '../store/changeTickets/actions';
import { toggleShowingPopup } from '../store/showingComponents/actions';
import { App } from '../components/App';

const mapStateToProps = (state: RootState) => ({
    isMobile: state.showingComponents.isMobile,
    isShownPopup: state.showingComponents.isShownPopup
});

const mapDispatch = {
    resizeWindow,
    sortTickets,
    addTickets,
    toggleShowingPopup
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatch;

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatch
)(App);
