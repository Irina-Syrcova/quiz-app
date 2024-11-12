const Icon = ({id, width, height, viewBox, className}) => {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox}>
      <use href= {`./images/fragments.svg#${id}`}></use>
    </svg>
  )
}

export default Icon;