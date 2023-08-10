import { Story as StoryType } from "@/types/story";
import classNames from "classnames";
import Image from "next/image";
import styles from "./story.module.sass";

interface PropTypes {
  story: StoryType;
}

const Story = ({ story }: PropTypes) => {
  return (
    <div className={styles.story}>
      {/* <h2 className={styles.title}>{story.es.name}</h2> */}
      <div className={styles.photos}>
        {story.photos.map(
          ({ id, background, image: { height, url, orientation, width } }) => (
            <div className={styles.photo} key={id}>
              <div
                className={classNames(styles.image, styles[orientation])}
                style={{
                  aspectRatio: width / height,
                  backgroundColor: background,
                }}
              >
                <Image
                  alt={`${story.es.name} | ${id}`}
                  fill
                  src={url}
                />
              </div>
            </div>
          )
        )}
      </div>

      <footer>
        <p>{story.es.name}</p>
        <p>{story.es.country}, {story.year}.</p>
      </footer>
    </div>
  );
};

export default Story;
