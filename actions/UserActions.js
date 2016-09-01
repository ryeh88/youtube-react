import fetch from 'isomorphic-fetch';

export const FETCH_VIDEO_BY_TAG = 'FETCH_VIDEO_BY_TAG';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const INVALIDATE_VIDEOS = 'INVALIDATE_VIDEOS';

export function fetchVideo(tag){
	return {
		type: FETCH_VIDEO_BY_TAG,
		tag
	};
}

export function invalidateVideos(tag){
  return{
    type: INVALIDATE_VIDEOS,
    tag
  }
}

export function receiveVideos(tag, json) {
  return {
    type: RECEIVE_VIDEOS,
    tag,
    videos: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchByTag(tag){
    return dispatch => {
    dispatch(fetchVideo(tag))
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&topicId=${tag}&key=AIzaSyC-YwaZCp_YfJyGMj-pPy7_Ms1zZlGd_xs`)
          .then((response) => response.json()) 
          .then((responseJson) => dispatch(receiveVideos(tag, responseJson)))
          .catch((error) => {
            console.log("error");
          });
    }
}

function shouldFetchVideos(state, tag) {
  const videos = state.videosByTag[Videos]
  if (!videos) {
    return true
  } else if (videos.isFetching) {
    return false
  } else {
    return videos.didInvalidate
  }
}
