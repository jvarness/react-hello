import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Hero from '../components/Hero'
import * as heroesActions from '../actions/actions'

class Heroes extends Component {

    render() {
        let heroesList = this.props.heroes.map((hero) => {
            return <Hero hero={hero}/>
        })

        return (
            <div>
                <h3>Heroes List</h3>
                <ul class='heroes'>
                    {
                        heroesList
                    }
                </ul>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Heroes)