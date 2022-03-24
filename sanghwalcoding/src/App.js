import React from 'react'
import './App.css';
function Header(props) {
    console.log('props', props, props.title);
    return (
        <header>
            <h1>
                <a href="/" onClick = {(e)=>{e.preventDefault(); props.onChangeMode();}}>{props.title}</a>
            </h1>
        </header>
    )
}

function Nav(props) {
    const lis = []
        for(let i = 0 ; i < props.topics.length;i++){
          let t = props.topics[i]; 
          lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(e)=>{e.preventDefault(); props.onChangeMode(e.target.id);}}>t.title</a></li>);
        }
    return (
    <nav>
        <ol>
          { lis }
        </ol>
    </nav>)
}
function Article() {
    return (<article>
        <h2>Welcome</h2>
        Hello, WEB
    </article>)
}
function App() {
    const topics = [ // eslint-disable-line no-unused-vars
        {
          id: 1,
          title: 'html',
          body: 'html is....'
        }
        ,
        {
          id: 2,
          title: 'css',
          body: 'css is....'
        }
        ,
        {
          id: 3,
          title: 'js',
          body: 'js is....'
        }
    ];
    return (
        <div className="App">
            <Header title="React" onChangeMode = {()=>{alert('header');}}></Header>
            <Nav topics={topics} onChangeMode = {(id)=>{alert(id);}}></Nav>
            <Article></Article>
        </div>
    );
}

export default App;