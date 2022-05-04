import React from 'react';
function FraagmentsDemo(props) {
    const content=props.posts.map(post=> (
      <React.Fragment key={post.id}>
        <dt>{post.title}</dt>
        <dd>{post.content}</dd>
      </React.Fragment>
    ))
    return (
      < >
        <hr />
        {content}
      </>
    );
  }

export default FraagmentsDemo;