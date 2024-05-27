import { useParams } from 'react-router-dom';

const Singlecar = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Singlecar id : {id}</h1>
    </>
  );
}

export default Singlecar;
