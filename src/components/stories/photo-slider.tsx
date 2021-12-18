import React from "react";
import { Story } from "../../api/story";

import styles from "./story.module.sass";

interface PropTypes {
  photos: Story["photos"];
}

interface StateTypes {
  loadImages: boolean;
}

class PhotoSlider extends React.Component<PropTypes, StateTypes> {
  state = {
    loadImages: false,
  };

  handleScroll = () =>
    !this.state.loadImages &&
    this.setState({
      loadImages: true,
    });

  render() {
    const { photos } = this.props;
    const { loadImages } = this.state;

    return (
      <div className={styles.photos} onScroll={this.handleScroll}>
        {photos.map((photo, i) => (
          <div className={styles.photo} key={photo.id}>
            <a
              className={styles.image}
              // onClick={handleEnterFullScreen(photo)}
              style={
                i === 0 || loadImages
                  ? {
                      backgroundImage: `url(${photo.image.thumbnails.full})`,
                    }
                  : {}
              }
            ></a>
          </div>
        ))}
      </div>
    );
  }
}

export default PhotoSlider;
