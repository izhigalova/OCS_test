import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withRouter } from 'react-router-dom'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

const PostList = () => {
  return (
    <List>
      <ListItem button>
        <ListItemText primary="title" secondary="author: 123, company" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="title" secondary="author: 123, company" />
      </ListItem>
    </List>
  )
}

const mapStateToProps = ({ posts }: { posts: any }) => ({
  postList: posts,
})

const mapDispatchToProps = {
  fetchPostList: actions.fetchPostList,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PostList))
