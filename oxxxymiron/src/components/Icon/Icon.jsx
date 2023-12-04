const Icon = ({ name, width, height }) => {
  return (
    <svg className={`icon icon-${name}`} style={{ width, height }}>
      <use xlinkHref={`../../images/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
