import React from "react";
import { Story as StoryType } from "../../api/story";
import animateScroll from "../../helpers/scroll-animation";
import { Lang } from "../../i18n";
import Story from "./story";

import styles from "./story.module.sass";

interface PropTypes {
  current?: StoryType;
  // @TODO: Change to map
  favorites: StoryType["id"][];
  lang: Lang;
  index?: number;
  onAddFavorite: (story: StoryType["id"]) => void;
  onRemoveFavorite: (story: StoryType["id"]) => void;
  stories: StoryType[];
}

interface StateTypes {
  animating: boolean;
  // scrollDirection: "up" | "down" | undefined;
  // scrollY: number;
  // timer?: NodeJS.Timeout;
}

class Stories extends React.Component<PropTypes, StateTypes> {
  state = {
    animating: false,
    // scrollDirection: undefined,
    // scrollY: 0,
    // timer: undefined,
  };
  _timeout: NodeJS.Timeout | null = null;

  constructor(props: PropTypes) {
    super(props);
    this.state = {
      animating: false,
      // scrollDirection: undefined,
      // scrollY: 0,
      // timer: undefined,
    };
    // this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount = () => {
    this.scrollToCurrent();

    // !!window && window.addEventListener("wheel", this.handleWheel);

    // const refresh = () => {
    //   console.log("scroll stopped");
    // };
    // !!window &&
    //   window.addEventListener("scroll", () => {
    //     // if (this.state.timer) {
    //     //   console.log("clear timer");
    //     //   clearTimeout(this.state.timer);
    //     // }

    //     // this.setState({
    //     //   timer: setTimeout(refresh, 250),
    //     // });
    //     // this.updateState(window.scrollY);
    //     if (this._timeout) {
    //       //if there is already a timeout in process cancel it
    //       clearTimeout(this._timeout);
    //       this._timeout = null;
    //     }
    //     this._timeout = setTimeout(() => {
    //       // console.log("scroll stopped");
    //       this.handleWheel();
    //     }, 50);
    //     //  if(this.state.scrollStatus !== 'scrolling') {
    //     //    this.setState({
    //     //      scrollStatus:'scrolling'
    //     //    });
    //     //  }
    //   });
  };

  componentDidUpdate = (prevProps: PropTypes) =>
    this.props.current?.id !== prevProps.current?.id && this.scrollToCurrent();

  scrollToCurrent = () => {
    const { current } = this.props;

    current &&
      document &&
      document.getElementById(current.id)?.scrollIntoView();
  };

  getScrollPosition = (story: StoryType): number | undefined => {
    const element = document && document.getElementById(story.id);

    if (!element) return;

    return element.offsetTop;
  };

  handleToggleFavorite = ({ id }: StoryType) => (isFavorite: boolean) =>
    isFavorite ? this.props.onRemoveFavorite(id) : this.props.onAddFavorite(id);

  // updateState = (scrollY: number, callback?: () => void) =>
  //   this.setState(
  //     {
  //       scrollDirection:
  //         scrollY > this.state.scrollY
  //           ? "down"
  //           : this.state.scrollY > scrollY
  //           ? "up"
  //           : undefined,
  //       scrollY,
  //     },
  //     callback
  //   );

  handleScrollAnimationEnd = () =>
    this.setState({
      animating: false,
    });

  scrollToStory = (story?: StoryType) => {
    const { scrollY: initialPosition } = window;

    if (!story) return;

    const targetPosition = this.getScrollPosition(story);

    if (!targetPosition) return;

    this.setState(
      {
        animating: true,
      },
      () => {
        animateScroll({
          targetPosition,
          initialPosition,
          onAnimationEnd: this.handleScrollAnimationEnd,
        });
      }
    );
  };

  handleWheel = () => {
    const current = Math.floor(window.scrollY / window.innerHeight) - 1;
    const delta = (window.scrollY / window.innerHeight) % 1;

    if (this.state.animating) return;
    // console.log("scroll direction", this.state.scrollDirection);
    if (delta > 0.4) {
      this.scrollToStory(this.props.stories[current + 1]);
      // console.log("scroll to next story", delta);
    }

    if (delta > 0 && delta < 0.6) {
      this.scrollToStory(this.props.stories[current]);
      // console.log("scroll to previous story", delta);
    }
    // this.updateState(window.scrollY, () => {
    //   if (this.state.animating) return;
    //   console.log("scroll direction", this.state.scrollDirection);
    //   if (this.state.scrollDirection === "down" && delta > 0.5) {
    //     this.scrollToStory(this.props.stories[current + 1]);
    //     console.log("scroll to next story", delta);
    //   }

    //   if (this.state.scrollDirection === "up" && delta > 0 && delta < 0.5) {
    //     this.scrollToStory(this.props.stories[current]);
    //     console.log("scroll to previous story", delta);
    //   }
    // });
  };

  render() {
    const { current, favorites, index, lang, stories } = this.props;

    return (
      <div className={styles.stories}>
        {stories.map((story) => (
          <Story
            index={index || 0}
            isCurrent={!!current && current.id === story.id}
            isFavorite={favorites.some((f) => f === story.id)}
            lang={lang}
            key={story.id}
            onToggleFavorite={this.handleToggleFavorite(story)}
            story={story}
          />
        ))}
      </div>
    );
  }
}

export default Stories;
