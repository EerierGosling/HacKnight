// import './Event.css';

function Event({time, title}) {
  return (
    <div style={{display: 'flex'}}>
      <p style={{color:'white', fontWeight:'bold', fontSize:"20px", paddingRight:"5px"}}>
        {time}:
      </p>
      <p style={{color:'white', fontSize:"20px"}}>
        {title}
      </p>
    </div>
  );
}

export default Event;