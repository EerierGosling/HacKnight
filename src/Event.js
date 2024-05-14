import "./Event.css";

function Event({ time, title, index }) {
    return (
        <div>
            {index != 0 && <hr></hr>}
            <div style={{ display: "flex" }}>
                <div style={{ width: 150 }}>
                    <p
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "20px",
                            paddingRight: "5px",
                        }}>
                        {time}:
                    </p>
                </div>
                <p style={{ color: "white", fontSize: "20px" }}>{title}</p>
            </div>
        </div>
    );
}

export default Event;
