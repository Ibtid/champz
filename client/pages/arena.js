import React from "react";

const arena = () => {
  return (
    <div className="arena_screen">
      <div className="main_arena_container">
        <div className="left_arena_container">
          <div className="arena_heading_white">We step into the</div>
          <div className="arena_heading_red">Arena.</div>
          <div className="arena_body_text">
            We fight till the end. <br /> <br />
            We rise as ChampZ. <br /> <br />
            10,000 ChampionZ come together to conquer the world.
            <br /> <br />
            We bond with one another and we build the community together.
            <br /> <br />
            The Arena gives all the ChampionZ access to special events, <br />
            secret channels, dope merchandise, and much more.
          </div>
          
          <div className="arena_end_text_white">
            Do you have what it takes to
            be a <p className="arena_end_text_red">Champion?</p> 
          </div>
        </div>
        <div className="arena_right_container">

        </div>
      </div>
    </div>
  );
};

export default arena;
