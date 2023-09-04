const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
    'Erase again, and then',
    'A poppy blooms.'    
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => {

        if( index < poem.lines.length && index != poem.lines.length-1){
          return <div key={index}><p key={index}>{line}</p><hr/></div>
        }else{
          return <div key={index}><p>{line}</p></div>
        }

        
      } 
      )}
    </article>
  );
}
