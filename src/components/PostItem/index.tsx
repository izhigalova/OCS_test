import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

import { PostWithUser, Id, Comment } from '../../types'
import * as actions from '../../store/actions'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import {
  Card,
  CardContent,
  ListItem,
  List,
  ListItemText,
  Breadcrumbs,
  Link,
  Divider,
} from '@material-ui/core'

interface Props {
  post: PostWithUser | null
  fetchPostItem: (id: Id) => void
  fetchCommentList: (postId: Id) => void
  comments: Comment[]
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
    return (
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            All posts
          </Link>
          <Typography color="textPrimary">{props.post.title}</Typography>
        </Breadcrumbs>
        <Divider />
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {props.post.title}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {`author: ${props.post.user.name}, company: ${props.post.user.company.name}`}
            </Typography>
            <Typography variant="body1">{props.post.body}</Typography>

            <List>
              <Typography variant="h5" gutterBottom>
                Comments:
              </Typography>
              {props.comments.map(comment => (
                <ListItem key={comment.id}>
                  <ListItemText
                    primary={`${comment.name} (${comment.email})`}
                    secondary={comment.body}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    )
  }

  return null
}

const mapStateToProps = ({
  post,
  comments,
}: {
  post: PostWithUser
  comments: Comment[]
}) => ({
  post,
  comments,
})

const mapDispatchToProps = {
  fetchPostItem: actions.fetchPostItem,
  fetchCommentList: actions.fetchCommentList,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
