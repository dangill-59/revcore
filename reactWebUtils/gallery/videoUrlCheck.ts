import * as _ from 'lodash';

import { IVideoUrl } from './gallery.reducers';

export function getValidVideoURL(url: string): Promise<IVideoUrl> {
  if (!url) return Promise.reject('empty url');

  if (url.indexOf('vimeo.com') != -1) return checkVimeo(url);

  return Promise.reject('not a valid video url');
}

const VIMEO_BASE_URL = 'https://vimeo.com/api/oembed.json?url=';
function checkVimeo(url: string): Promise<IVideoUrl> {
  return fetch(VIMEO_BASE_URL + encodeURIComponent(url), { noAuth: true } as any)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (!response.video_id) throw 'not a valid Vimeo video';

      return {
        //thumbnail: response.thumbnail_url,
        thumbnail: response.thumbnail_url_with_play_button,

        //playURL: _.trimEnd(response.provider_url, '/') + response.uri
        playURL: url,
      };
    });
}
