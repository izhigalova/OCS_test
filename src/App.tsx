import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { UiState } from './types'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

interface Props {
  children: React.ReactNode
  ui: UiState
}

const App = ({ children, ui }: Props) => {
  const classes = useStyles()
  return (
    <div style={{ padding: '2rem 0' }}>
      {children}
      <Backdrop className={classes.backdrop} open={ui.spinnerIsShown}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

const mapStateToProps = ({ ui }: { ui: UiState }) => ({
  ui,
})

export default connect(mapStateToProps)(App)
