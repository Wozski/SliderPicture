export const PutPicture = ({ data, length }) => {
  return <img src={data} alt="travel image" key={length} />;
};
