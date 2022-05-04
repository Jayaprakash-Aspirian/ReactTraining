function ListsAndKeys(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        <h1>Books :</h1>
        {sidebar}
        <br />
        <h1>Content on Books :</h1>
        {content}
      </div>
    );
  }
  

export default ListsAndKeys;