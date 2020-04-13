import React, {Component} from 'react';

import { connect } from './node_modules/react-redux';
import { getGameList } from '../../actions/game_actions';

class Game_Lists extends Component {
    state = {  
        limit: 10
    }
    componentDidMount() {
        this.props.dispatch(getGameList(
            this.state.limit
        ))
    }

    render() { 
        return ( 
            <div>
                Game_Lists
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(Game_Lists);
