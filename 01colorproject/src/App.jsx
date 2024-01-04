import './App.css'
import Button from './Button'

function App() {

  const handleClick = (e) => {
    document.body.classList = "";
    document.body.classList.add(e);
  };

  const colorArray = ['red', 'blue', 'black', 'pink', 'orange', 'emerald', 'rose', 'purple'];

  return (
    <>
      <div className='btnGroup flex gap-4 text-xl'>
        {
          colorArray.map((color, i) => {
            return <Button key={i} handleClick={handleClick} color={`bg-${color}-600`} />
          })
        }
      </div>
    </>
  )
}

export default App
