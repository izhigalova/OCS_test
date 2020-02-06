import React, { useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Waypoint } from 'react-waypoint'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as actions from '../../store/actions'

import { PostWithUser, Post, UiState, UsersState } from '../../types'
import { Container, Typography } from '@material-ui/core'

interface Props {
  fetchPostList: (start?: number, limit?: number) => void
  fetchUserList: () => void
  postList: Post[]
  ui: UiState
  users: UsersState | null
}

const PostList = (props: Props) => {
  const history = useHistory()
  useEffect(() => {
    props.fetchPostList()
    props.fetchUserList()
  }, [])

  const _handleWaypointEnter = () => {
    if (!props.ui.spinnerIsShown) {
      props.fetchPostList(props.postList.length, 25)
    }
  }

  const users = props.users

  if (users != null) {
    const postsWithUser: PostWithUser[] = props.postList.map((post: Post) => {
      return {
        ...post,
        user: users[post.userId],
      }
    })
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          All posts
        </Typography>
        <List>
          {postsWithUser.map(post => (
            <ListItem
              button
              key={post.id}
              onClick={() => {
                history.push(`/posts/${post.id}`)
              }}
            >
              <ListItemText
                primary={`${post.id} ${post.title}`}
                secondary={`author: ${post.user.name}, company: ${post.user.company.name}`}
              />
            </ListItem>
          ))}
          <Waypoint onEnter={_handleWaypointEnter} />
        </List>
      </Container>
    )
  }

  return null
}

const mapStateToProps = ({
  posts,
  ui,
  users,
}: {
  posts: Post[]
  ui: UiState
  users: UsersState | null
}) => ({
  postList: posts,
  ui,
  users,
})

const mapDispatchToProps = {
  fetchPostList: actions.fetchPostList,
  fetchUserList: actions.fetchUserList,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
