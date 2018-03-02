import React, { Component } from 'react';
import classNames from 'classnames';
import TreeNodes from './tree-nodes';

// A component for rendering a tree node
class TreeNode extends Component {
    propTypes: {
        node: React.PropTypes.object
    }

    renderToggle(node) {
        if (node.children) {
            return <a className={'toggle icon ' + (node.expanded() ? 'icon-collapse' : 'icon-expand')} onClick={node.toggleCollapse.bind(node)}></a>
        }
    }

    renderChildren(node) {
        if (node.expanded() && node.hasChildren()) {
            return <TreeNodes nodes={node.children} />;
        }
    }

    render() {
        const node = this.props.node;

        // Only render if node is available
        if (node.available()) {
            return (<li className={classNames({
                expanded: node.expanded(),
                folder: node.children,
                leaf: !node.children,
                selected: node.selected()
            })}>
                <div className='title-wrap'>
                    {this.renderToggle(node)}
                    <a className={'title icon ' + (node.children ? 'icon-folder' : 'icon-file-empty')} onClick={node.toggleSelect.bind(node)}>
                        {node.text}
                    </a>
                </div>
                <div className='wholerow'></div>
                {this.renderChildren(node)}
            </li>);
        }
    }
}

export default TreeNode;
