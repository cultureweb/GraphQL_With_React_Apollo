import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import {
    Link,
    CircularProgress,
} from "@material-ui/core";

const LAUNCHES_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local,
            rocket {
                rocket_id
                rocket_name
                rocket_type
            } 
        }
    }
    `
export class Launch extends Component {
    render() {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);
        return (
            <React.Fragment>
                <Query query={LAUNCHES_QUERY} variables={{ flight_number }}>
                    {
                        ({loading, error, data }) => {
                            if(loading) return <CircularProgress data-testid="loading" />
                            if(error) console.log(error);
                        
                        console.log(data);
                       return <h1> test </h1>

                    }}
                </Query>
            </React.Fragment>
        );
    }
}

export default Launch;
