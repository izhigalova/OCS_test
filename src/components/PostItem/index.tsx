import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

import { PostWithUser, Id } from '../../types'
import * as actions from '../../store/actions'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { Card, CardContent } from '@material-ui/core'

interface Props {
  post: PostWithUser | null
  fetchPostItem: (id: Id) => void
  fetchCommentList: (postId: Id) => void
}

const PostItem = (props: Props) => {
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      props.fetchPostItem(id)
      props.fetchCommentList(id)
    }
  }, [])

  if (props.post !== null) {
    console.log('props.post', props)

    return (
      <Container>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {props.post.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {`author: ${props.post.user.name}, company: ${props.post.user.company.name}`}
            </Typography>
            <Typography variant="body2">{props.post.body}</Typography>
          </CardContent>
        </Card>
      </Container>
    )
  }

  return null
}

const mapStateToProps = ({ post }: { post: PostWithUser }) => ({
  post,
})

const mapDispatchToProps = {
  fetchPostItem: actions.fetchPostItem,
  fetchCommentList: actions.fetchCommentList,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
