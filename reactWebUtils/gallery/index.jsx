import React, { Component } from 'react';

import { Image } from 'react-bootstrap';
import Lightbox from 'react-images';
import { map as _map } from 'lodash';
import { connect } from 'react-redux';
import { Actions as galleryActions } from './gallery.reducers';

const MyGallery = ({ images, lightBoxOpen, currentImage, dispatch }) => {
  const imgObjects = _map(images, (img) => ({ src: img }));

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        {imgObjects.map((img, i) => (
          <div
            key={i}
            style={{ display: 'inline-block', margin: 1, position: 'relative', minWidth: 100 }}
          >
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault();
                dispatch(galleryActions.selectImage(i));
                dispatch(galleryActions.showLightBox(true));
              }}
            >
              <Image src={img.src} rounded style={{ height: 150 }} />
            </a>
          </div>
        ))}
      </div>

      <Lightbox
        images={imgObjects}
        onClose={(_) => dispatch(galleryActions.showLightBox(false))}
        onClickPrev={(_) => dispatch(galleryActions.navigate(false, images.length))}
        onClickNext={(_) => dispatch(galleryActions.navigate(true, images.length))}
        currentImage={currentImage}
        isOpen={lightBoxOpen}
      />
    </div>
  );
};

export default connect((state) => {
  return {
    lightBoxOpen: state.gallery.lightBoxOpen,
    currentImage: state.gallery.currentSelectedImageIndex,
  };
})(MyGallery);
