import React, { Component } from 'react';
import TreeNode from './tree-node';

// A recursive component for rendering an array of tree nodes
class TreeNodes extends Component {
    propTypes: {
        nodes: React.PropTypes.array
    }

    render() {
        const nodes = this.props.nodes.map((node) => <TreeNode key={node.id} node={node} />);

        return (<ol>{nodes}</ol>);
    }
}

export default TreeNodes;
