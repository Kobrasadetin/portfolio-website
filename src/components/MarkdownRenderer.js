import React from 'react'
import ReactMarkdown from 'react-markdown'
import Typography from '@material-ui/core/Typography';

// ReactMarkdown is a great library, let's inject the Material UI typography for elements

// I don't know if getCoreProps is needed, returns an empty object in my tests
// const originalHeaderRenderer = (props) => (React.createElement(`h${props.level}`, getCoreProps(props), props.children))
function getCoreProps(props) {
    return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {}
}

const customHeader = (props) => {
    return (<Typography variant={`h${props.level}`}>{props.children}</Typography>)
}

const renderers = { 'heading': customHeader }

const MarkdownRenderer = ({ source }) => {
    return (
        <ReactMarkdown renderers={renderers} source={source}></ReactMarkdown>)
}

export default MarkdownRenderer