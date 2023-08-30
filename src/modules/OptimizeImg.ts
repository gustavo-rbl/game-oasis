const OptimizeImg = (url: string) => {
  return url.split("/media/").join("/media/crop/600/400/");
};

export default OptimizeImg;
