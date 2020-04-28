import React from 'react'
import styles from './ContenfulRichText.module.css'

var keyIndex = 0

function text_marks (content, index, data, marks = []) {
    marks.forEach((mark, index) => {
        if (typeof TAG_TYPES[mark.type] === 'function') {
            content = TAG_TYPES[mark.type](content, index.toString())
        }
    })
    return content
}

function tag_a (content, data) {
    return (
        <a key={keyIndex.toString()} href={data.uri}>{content}</a>
    )
}

function tag_code (content) {
    return (
        <code className={styles.code} key={keyIndex.toString()}>
            {content}
        </code>
    )
}

function tag_em (content) {
    return <em key={keyIndex.toString()}>{content}</em>
}

function tag_hr (content) {
    return <hr key={keyIndex.toString()} />
}

function tag_h1 (content) {
    return (
        <h1 key={keyIndex.toString()}>{content}</h1>
    )
}

function tag_h2 (content) {
    return (
        <h2 key={keyIndex.toString()}>{content}</h2>
    )
}

function tag_h3 (content) {
    return (
        <h3 key={keyIndex.toString()}>{content}</h3>
    )
}

function tag_h4 (content) {
    return (
        <h4 key={keyIndex.toString()}>{content}</h4>
    )
}

function tag_h5 (content) {
    return (
        <h5 key={keyIndex.toString()}>{content}</h5>
    )
}

function tag_h6 (content) {
    return (
        <h6 key={keyIndex.toString()}>{content}</h6>
    )
}

function tag_li (content) {
    return <li key={keyIndex.toString()}>{content}</li>
}

function tag_p (content) {
    return (
        <p key={keyIndex.toString()}>{content}</p>
    )
}

function tag_ol (content) {
    keyIndex++
    return (
        <ol key={keyIndex.toString()}>
            {content}
        </ol>
    )
}

function tag_strong (content) {
    return <strong key={keyIndex.toString()}>{content}</strong>
}

function tag_ul (content) {
    keyIndex++
    return (
        <ul key={keyIndex.toString()}>
            {content}
        </ul>
    )
}

function tag_img (content) {
    if (content.file) {
        return <img key={keyIndex.toString()} alt={content.title} src={content.file.url} />
    }
}

const TAG_TYPES = {
    'bold': tag_strong,
    'code': tag_code,
    'document': null,
    'hr': tag_hr,
    'heading-1': tag_h1,
    'heading-2': tag_h2,
    'heading-3': tag_h3,
    'heading-4': tag_h4,
    'heading-5': tag_h5,
    'heading-6': tag_h6,
    'hyperlink': tag_a,
    'italic': tag_em,
    'list-item': tag_li,
    'ordered-list': tag_ol,
    'paragraph': tag_p,
    'text': text_marks,
    'unordered-list': tag_ul
}

const TAG_TYPES_NO_CHILDREN = ['text']

const EMBEDDED_TYPES = [
    'embedded-asset-block',
    'embedded-entry-block',
    'embedded-entry-inline'
]

class ContentfulRichText extends React.Component {
    constructor (props) {
        super(props)
        this.renderTag = this.renderTag.bind(this)
        this.index = 0
    }

    renderTag (item) {
        if (!item) {
            return
        }
        if (TAG_TYPES_NO_CHILDREN.includes(item.nodeType)) {
            return this.renderTagNoChilrdren(item)
        } else if (EMBEDDED_TYPES.includes(item.nodeType)) {
            return this.renderEmbeddedType(item)
        } else if (item.content) {
            return this.renderTagWithChildren(item)
        } else {
            return ''
        }
    }

    renderTagNoChilrdren (item) {
        if (item.marks) {
            item.marks.forEach(mark => {
                if (typeof TAG_TYPES[mark.type] === 'function') {
                    item.value = TAG_TYPES[mark.type](item.value)
                }
            })
        }
        if (typeof TAG_TYPES[item.nodeType] === 'function') {
            return TAG_TYPES[item.nodeType](item.value, item.data, item.marks)
        } else {
            return item.value
        }
    }

    renderEmbeddedType (item) {
        if (item.nodeType === 'embedded-asset-block') {
            if (item.data && item.data.target && item.data.target.fields && item.data.target.fields.file) {
                if (/^image/.test(item.data.target.fields.file.contentType)) {
                    return tag_img(item.data.target.fields)
                }
            }
        }
    }

    renderTagWithChildren (item) {
        const self = this
        let children = []
        item.content.forEach((childItem) => {
            keyIndex++
            children.push(self.renderTag(childItem))
        })
        if (typeof TAG_TYPES[item.nodeType] === 'function') {
            return (
                TAG_TYPES[item.nodeType](children, item.data, item.marks)
            )
        } else {
            return children
        }
    }

    render () {
        return (
            <React.Fragment>
                {this.renderTag(this.props.data)}
            </React.Fragment>
        )
    }
}

export default ContentfulRichText