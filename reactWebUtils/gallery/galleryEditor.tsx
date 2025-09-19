import * as React from 'react';
import * as _ from 'lodash';

import { Button, ButtonToolbar, Glyphicon, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensureGallery, { IOrderedFile, IVideoUrl } from './gallery.reducers';

import { Dispatch } from 'redux';
import Dropzone from 'react-dropzone';
import ResizableBox from 'react-resizable-box';
import { connect } from 'react-redux';
import { getValidVideoURL } from './videoUrlCheck';

const dropstyle = {
  width: '100%',
  height: '100%',
  borderWidth: 2,
  borderColor: 'rgb(102, 102, 102)',
  borderStyle: 'dashed',
  borderRadius: 5,
};

const dropActiveStyle = _.assign({}, dropstyle, { borderColor: 'rgb(0, 102, 0)' });

const IMAGEDRAGGINGTYPE = 'imagedraggingtype';

type GalleryProps = {
  dispatch;
  currentImageDetailsForEdit: {};
  newFiles: IOrderedFile[];
} & ICompProps;

class Gallery extends React.Component<GalleryProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      dragisOverMeOver: {},
    };
  }

  componentDidMount() {
    ensureGallery();
  }

  componentWillUnmount() {
    this.props.dispatch(ensureGallery().clearFile(/*all*/));
  }

  markDragOver(index: number, value: boolean) {
    const { dragisOverMeOver } = this.state;
    let newval = _.assign({}, dragisOverMeOver);

    if (value) newval[index] = true;
    else delete newval[index];

    this.setState({ dragisOverMeOver: newval });
  }

  render() {
    const {
      images,
      newFiles,
      onImageDelete,
      onImageReorder,
      editorOptions,
      currentImageDetailsForEdit,
      onVideoDropped,
      dispatch,
    } = this.props;
    const { dragisOverMeOver } = this.state;

    const ImageDetailsEditor =
      editorOptions && editorOptions.ImageDetailsEditor ? editorOptions.ImageDetailsEditor : null;
    const ImageStyleDelegate =
      editorOptions && editorOptions.ImageStyleDelegate ? editorOptions.ImageStyleDelegate : null;

    let sortedImages = [];

    {
      let allImages = [];
      if (newFiles && newFiles.length > 0)
        allImages = _.map(newFiles, (f: any) => _.assign(f, { isNew: true, imagePath: f.preview }));

      if (images && images.length > 0) allImages = _.concat(allImages, images);

      sortedImages = _.sortBy(allImages, (f: any) => f.order || 65000);
    }

    _.each(sortedImages, (image: any, i) => (image.order = i + 1));

    function onDrop(acceptedFiles: File[], rejectedFiles, evt) {
      const order = (evt.dataTransfer || {}).DROPPEDINDEX || 65000;

      if (acceptedFiles && acceptedFiles.length > 0) {
        dispatch(ensureGallery().addFiles(acceptedFiles, order));
      } else if (_.includes(evt.dataTransfer.types, 'text/uri-list')) {
        const url = (evt.dataTransfer.getData('text/uri-list') || '').toString();

        if (url && onVideoDropped) {
          getValidVideoURL(url)
            .then((videoUrl) => {
              onVideoDropped(videoUrl, order);
            })
            .catch((error) => {
              console.warn('not a valid drop : ' + (error || {}).toString());
            });
        }
      }
    }

    return (
      <div>
        <ResizableBox
          height={200}
          width='100%'
          enable={{
            top: false,
            right: false,
            bottom: true,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <Dropzone
            style={dropstyle}
            activeStyle={dropActiveStyle}
            onDrop={onDrop}
            accept='image/*'
          >
            <div className='text-center' style={{ overflow: 'scroll', height: '100%' }}>
              {sortedImages.map((nf, i) => (
                <div
                  key={i}
                  style={{
                    display: 'inline-block',
                    margin: 1,
                    position: 'relative',
                    minWidth: 100,
                  }}
                >
                  <div style={ImageStyleDelegate ? ImageStyleDelegate(nf) : {}}>
                    <div
                      onDragEnter={(e) => this.markDragOver(i, true)}
                      onDragLeave={(e) => this.markDragOver(i, false)}
                      onDrop={(e) => {
                        if (_.includes(e.dataTransfer.types, IMAGEDRAGGINGTYPE)) {
                          e.preventDefault();
                          e.stopPropagation();

                          const droppedIndex = parseInt(e.dataTransfer.getData(IMAGEDRAGGINGTYPE));
                          if (i == droppedIndex) return;

                          this.markDragOver(i, false);

                          const droppedImage = sortedImages[droppedIndex];

                          const dummyTobeRemoved = { removeme: true };

                          const newImageOrder = _.clone(sortedImages);

                          //replace the dropped image with dummy so that index information is intact
                          newImageOrder.splice(droppedIndex, 1, dummyTobeRemoved);

                          //now put the dropped image in it's place
                          newImageOrder.splice(i, 0, droppedImage);

                          _.remove(newImageOrder, (image: any) => image.removeme);

                          _.each(newImageOrder, (image: any, i) => (image.order = i + 1));

                          const newImages = _.filter(newImageOrder, (image) => image.isNew);
                          const existingImages = _.filter(newImageOrder, (image) => !image.isNew);

                          if (newImages.length > 0)
                            dispatch(ensureGallery().updateFileList(newImages));

                          if (onImageReorder && existingImages.length > 0)
                            onImageReorder(existingImages);

                          return;
                        }

                        (e.dataTransfer as any).DROPPEDINDEX = i + 1;
                      }}
                      onDragStart={(e) => {
                        e.dataTransfer.setData(IMAGEDRAGGINGTYPE, i.toString());
                        e.dataTransfer.dropEffect = 'move';
                      }}
                      style={{
                        height: 150,
                        border: dragisOverMeOver[i] ? 'dotted 2px #777' : 'none',
                      }}
                    >
                      <Image src={nf.imagePath} rounded style={{ height: 150 }} />
                    </div>
                  </div>

                  <ButtonToolbar style={{ position: 'absolute', top: 5, right: 5 }}>
                    {ImageDetailsEditor && !nf.isNew && (
                      <Button
                        bsStyle='info'
                        bsSize='xsmall'
                        onClick={(e) => {
                          e.stopPropagation();

                          const imageIndex = _.indexOf(images, nf);
                          if (-1 != imageIndex) {
                            dispatch(
                              ensureGallery().showImageEditor({
                                updatePath: 'images[' + imageIndex + ']',
                                image: nf,
                              }),
                            );
                          } else {
                            console.error('invalid image index');
                          }
                        }}
                      >
                        <OverlayTrigger
                          placement='bottom'
                          overlay={<Tooltip id='editImageTooltip'>edit image properties.</Tooltip>}
                        >
                          <Glyphicon glyph='pencil' />
                        </OverlayTrigger>
                      </Button>
                    )}

                    {onImageDelete && (
                      <Button
                        bsStyle='danger'
                        bsSize='xsmall'
                        onClick={(e) => {
                          e.stopPropagation();

                          if (nf.isNew) {
                            dispatch(ensureGallery().clearFile(nf.imagePath));
                          } else {
                            onImageDelete([nf.imagePath]);
                          }
                        }}
                      >
                        <OverlayTrigger
                          placement='bottom'
                          overlay={<Tooltip id='removeimageTooltip'>Remove this image.</Tooltip>}
                        >
                          <span>X</span>
                        </OverlayTrigger>
                      </Button>
                    )}
                  </ButtonToolbar>
                </div>
              ))}

              <p>Drop images, or click to select files to upload.</p>
            </div>
          </Dropzone>
        </ResizableBox>

        {currentImageDetailsForEdit && ImageDetailsEditor && (
          <div>
            <ImageDetailsEditor
              forImage={currentImageDetailsForEdit}
              onClose={(_) => dispatch(ensureGallery().showImageEditor(null))}
            />
          </div>
        )}
      </div>
    );
  }
}

export interface IEditorOptions {
  //used to show editor for image details
  ImageDetailsEditor?: any;
  ImageStyleDelegate?: (any) => {};

  //Shown before image gallery is shown
  PreImageComponent?: any;

  //Shown After image gallery
  PostImageComponent?: any;
}

interface ICompProps {
  images?: any[];
  onImageDelete?: (imagepaths: string[]) => void;
  onImageReorder?: (newimages: any[]) => void;
  onVideoDropped?: (video: IVideoUrl, order: number) => void;
  editorOptions?: IEditorOptions;
}

export default connect<{}, {}, ICompProps>((state, ownprops: any) => {
  const gallery = ensureGallery().getCurrentState(state);

  return {
    currentImageDetailsForEdit: gallery.currentImageDetailsForEdit,
    newFiles: gallery.newFiles,
  };
})(Gallery);
