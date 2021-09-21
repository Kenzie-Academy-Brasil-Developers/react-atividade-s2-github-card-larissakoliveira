import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./style.css";

const InputSearch = ({setApiPage}) => {
  const formSchema = yup.object().shape({
    search: yup.string(),
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
        setApiPage(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(handleMyInput)}>
      <input
        type="text"
        placeholder="Digite o nome do repositório"
        {...register("search")}
      />
      {errors.search?.message && <h4>{errors.search?.message}</h4>}
      <button type="submit">Pesquisar</button>
    </form>
  );
};

export default InputSearch;
