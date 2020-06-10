// Give Sibling Elements a Unique Key Attribute 

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map( (item, id) => {
      return <li key={id}>{item}</li>
    })
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };

  // The list of front end frameworks are rendered as an unordered list in the browser. 