import React, { Component } from 'react';
import InspireTree from 'inspire-tree/dist/inspire-tree';
import 'inspire-tree-dom/dist/inspire-tree-light.css';
import TreeNodes from './tree-nodes';

// An example Tree component which wraps InspireTree's core.
// We've excluded the default DOM code so we can implement native React rendering.
class Tree extends Component {
    // Accept an array of nodes
    propTypes: {
        nodes: React.PropTypes.array
    }

    // Initial state
    state = {
        nodes: []
    }

    // Instance of the tree
    tree = false

    // When this component mounts, instatiate inspire tree
    componentWillMount() {
        this.tree = new InspireTree({
            data: this.props.nodes
        });

        // Set state once the tree has fully loaded our data
        this.tree.on('model.loaded', this.syncNodes.bind(this));
        this.tree.on('changes.applied', this.syncNodes.bind(this));
    }

    // Update the state when changes have been made to our nodes
    syncNodes() {
        this.setState({
            nodes: this.tree.nodes()
        });
    }

    // Renders the wrapping div and root OL
    render() {
        return (
            <div className="inspire-tree">
                <TreeNodes nodes={this.state.nodes} />
            </div>
        );
    }
}

export default Tree;
