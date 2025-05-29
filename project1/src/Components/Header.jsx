
const Header = () => {
    const isLogin = false;
    const greeting = isLogin ? 'Hello User' : 'Hello Guest';
  return (
    <div>
       <h1>Conditional rendering</h1>

       <h2>{greeting}  #This will render accorning to the condition of true or false</h2>
    </div>
  )
}

export default Header