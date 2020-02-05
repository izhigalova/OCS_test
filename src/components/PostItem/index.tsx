import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

import { PostWithUser, Id } from '../../types'
import * as actions from '../../store/actions'

interface Props {
  post: PostWithUser | null
  fetchPostItem: (id: Id) => void
}

const PostItem = (props: Props) => {
  useEffect(() => {
    props.fetchPostItem(1)
  }, [])

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
    </div>
  )
}

const mapStateToProps = ({ post }: { post: PostWithUser }) => ({
  post,
})

const mapDispatchToProps = {
  fetchPostItem: actions.fetchPostItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
