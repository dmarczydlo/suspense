import React, { Component, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetch';
import axios from 'axios';
const User = lazy(() => import('../components/user'));

class Home extends Component {

    state = {
        data: {}
    };

    componentDidMount() {
        this.props.fetchData();
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        const { data } = this.props;

        return (
            <div className="test" >
                <Link
                    name="home"
                    to="/"
                >
                    {'child 1'}
                </Link>
                <Suspense fallback={
                    <div>
                        {'Loading'}
                    </div>
                }
                >
                    <User data={data} />
                </Suspense>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return state.data;
};
const mapDispatchToProps = (dispatch) => {
    return { fetchData: () => dispatch(fetchData()) };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
