import "./Event.css";

function Event({ start_time, end_time, title, index }) {
    return (
        <div>
            {index !== 0 && <hr></hr>}
            <div style={{ display: "flex" }}>
                <div style={{ width: 180 }}>
                    <p
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "20px",
                            paddingRight: "5px",
                        }}>
                        {start_time} {end_time && 
                        <span> - <br></br>{end_time}</span>}:
                    </p>
                </div>
                <p style={{ color: "white", fontSize: "20px" }}>{title}</p>
            </div>
        </div>
    );
}

export default Event;