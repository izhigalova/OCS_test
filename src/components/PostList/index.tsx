import React, { useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Waypoint } from 'react-waypoint'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

import { PostWithUser } from '../../types'

import { useHistory } from 'react-router-dom'

interface Props {
  fetchPostList: () => void
  postList: PostWithUser[]
}

const PostList = (props: Props) => {
  const history = useHistory()
  useEffect(() => {
    props.fetchPostList()
  }, [])

  const _handleWaypointEnter = () => {
    console.log('_handleWaypointEnter')
  }

  return (
    <List>
      {props.postList.map(post => (
        <ListItem
          button
          key={post.id}
          onClick={() => {
            history.push(`/posts/${post.id}`)
          }}
        >
          <ListItemText
            primary={post.title}
            secondary={`author: ${post.user.name}, company: ${post.user.company.name}`}
          />
        </ListItem>
      ))}
      <Waypoint onEnter={_handleWaypointEnter} />
    </List>
  )
}

const mapStateToProps = ({ posts }: { posts: PostWithUser[] }) => ({
  postList: posts,
})

const mapDispatchToProps = {
  fetchPostList: actions.fetchPostList,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
