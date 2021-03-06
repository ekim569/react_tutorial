import React, { useRef , useState } from 'react';
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'



function App() {
 
  const [users , setUsers] = useState (
    [
      {
          id:1,
          username:"KIM",
          email:"1@naver.com"
      },
      {
          id:2,
          username:"PARK",
          email:"2@naver.com"
      },
      {
          id:3,
          username:"SONG",
          email:"3@naver.com"
      }
  ]
  )

  const [inputs , setInputs] = useState({
    username:'',
    email:''

   })

  const {username , email} = inputs
  const nextId = useRef(4)

  const onChangeInput =(e)=>{
    console.log(e.target)
    const {name , value} = e.target
    setInputs({
      ...inputs,
      [name] :value
    });
  }
  const onCreate =()=>{
    const user = {
      id:nextId.current,
       username,
       email
    }
    setUsers([...users,user])
    
    setInputs({
      username:'',
      email:''
    })
    nextId.current +=1
  }

  const onRemove = (id)=>{
    setUsers(users.filter(user=>user.id !== id))
  }
  return (
      <>
      <Wrapper>
      <Hello name="김태경"  color="red" isSpecial={true} />
      <Hello  color="blue" />
      </Wrapper>
      <Counter />
      <InputSample />
      <CreateUser user={username} useremail={email} onChange={onChangeInput}  onCreate={onCreate}/>
      <UserList Key={users.id} users={users} onRemove = {onRemove} />
      </>
  );
}

export default App;
