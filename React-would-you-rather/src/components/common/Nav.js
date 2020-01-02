import React, { Component, Fragment } from 'react'
import LoadingBar from 'react-redux-loading'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import GitHubButton from 'react-github-btn'

import { Nav as BoostrapNav, Navbar, NavbarBrand, NavItem, NavLink as BootstrapNavLink } from 'reactstrap'
import { signOut } from "../../actions/authedUser"

class Nav extends Component {
    state = {
        redirectLogin: false
    }


    handleSignout = (e) => {
        e.preventDefault()
        this.props.dispatch(signOut())
        this.setState(() => ({
            redirectLogin: true
        }))
    }

    render() {
        const { user } = this.props
        const { redirectLogin } = this.state

        if (redirectLogin === true) {
            return (<Redirect to="/login" />)
        }

        return (
            <Fragment>
                <Navbar color="light" light expand="md">
                    <BoostrapNav>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} exact to="/">Dashboard</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink}
                                to="/leaderboard">Leaderboard</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} to="/add">Add
                                Question</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} to="#"
                                onClick={this.handleSignout}>Sign out</BootstrapNavLink>
                        </NavItem>
                    </BoostrapNav>
                </Navbar>
                <GitHubButton className="github-button" href="https://github.com/SatarShirzai/Udacity_Projects/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork SatarShirzai/Udacity_Projects on GitHub">Fork</GitHubButton>
                <GitHubButton href="https://github.com/SatarShirzai" data-size="large" data-show-count="true" aria-label="Follow @SatarShirzai on GitHub">Follow @SatarShirzai</GitHubButton>
                <GitHubButton href="https://github.com/SatarShirzai/Udacity_Projects" data-icon="octicon-star" data-size="large" aria-label="Star SatarShirzai/Udacity_Projects on GitHub">Star</GitHubButton>
                <GitHubButton href="https://github.com/SatarShirzai/Udacity_Projects/archive/master.zip" data-icon="octicon-cloud-download" data-size="large" aria-label="Download SatarShirzai/Udacity_Projects on GitHub">Download</GitHubButton>
                <br />
                <NavbarBrand>{user.name}, Would You Rather...</NavbarBrand>
                <LoadingBar />
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav)