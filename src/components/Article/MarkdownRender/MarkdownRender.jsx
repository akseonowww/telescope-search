/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import ReactMarkdown from 'react-markdown'

const _mapProps = (props) => ({
   ...props,
   escapeHtml: false,
})

const MarkdownReader = (props) => <ReactMarkdown {..._mapProps(props)} />

export default MarkdownReader
