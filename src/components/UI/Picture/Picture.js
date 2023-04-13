const Picture = (props) => {
  const imagePath = `${process.env.PUBLIC_URL}/images/${props.imgFolder}/`;

  return (
    <picture id={`picture_${props.imgName}`} className={props?.imgClasses}>
      {/* Load lightweight WEPB if browser supports */}
      <source
        srcSet={`${imagePath}/${props.imgName}.webp`}
        type={"image/webp"}
      />
      {/* Fallback jpg if browser doesnt support */}
      <source srcSet={`${imagePath}/${props.imgName}.jpg`} type={"image/jpg"} />
      <img
        style={{ width: "100%" }}
        id={`img_${props.imgName}`}
        key={`key_loaded_image_${props.imgName}`}
        src={`${imagePath}/${props.imgName}.jpg`}
        alt={props.imgAlt}
        loading={props.imgLazyLoad ? "lazy" : "eager"}
        className={`shadowed-image ${props?.imgClasses}`}
      />
    </picture>
  );
};

export default Picture;
