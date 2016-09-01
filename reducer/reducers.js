import { combineReducers } from 'redux'
import {
  FETCH_VIDEO_BY_TAG, INVALIDATE_VIDEOS,
  RECEIVE_VIDEOS
} from '../actions/UserActions'

function videos(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_VIDEOS:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case FETCH_VIDEO_BY_TAG:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.videos,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function videosByTag(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_VIDEOS:
    case RECEIVE_VIDEOS:
    case FETCH_VIDEO_BY_TAG:
      return Object.assign({}, state, {
        [action.tag]: videos(state[action.tag], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  videosByTag
})

export default rootReducer