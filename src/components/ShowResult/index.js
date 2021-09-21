import './style.css'

const ShowResult = ({information}) => {
  return (
    <>
    <img src={information.owner.avatar_url} alt=''></img>
    <h2>{information.full_name}</h2>
    <p>{information.comments_url}</p>
    </>
  )
};

export default ShowResult;