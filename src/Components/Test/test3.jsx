function UserStatus({status}){
  return(
    <div className="user-status">
      <h1>Active Status</h1>
      <p>{status?"Active":"Offline"}</p>
    </div>
  )
}
export default UserStatus;