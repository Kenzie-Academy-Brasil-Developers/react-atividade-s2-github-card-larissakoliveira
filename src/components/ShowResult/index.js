import "./style.css";

const ShowResult = ({ information, error }) => {

  const { owner:{avatar_url}, full_name, description } = information

  return (
    <>
      {information !== undefined ?
      <>
      <img src={avatar_url} alt=""></img>
      <div>
      <h2>{full_name}</h2>
      <p>{description}</p>
      </div>
      </>
      :
      <h3>{error}</h3>
      }</>
  );
};  

export default ShowResult;