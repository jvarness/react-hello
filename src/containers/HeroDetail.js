import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router'
import * as heroesActions from '../actions/actions'

class HeroDetail extends Component {
    constructor(props) {
        super(props)
        let hero = this.props.heroes.find((hero) => {
            return hero.id.toString() === this.props.match.params.id
        })
        this.state = { hero, returnHome: false }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ hero: { name: event.target.value, id: this.state.hero.id  } })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.heroesActions.updateHero(this.state.hero)
        this.setState({ returnHome: true })
    }

    render() {
        if(this.state.returnHome) {
            return (
                <Redirect to='/heroes'/>
            )
        }
        return (
            <Fragment>
                <h3>{this.state.hero.name} Details</h3>
                <form onSubmit={this.handleSubmit} >
                    <div><label>Hero Id: </label>{this.state.hero.id}</div>
                    <div>
                        <label>Hero Name: </label>
                        <input type="text" value={this.state.hero.name} onChange={this.handleChange}/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        heroes : state.heroes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        heroesActions: bindActionCreators(heroesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail)