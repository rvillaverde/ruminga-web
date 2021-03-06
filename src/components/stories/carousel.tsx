import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Story as StoryType, Photo as StoryPhotoType } from "../../api/story";
import { Lang } from "../../i18n";
import CloseIcon from "../../icons/close";
import PhotoSlider from "./photo-slider";

import styles from "./story.module.sass";

interface PropTypes {
  activePhoto?: StoryPhotoType;
  lang: Lang;
  onEnterFullScreen: (photo: StoryPhotoType) => void;
  onExitFullScreen: () => void;
  story: StoryType;
}

const Carousel: React.FunctionComponent<PropTypes> = ({
  activePhoto,
  onEnterFullScreen,
  onExitFullScreen,
  story,
}: PropTypes) => {
  const handle = useFullScreenHandle();

  const handleEnterFullScreen = (photo: StoryPhotoType) => () => {
    onEnterFullScreen(photo);
    handle.enter();
  };

  const handleExitFullScreen = () => {
    handle.exit();
    onExitFullScreen();
  };

  return (
    <React.Fragment>
      <FullScreen handle={handle}>
        {activePhoto && (
          <div className={styles["full-screen"]}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${activePhoto.image.url})` }}
            ></div>
            <button
              className={styles["exit-button"]}
              onClick={handleExitFullScreen}
            >
              <CloseIcon />
            </button>
          </div>
        )}
      </FullScreen>
      <PhotoSlider photos={story.photos} />
    </React.Fragment>
  );
};

export default Carousel;
