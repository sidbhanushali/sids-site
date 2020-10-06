import React from "react";
import "./Personal.css";
import "../../mediaQueries.css";

const Personal = () => (
  <section className='personal' id='personal'>
    <div className='container'>
      <div className='section-heading'>
        <h1>Personal</h1>
        <h6>Who is the person behind the keyboard?</h6>
      </div>
      <div className='bio'>
        <p>
          My roots are actually from a tiny, yet proudly tech-savy country of
          Estonia. It's a land LOVE WRITING BLOGS AND MMA AND GOOD WEATHER AND
          DOGS AND I HAVE A GERMAN SCHPERD
          <br />
          <br />
          However, as fate had it, I moved to Switzerland to follow my heart in
          the summer of 2019. I live here now with my partner and our two
          felines, a perfect stereotypical family of "crazy cat people". A
          mandatory picture of them both below, as they would loudly protest at
          being left out.
          <br />I named one of our cats Leeroy Jenkins as a tribute to my World
          of Warcraft raiding days. 6 cups of coffee per day. This is the way.
          Harry Potter and Witcher franchises have my heart I'm at my happiest
          when I'm elbow deep in some DIY project or a good book.
        </p>
      </div>
    </div>
  </section>
);

export default Personal;
