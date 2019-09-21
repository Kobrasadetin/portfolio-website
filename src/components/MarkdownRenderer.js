import React from 'react'
import ReactMarkdown from 'react-markdown'
import Typography from '@material-ui/core/Typography';

// ReactMarkdown is a great library, let's inject the Material UI typography for elements

//const originalHeaderRenderer = (props) => (React.createElement(`h${props.level}`, getCoreProps(props), props.children))

function getCoreProps(props) {
    return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {}
}

const customHeader = (props) => <Typography variant={`h${props.level}`}>{props.children}</Typography>

const renderers = { 'heading': customHeader }

const MarkdownRenderer = ({ source }) => {
    return (
        <ReactMarkdown renderers={renderers} source={source}></ReactMarkdown>)
}

export default MarkdownRenderer