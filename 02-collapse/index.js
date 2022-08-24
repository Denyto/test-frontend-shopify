const collapseButtton = document.querySelector('.collapsible__button');
const collapseContent = document.querySelector('.collapsible__content');
const buttonVisible = collapseButtton.querySelector('.collapsible__action--visible');
const buttonHidden = collapseButtton.querySelector('.collapsible__action--hidden');
let isFinishAnimate = false;

const collapseContentHideKeyframes = new KeyframeEffect(
  collapseContent,
  [
    {
      opacity: 1,
      transform: 'translateY(0px)',
      color: 'red',
    },
    {
      opacity: 0,
      transform: 'translateY(700px)',
      fontSize: '32px',
    },
  ],
  { duration: 1000, fill: 'forwards' }
);

const collapseContentShowKeyframes = new KeyframeEffect(
  collapseContent,
  [
    {
      opacity: 0,
      transform: 'translateY(700px)',
      color: 'green',
      fontSize: '32px',
    },
    {
      opacity: 1,
      transform: 'translateY(0px)',
    },
  ],
  { duration: 1000, fill: 'forwards' }
);

const collapseHideAnimation = new Animation(collapseContentHideKeyframes, document.timeline);
const collapseShowAnimation = new Animation(collapseContentShowKeyframes, document.timeline);

collapseButtton.querySelector('.collapsible__action--hidden').style.display = 'none';

collapseButtton.addEventListener('click', (e) => {
  console.log(e.target, e.target.innerText);
  if (!isFinishAnimate) {
    collapseShowAnimation.cancel();
    collapseHideAnimation.play();
    buttonVisible.style.display = 'none';
    buttonHidden.style.display = 'block';
  } else {
    collapseHideAnimation.cancel();
    collapseShowAnimation.play();
    buttonVisible.style.display = 'block';
    buttonHidden.style.display = 'none';
  }
});
collapseHideAnimation.addEventListener('finish', (e) => {
  isFinishAnimate = true;
});

collapseShowAnimation.addEventListener('finish', (e) => {
  isFinishAnimate = false;
});
