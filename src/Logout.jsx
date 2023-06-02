export function Logout() {
  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = "/login";
  }

  return (
    <div className="logout">
      <h1 className="logout-title"><b>Logged Out</b></h1>
      <h6>You have successfully logged out</h6>
      <br/>
      <button className="logout-button" onClick={handleSubmit}>Sign in Again</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}