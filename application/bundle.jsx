//https://reacttraining.com/react-router/web/guides/code-splitting
import React from 'react';

export default class Bundle extends React.Component {

    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({mod: null});
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        console.warn(this.props.children, this.state.mod && this.props.children(this.state.mod))
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
}