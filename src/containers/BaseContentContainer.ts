import { connect } from 'react-redux';
import { RootState } from '../store';
import { sortTickets } from '../store/changeTickets/actions';
import { toggleShowingPopup } from '../store/showingComponents/actions';
import { BaseContent } from '../components/Main/BaseContent';

const mapStateToProps = (state: RootState) => ({
    isMobile: state.showingComponents.isMobile,
    ticketsArray: state.changeTickets.ticketsArray,
    reserveTicketsArray: state.changeTickets.reserveTicketsArray
});

const mapDispatch = {
    sortTickets,
    toggleShowingPopup
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatch;

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatch
)(BaseContent);
