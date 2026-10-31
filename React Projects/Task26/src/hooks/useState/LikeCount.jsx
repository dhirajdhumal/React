import { useState } from "react";

function LikeCount() {
    const [likeCount, setLikeCount] = useState(false);
    return ( 
        <>
            <h1>Like Button</h1>
            <div>
                <button onClick={()=> setLikeCount(!likeCount)}><i className="bi bi-heart-fill"></i> {likeCount ? 1 : ""}</button>
            </div>
        </>
    );
}

export default LikeCount;
