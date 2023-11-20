import {useState} from 'react'

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) =>{
    //previnir evento
    // tratando valores sem escrita
    e.preventDefault();
    if(!value || !category) return;

    //adcionar todo
    // limpar os campo
    setValue("");
    setCategory("");

    console.log(value,category);


  };

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form  onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder='Digite um titulo'
            onChange={(e) => setValue(e.target.value)}
            
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} > 
                <option value=""> Selecione uma Categoria</option>
                <option value="Trabalho"> Trabalho</option>
                <option value="Pessoal"> Pessoal</option>
                <option value="Estudos"> Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
        </div>
  )
}

export default TodoForm