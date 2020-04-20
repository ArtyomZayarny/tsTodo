import React, {useState,useRef} from 'react'

type TodoFormProps = {
  onAdd(title:string):void
}

export const TodoForm:React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [error,setError] = useState('');
  const addHandler = (event:React.KeyboardEvent) => {
      if(event.key === 'Enter') {
        if (ref.current!.value === '') {
          setError('Please write the name of todo');
        } else {
          props.onAdd(ref.current!.value)
          setError('');
          ref.current!.value = '';
        }
      }
  }
  const handleBlur = () =>{
    setError('')
  }
 
    return (
          <div className="input-field">
            <input 
              autoComplete="off"
              ref={ref}
              id="last_name"
              type="text"
              placeholder="What need to do ?"
              onKeyPress = {addHandler}
              onBlur={ () => {handleBlur()}}
              />
            <label htmlFor="last_name"></label>
            {error && <p className="error">{error}</p> }
          </div>
       
    )
}