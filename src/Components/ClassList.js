const users=[
  {id:1,name:"Riktha",email:"riktha.l2022ai-ml@sece.ac.in"},
  {id:2,name:"Ravi",email:"ravi@gmail.com"},
  {id:3,name:"Sudha",email:"sudha@gmail.com"}
];

function UserList(){
  return(
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>  // key = user.id
      ))}
    </div>
  );
}


const students=[
  {id:1,name:"Riktha"},{
  id:2,name:"Ravi"},
  {id:3,name:"Sudha"}
];
function Students(){
  return(
    <div>
      {students.map((student)=>(
        <p key={student.id}>:{student.name}</p>  
      ))}
    </div>
  );
}
export {Students};
export default UserList;