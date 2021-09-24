import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./style.css";
import { useState } from "react";
import ShowResult from "../ShowResult";

const InputSearch = ({ setApiPage }) => {
  const [information, setInformation] = useState("");
  const [error, setError] = useState("");

  const formSchema = yup.object().shape({
    search: yup.string().required("Digite o nome do repositório").matches(information,information.message),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleMyInput = (data) => {
    fetch(`https://api.github.com/repos/${data.search}`)
      .then((response) => response.json())
      .then((response) => {
        handleData(response);
      })
      .catch((err) => 
      setError('não existe esse repositório', err)
      );
  };

  const handleData = (data) => {
    setInformation(data);
  };

  return (
    <>
    <form onSubmit={handleSubmit(handleMyInput)}>
      <input
        type="text"
        placeholder="Digite o nome do repositório"
        {...register("search")}
      />
      {errors.search?.message && <h4>{errors.search?.message}</h4>}
      <button type="submit">Pesquisar</button>
    </form>
    <div className='result'>
     {information && <ShowResult error={error} information={information} />}
     </div>
     </>
  );
};

export default InputSearch;