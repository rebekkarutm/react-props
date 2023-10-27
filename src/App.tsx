import Card from './cards';

function App() {
  const display = [
    {
      pictureURL:"https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x2.jpg",
      title:'Frog',
      paragraph:'This is a frog.',
      paragraphName:  'His name is Freddy.'
    },
    {
      pictureURL:"data:image/jpeg;base64,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",
      title: 'Meerkat',
      paragraph: 'This is a meerkat.',
      paragraphName:  'Her name is Molly.'
    },
    {
      pictureURL:"https://i.natgeofe.com/n/b8a16028-034a-4cc3-8691-a10c86709b3c/snakes_19.jpg?w=1084.125&h=721.875",
      title: 'Snake',
      paragraph: 'This is a snake.',
      paragraphName:  'His name is Sunny.'
    }
  ]
  return (
    <>
    <h1>Hi there</h1>
    <div style={{display:'flex'}} >
    {display.map((card)=>{
        return (<div key={card.title}>
        <Card data={card}></Card>
        <br/>
        </div>)
      })}
    </div>
    </>
  );
}

export default App;
