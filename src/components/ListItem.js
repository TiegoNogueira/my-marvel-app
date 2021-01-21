import React, {useState, useEffect} from 'react';

export default function ListItem() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://gateway.marvel.com/v1/public/characters")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <ul>
                {items.map(item => (
                    <li key={item.id}> {item.name} {item.thumbnail}
                    </li>
                ))}
            </ul>
            </div>
            
        );
    }
}

/*
export default function ListItem2(props) {
  return (
      <li className="listItem stack-small">
          <div className="c-cb">
              <input id={props.id} type="checkbox" defaultChecked={props.completed} />
              <label className="todo-label" htmlFor={props.id}>
                  {props.name}
            </label>
          </div>
          <div className="btn-group">
              <button type="button" className="btn">
                  Edit <span className="visually-hidden">Eat</span>
              </button>
              <button type="button" className="btn btn__danger">
                  Delete <span className="visually-hidden">Eat</span>
              </button>
          </div>
      </li>
  );
}
*/