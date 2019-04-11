import React from 'react'
import PropTypes from 'prop-types'

import {Icon, Divider} from 'antd'

import {Meta} from './post/meta'
import {Read} from './post/read'

export class Post extends React.Component {
  render() {
    const {raw, post = {exclude: []}} = this.props

    return (
      <div>
        <Meta raw={raw} />
        <Divider>
          <Icon type="book" theme="outlined" />
        </Divider>
        <Read raw={raw} post={post} />
      </div>
    )
  }
}

Post.propTypes = {
  raw: PropTypes.object,
  post: PropTypes.object,
}
