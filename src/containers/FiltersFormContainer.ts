import { connect } from 'react-redux';
import { RootState } from '../store';
import { FiltersForm } from '../components/FiltersForm';
import {
    filterTicketsByAll,
    filterTicketsByStopsCount
} from '../store/changeTickets/actions';
import { toggleShowingPopup } from '../store/showingComponents/actions';

const mapStateToProps = (state: RootState) => ({
    isMobile: state.showingComponents.isMobile,
    isShownPopup: state.showingComponents.isShownPopup,
    filtersArray: state.changeTickets.filtersArray
});

const mapDispatch = {
    filterTicketsByAll,
    filterTicketsByStopsCount,
    toggleShowingPopup
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatch;

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatch
)(FiltersForm);
