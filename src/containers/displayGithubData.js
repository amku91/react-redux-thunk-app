import React, { Component } from 'react';
import { connect } from 'react-redux';


class GithubData extends Component {
    render() {
        if (!this.props.data) {
            return (
                <div>
                    No Data
            </div>
            );
        } else {
            return (
                <div>
                    <div>
                        Name: {this.props.data.name}
                    </div>
                    <br />
                    <div>
                        Blog: {this.props.data.blog}
                    </div>
                    <br />
                    <div>
                        Github Followers: {this.props.data.followers}
                    </div>
                    <br />
                    <div>
                        User Type: {this.props.data.type}
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps, null)(GithubData);